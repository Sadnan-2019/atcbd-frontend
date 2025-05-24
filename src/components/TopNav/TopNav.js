import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare  } from "react-icons/fa";
import { IoLogoInstagram   } from "react-icons/io";
import { FaYoutube    } from "react-icons/fa";
import { IoLogoLinkedin     } from "react-icons/io";
// import logo from "../../assets/logo.png";
const TopNav = () => {
  return (
    <div>
      <div className="  bg-[#F15F22]">
        <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12  py-3    items-center   ">
         <div className="grid grid-cols-2 justify-items-center items-center gap-12  ">
            <div
              className="flex items-center   font-bold text-white    gap-2"
               
            >
              <div>
                <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl text-white    " />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	"> Phone: +88 02 41024410</p>
                
              </div>
            </div>
            <div
              className="flex items-center font-bold      gap-2"
              style={{ color: "#92468E" }}
            >
              <div>
                <HiOutlineMailOpen className="text-[10px] lg:text-2xl  text-white 	  " />
              </div>
              <div>
                
                <p className="text-[10px] lg:text-xs	 text-white 	">Email: atc@dhaka.net</p>
              </div>
            </div>
             
          </div>
          <div className="grid grid-cols-2 justify-items-center items-center gap-12  ">
            <div
              className="flex items-center font-bold  justify-items-center   gap-2"
         
            >
              <div>
                <CiFacebook className="text-[10px] lg:text-2xl  text-white    " />
              </div>
              <div>
                <FaTwitterSquare className="text-[10px] lg:text-2xl text-white    " />
              </div>
              <div>
                <IoLogoInstagram className="text-[10px] lg:text-2xl text-white    " />
              </div>
              <div>
                <FaYoutube  className="text-[10px] lg:text-2xl text-white    " />
              </div>
              <div>
                <IoLogoLinkedin  className="text-[10px] lg:text-2xl text-white    " />
              </div>
               
            </div>
            
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
