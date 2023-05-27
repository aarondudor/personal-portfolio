import React, { useState } from "react";
import Logo from "../assets/AD-logo-transparent.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContactPage } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0e141f] text-white">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "7rem" }} />
      </div>

      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* stacked menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars size="30" color="#fff" />
        ) : (
          <FaTimes size="30" color="#fff" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#dedcdc] flex flex-col justify-center items-center"
        }
      >
        <li className="py-8 text-5xl">Home</li>
        <li className="py-8 text-5xl">About</li>
        <li className="py-8 text-5xl">Skills</li>
        <li className="py-8 text-5xl">Projects</li>
        <li className="py-8 text-5xl">Contact</li>
      </ul>

      {/* icon menu */}
      <div className="flex fixed flex-col top-[35%] left-1">
        <ul className="flex flex-col gap-5">
          <li className="relative group">
            <div className="absolute top-0 left-0 ml-6 w-40 h-full bg-gray-700 rounded-full transform opacity-0 group-hover:opacity-100 transition duration-100">
              <a className="flex ml-10 items-center justify-center h-full text-white text-lg font-bold">
                LinkedIn
              </a>
            </div>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transition-all transform">
              <a className="text-white text-lg font-bold">
                <FaLinkedin size={30} />
              </a>
            </div>
          </li>
          <li className="relative group">
            <div className="absolute top-0 left-0 ml-6 w-40 h-full bg-gray-700 rounded-full transform opacity-0 group-hover:opacity-100 transition duration-100">
              <a className="flex ml-10 items-center justify-center h-full text-white text-lg font-bold">
                GitHub
              </a>
            </div>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transition-all transform">
              <a className="text-white text-lg font-bold">
                <FaGithub size={30} />
              </a>
            </div>
          </li>
          <li className="relative group">
            <div className="absolute top-0 left-0 ml-6 w-40 h-full bg-gray-700 rounded-full transform opacity-0 group-hover:opacity-100 transition duration-100">
              <a className="flex ml-7 items-center justify-center h-full text-white text-lg font-bold">
                Email
              </a>
            </div>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transition-all transform">
              <a className="text-white text-lg font-bold">
                <HiOutlineMail size={30} />
              </a>
            </div>
          </li>
          <li className="relative group">
            <div className="absolute top-0 left-0 ml-6 w-40 h-full bg-gray-700 rounded-full transform opacity-0 group-hover:opacity-100 transition duration-100">
              <a className="flex ml-10 items-center justify-center h-full text-white text-lg font-bold">
                Resume
              </a>
            </div>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transition-all transform">
              <a className="text-white text-lg font-bold">
                <MdOutlineContactPage size={30} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
