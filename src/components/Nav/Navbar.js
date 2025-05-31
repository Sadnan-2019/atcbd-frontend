import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <div>
       {/* Navbar with responsive drawer */}
<div className="drawer drawer-end z-50">
  <input id="main-navbar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="inline-block">
            <img src="/assets/images/logo/logo.svg" alt="logo" className="max-w-[150px]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6">
              <li><a className="btn btn-ghost rounded-none" href="/about">About us</a></li>

              {/* Certification Dropdown */}
              <li className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost rounded-none flex items-center gap-1 cursor-pointer">
                  Certification
                  <svg className="inline ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8l4 4 4-4" /></svg>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-72 shadow z-[100]">
                  
                  {/* Product Certification */}
                  <li className="dropdown dropdown-hover dropdown-right">
                    <label tabIndex={0} className="justify-between">
                      Product Certification
                      <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8l4 4 4-4" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-64 shadow">
                      <li><a href="/product-certification/gots">GOTS</a></li>
                      <li><a href="/product-certification/ocs">OCS</a></li>
                      <li><a href="/product-certification/grs">GRS</a></li>
                      <li><a href="/product-certification/rcs">RCS</a></li>
                      <li><a href="/product-certification/rds">RDS</a></li>
                      <li><a href="/product-certification/rms">RMS</a></li>
                      <li><a href="/product-certification/ras">RAS</a></li>
                      <li><a href="/product-certification/rws">RWS</a></li>
                    </ul>
                  </li>

                  {/* Verification */}
                  <li className="dropdown dropdown-hover dropdown-right">
                    <label tabIndex={0} className="justify-between">
                      Verification
                      <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8l4 4 4-4" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-64 shadow">
                      <li><a href="/verification/higg-fem">Higg FEM Verification</a></li>
                    </ul>
                  </li>

                  {/* Climate & Sustainability */}
                  <li className="dropdown dropdown-hover dropdown-right">
                    <label tabIndex={0} className="justify-between">
                      Climate & Sustainability
                      <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8l4 4 4-4" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-64 shadow">
                      <li><a href="/climate-sustainability/claimcheck-by-ceres">ClaimCheck by CERES</a></li>
                      <li><a href="/climate-sustainability/globalgap">GLOBALG.A.P</a></li>
                      <li><a href="/climate-sustainability/rainforest-alliance">Rainforest Alliance</a></li>
                      <li><a href="/climate-sustainability/kohlenstoff-senke">Kohlenstoff-Senke</a></li>
                      <li><a href="/climate-sustainability/co2-land-standard">CO2-Land Standard</a></li>
                      <li><a href="/climate-sustainability/global-artisan-c-sink">Global Artisan C-Sink</a></li>
                      <li><a href="/climate-sustainability/world-climate-validation-and-certification">World-Climate Certification</a></li>
                      <li><a href="/climate-sustainability/fairtsa">FairTSA</a></li>
                      <li><a href="/climate-sustainability/nop">NOP</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li><a className="btn btn-ghost rounded-none" href="/certification-check">Certification Check</a></li>
              <li><a className="btn btn-ghost rounded-none" href="/training-schedule">Training</a></li>
              <li><a className="btn btn-ghost rounded-none" href="/contact">Contact Us</a></li>
              <li><a className="btn btn-ghost rounded-none" href="/useful-forms">Useful Forms</a></li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Toggle */}
            <label htmlFor="main-navbar" className="btn btn-square btn-ghost lg:hidden">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="14" width="20" height="2" fill="#4AAB3D" />
                <rect y="7" width="20" height="2" fill="#4AAB3D" />
                <rect width="20" height="2" fill="#4AAB3D" />
              </svg>
            </label>

            {/* Login */}
            <a
              href="https://ceres.pihr.xyz/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span className="me-1"><i className="fa-regular fa-right-to-bracket"></i></span>Login
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>

  {/* Drawer Side for Mobile */}
  <div className="drawer-side lg:hidden z-[9999]">
    <label htmlFor="main-navbar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
      <li><a href="/about">About us</a></li>
      <li>
        <details>
          <summary>Certification</summary>
          <ul>
            <li>
              <details>
                <summary>Product Certification</summary>
                <ul>
                  <li><a href="/product-certification/gots">GOTS</a></li>
                  <li><a href="/product-certification/ocs">OCS</a></li>
                  <li><a href="/product-certification/grs">GRS</a></li>
                  <li><a href="/product-certification/rcs">RCS</a></li>
                  <li><a href="/product-certification/rds">RDS</a></li>
                  <li><a href="/product-certification/rms">RMS</a></li>
                  <li><a href="/product-certification/ras">RAS</a></li>
                  <li><a href="/product-certification/rws">RWS</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Verification</summary>
                <ul>
                  <li><a href="/verification/higg-fem">Higg FEM</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Climate & Sustainability</summary>
                <ul>
                  <li><a href="/climate-sustainability/claimcheck-by-ceres">ClaimCheck</a></li>
                  <li><a href="/climate-sustainability/globalgap">GLOBALG.A.P</a></li>
                  <li><a href="/climate-sustainability/rainforest-alliance">Rainforest Alliance</a></li>
                  <li><a href="/climate-sustainability/kohlenstoff-senke">Kohlenstoff-Senke</a></li>
                  <li><a href="/climate-sustainability/co2-land-standard">CO2-Land Standard</a></li>
                  <li><a href="/climate-sustainability/global-artisan-c-sink">Global Artisan C-Sink</a></li>
                  <li><a href="/climate-sustainability/world-climate-validation-and-certification">World-Climate Certification</a></li>
                  <li><a href="/climate-sustainability/fairtsa">FairTSA</a></li>
                  <li><a href="/climate-sustainability/nop">NOP</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><a href="/certification-check">Certification Check</a></li>
      <li><a href="/training-schedule">Training</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/useful-forms">Useful Forms</a></li>
    </ul>
  </div>
</div>


          </div>
     );
};

export default Navbar;