import React, { useState } from 'react';
import {
  FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaChevronDown
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {

 

     return (
     <div className="drawer lg:drawer-open">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  text-lg text-white ">
        {/* Page content here */}
        {/* <h1 className='text-red-900 text-5xl'> Dasboard</h1> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side border-4    rounded-xl  ">
        <label
          htmlFor="dashboard-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full    bg-gradient-to-r from-[#e87c4e] via-[#F15F22] to-[#df571d]    text-lg text-white ">
          {/* Sidebar content here */}
          <li>
            {/* <Link to="/dashboard">My Appoinment</Link> */}
          </li>
          

          {/* <!-- Agrega más enlaces para la navegación lateral --> */}

          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">SERVICES</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-services">Add Services</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/">Manage Services</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Department</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-department">Add Department</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-department">Manage Department</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Health Package </span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-package">Add Package  </Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-package">Manage Package</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Facility</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-facility">Add Facility</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-department">Manage Facility</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Review</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-review">Add Review</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-review">Manage Review</Link>
                </li>
              </div>
            </details>
          </li>
          
        </ul>
      </div>
    </div>
     );
};

export default Dashboard;