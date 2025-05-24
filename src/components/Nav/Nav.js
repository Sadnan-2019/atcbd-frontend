import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { NavLink } from "react-router-dom";
// import TopNav from "../TopNav/TopNav";
import atch from "../../assets/ATCL_Logo5.png";
const Nav = () => {
  const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1  bg-white   transition bg-yellow-500 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-60 shadow-md rounded-md px-2    ";

  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-black   ";
  const navItem = (
    <>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/news-media"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal} `)}
          to="/career"
        >
          Service
        </NavLink>
      </li>
      {/* <li className=" nav-item  p-2   	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li> */}
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >
          Product
        </NavLink>
      </li>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >
          Team
        </NavLink>
      </li>

      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item p-2 	">
        
      </li>
     

     
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="">
        <div className="navbar   ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className=" btn btn-ghost   text-white  lg:hidden "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl rounded-box  bg-gradient-to-r from-[#92468E] to-[#38235D]  text-white w-52 "
              >
                {navItem}
              </ul>
            </div>
            <div className="flex justify-items-center items-center gap-2 ">
              <img src={atch} title="" alt="" />
            </div>
          </div>
          <div className="navbar-end hidden lg:flex items-center justify-items-center px-3">
            <ul className="  menu-horizontal p-0">{navItem}</ul>

<div class=" ">
        <a
          class=" flex items-center gap-2 rounded-xl bg-[#F15F22] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href="/"
        >
         Get A Quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>


          </div>
          {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
