import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      {/* Top Ribbon */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs text-white sm:py-3 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <p className="text-center sm:text-left">
            <span className="font-semibold">New:</span> The Starter plan is free — No credit card required.
          </p>
          <Link
            to="/pricing"
            className="group flex items-center font-medium text-white hover:text-gray-200 transition-colors duration-200"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 5h6v6" />
              <path d="M19 5 5 19" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold lg:text-3xl">
            <span className="text-black">Opp</span>
            <span className="relative inline-block">
              <span className="text-3xl text-neon-blue animate-pulse lg:text-4xl">O</span>
              <div className="absolute -inset-1 rounded-full border-2 border-neon-purple/60 animate-spin-slow"></div>
              <div className="absolute -inset-2 rounded-full border-2 border-neon-pink/50 animate-spin-slower"></div>
              <div className="absolute -inset-3 rounded-full border-2 border-neon-green/40 animate-spin-slowest"></div>
            </span>
            <span className="text-black">ra</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
  {/* Products Dropdown */}
  <div className="dropdown dropdown-hover">
    <label tabIndex={0} className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
      Products
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
      </svg>
    </label>

    <div
      tabIndex={0}
      className="dropdown-content z-[50] mt-3 w-[600px] bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 gap-4"
    >
      {/* Product Items */}
      {[
        { icon: "🧩", name: "Workflow Automation" },
        { icon: "🔗", name: "LinkedIn Extension" },
        { icon: "💬", name: "Reply Ora" },
        { icon: "🌟", name: "Smart Lead Scoring" },
        { icon: "🧠", name: "Ask Ora" },
        { icon: "🪄", name: "AI Planner" },
        { icon: "🏢", name: "Company Enrich" },
        { icon: "📞", name: "Contact Hunter" },
        { icon: "🚀", name: "Outreach Engine" },
        { icon: "📧", name: "Verify Emails" },
        { icon: "💼", name: "Sales CRM" },
      ].map((item) => (
        <a
          key={item.name}
          href="/"
          className="flex items-center gap-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 p-3 transition-all duration-200"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="font-medium text-gray-700">{item.name}</span>
        </a>
      ))}
    </div>
  </div>

  {/* Other Menu Items */}
  <Link to="/use-cases" className="px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
    Use Cases
  </Link>
  <Link to="/resources" className="px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
    Resources
  </Link>
  <Link to="/pricing" className="px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
    Pricing
  </Link>
</nav>


          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://app.oppora.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-gray-600 transition-colors"
            >
              <img src="/assets/icons/home/user.svg" alt="user" className="h-4 w-4" />
              Log in
            </a>
            <a
              href="https://app.oppora.ai/register"
              className="relative inline-flex items-center justify-between rounded-full bg-gradient-to-b from-[#08F0FF] to-[#2464EB] px-5 py-2.5 text-sm sm:text-lg font-semibold uppercase tracking-wide text-white hover:from-[#07D9E8] hover:to-[#1E56D1] transition-all"
            >
              <span>Get Started</span>
              <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-3 pb-4 animate-fade-in">
            {["Products", "Use Cases", "Resources", "Pricing"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item}
              </Link>
            ))}
            <a
              href="https://app.oppora.ai/login"
              className="block px-3 py-2 font-medium text-gray-700 hover:bg-gray-100"
            >
              Log in
            </a>
            <a
              href="https://app.oppora.ai/register"
              className="block text-center rounded-full bg-gradient-to-b from-[#08F0FF] to-[#2464EB] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
