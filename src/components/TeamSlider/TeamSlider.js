import React from "react";
import Slider from "react-slick";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const teamData = [
  {
    name: "Mohammad Salim",
    designation: "Managing Director",
    image: "https://atcbd.net//public/images/team/BOSS.jpg",
    phone: "+8801819556752",
    email: "atc@dhaka.net",
    socials: ["twitter", "linkedin"],
  },
  {
    name: "Md. Miron Hossain",
    designation: "Executive Director",
    image: "https://atcbd.net//public/images/team/EX-Dir52.jpg",
    phone: "+8801819556754",
    email: "miron@atcbd.net",
  },
  {
    name: "Engr.Iqbal Alam Tutul",
    designation: "Deputy General Manager",
    image: "https://atcbd.net/public/images/team/No-Image.jpg",
    phone: "+8801819556759",
    email: "tutul@atcbd.net",
  },
  {
    name: "Engr.Eusuf Alam",
    designation: "Senior Manager",
    image: "https://atcbd.net/public/images/team/No-Image.jpg",
    phone: "+8801819556757",
    email: "info@atcbd.net",
  },
  {
    name: "Engr.Md.Golam Mortuza (Shawon)",
    designation: "Manager",
    image: "https://atcbd.net/public/images/team/No-Image.jpg",
    phone: "+8801847182123",
    email: "mortuzashaon@atcbd.net",
  },
  {
    name: "Engr.Sultan Mahmud",
    designation: "Manager",
    image: "https://atcbd.net/public/images/team/No-Image.jpg",
    phone: "+88047182128",
    email: "sultan@atcbd.net",
  },
];

const TeamSlider = () => {

















  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="full-width-slider  px-4 py-10 bg-gray-50">
      <div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
          Team Members
        </h1>

        <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          What We Can Do For You
        </p>
      </div>

      <Slider {...settings}>
        {teamData.map((member, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-md text-center p-4">
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.designation}</p>
              <div className="flex justify-center gap-4 text-blue-600 mt-3">
                <a href={`tel:${member.phone}`}>
                  <FaPhone className="hover:text-green-600" />
                </a>
                <a href={`mailto:${member.email}`}>
                  <FaEnvelope className="hover:text-red-500" />
                </a>
                {member.socials?.includes("twitter") && (
                  <a href="#">
                    <FaTwitter className="hover:text-sky-400" />
                  </a>
                )}
                {member.socials?.includes("linkedin") && (
                  <a href="#">
                    <FaLinkedin className="hover:text-blue-800" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
