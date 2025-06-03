import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import atch from "../../assets/ATCL_Logo5.png";
import { toast } from "react-toastify";

const Nav = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
 const navigate = useNavigate();
  const location = useLocation(); // 👈 triggers re-render on route change
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login status whenever route changes
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, [location]); // 👈 run when location changes

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/login");
  };



  // Menu item styles
  const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1   transition bg-[#F15F22]   hover:bg-opacity-40 active:bg-[#F15F22] shadow-md rounded-md px-2";
  const normal =
    "mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-black";

  // Dropdown menu for Service
  const serviceDropdown = (
    <div
      className="relative"
      onMouseEnter={() => setServiceOpen(true)}
      onMouseLeave={() => setServiceOpen(false)}
    >
      <button
        className="flex items-center gap-1 focus:outline-none"
        onClick={() => setServiceOpen((prev) => !prev)}
        type="button"
      >
        <span className="whitespace-nowrap">Service</span>
        <svg
          className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        className={`absolute left-0 z-20 mt-2 w-40 rounded-md bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-lg py-2 text-sm transition-all duration-150 ${
          serviceOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/service1"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setServiceOpen(false)}
          >
            Service 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service2"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setServiceOpen(false)}
          >
            Service 2
          </NavLink>
        </li>
      </ul>
    </div>
  );

  // Dropdown menu for Product
  const productDropdown = (
    <div
      className="relative"
      onMouseEnter={() => setProductOpen(true)}
      onMouseLeave={() => setProductOpen(false)}
    >
      <button
        className="flex items-center gap-1 focus:outline-none"
        onClick={() => setProductOpen((prev) => !prev)}
        type="button"
      >
        <span className="whitespace-nowrap">Product</span>
        <svg
          className={`w-4 h-4 transition-transform ${productOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        className={`absolute left-0 z-20 mt-2 w-40 rounded-md bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-lg py-2 text-sm transition-all duration-150 ${
          productOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/product1"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setProductOpen(false)}
          >
            Product 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product2"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setProductOpen(false)}
          >
            Product 2
          </NavLink>
        </li>
      </ul>
    </div>
  );

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  // Mobile nav items
  const mobileNavItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/home"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/news-media"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
      </li>
      {/* Service mobile dropdown */}
      <li>
        <button
          className="flex items-center gap-1 w-full text-left focus:outline-none"
          onClick={() => setMobileServiceOpen((prev) => !prev)}
          type="button"
        >
          Service
          <svg
            className={`w-4 h-4 transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul className={`${mobileServiceOpen ? "block" : "hidden"} pl-4`}>
          <li>
            <NavLink
              to="/service1"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServiceOpen(false);
              }}
            >
              Service 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service2"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServiceOpen(false);
              }}
            >
              Service 2
            </NavLink>
          </li>
        </ul>
      </li>
      {/* Product mobile dropdown */}
      <li>
        <button
          className="flex items-center gap-1 w-full text-left focus:outline-none"
          onClick={() => setMobileProductOpen((prev) => !prev)}
          type="button"
        >
          Product
          <svg
            className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul className={`${mobileProductOpen ? "block" : "hidden"} pl-4`}>
          <li>
            <NavLink
              to="/product1"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileProductOpen(false);
              }}
            >
              Product 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product2"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileProductOpen(false);
              }}
            >
              Product 2
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
        >
          Team
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </NavLink>
      </li>
      <li className="pt-4">
        <a
          className="flex items-center gap-2 rounded-xl bg-[#F15F22] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href="/"
        >
          Get A Quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
    </>
  );

  // Desktop nav items
  const desktopNavItem = (
    <>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/news-media"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item p-2">{serviceDropdown}</li>
      <li className="nav-item p-2">{productDropdown}</li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/about"
        >
          Team
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item p-2">
  {!isLoggedIn ? (
    // Show Login if not logged in
    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? active : normal)}
    >
      Login
    </NavLink>
  ) : (
    // Show Dashboard and Logout if logged in
    <>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? active : normal)}
      >
        Dashboard
      </NavLink>

      <NavLink
        onClick={handleLogout}
        className="btn btn-sm btn-error ml-2"
      >
        Logout
      </NavLink>
    </>
  )}
</li>

    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#f5f0f0]  shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={atch} alt="ATCL Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">{desktopNavItem}</ul>
              <div className="ml-4">
                <a
                  className="flex items-center gap-2 rounded-xl bg-[#F15F22] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  href="/"
                >
                  Get A Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                className="text-white focus:outline-none p-2"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 p-4 bg-gradient-to-r from-[#92468E] to-[#38235D] text-white shadow-xl rounded-b-xl">
            {mobileNavItem}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;