import React, { useState } from "react";
import Logo from "../assets/AD-logo-transparent.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link as LinkScroll} from "react-scroll";
import { Link } from "react-router-dom";
import Resume from "../assets/Resume_SoftwareDev.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [isHovered1, setIsHovered1] = useState(null);
  const handleHover1 = () => setIsHovered1(true);
  const handleHoverOff1 = () => setIsHovered1(false);
  
  const [isHovered2, setIsHovered2] = useState(null);
  const handleHover2 = () => setIsHovered2(true);
  const handleHoverOff2 = () => setIsHovered2(false);
  
  const [isHovered3, setIsHovered3] = useState(null);
  const handleHover3 = () => setIsHovered3(true);
  const handleHoverOff3 = () => setIsHovered3(false);
  
  const [isHovered4, setIsHovered4] = useState(null);
  const handleHover4 = () => setIsHovered4(true);
  const handleHoverOff4 = () => setIsHovered4(false);

  const openInNewTab = (url) => {window.open(url, '_blank', 'noreferrer');};
  
  return (
    <div id="nav" className="fixed w-full h-20 flex justify-end items-center px-4 bg-[#0e141f] text-white">
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li className="text-xl font-bold hover:text-indigo-500 duration-200 hover:duration-200">
            <LinkScroll to='home' smooth={true} duration={500}>Home</LinkScroll>
          </li>
          <li className="text-xl font-bold hover:text-indigo-500 duration-200 hover:duration-200">
            <LinkScroll to='about' smooth={true} duration={500}>About</LinkScroll>
          </li>
          <li className="text-xl font-bold hover:text-indigo-500 duration-200 hover:duration-200">
            <LinkScroll to='skills' smooth={true} duration={500}>Skills</LinkScroll>
          </li>
          <li className="text-xl font-bold hover:text-indigo-500 duration-200 hover:duration-200">
            <LinkScroll to='projects' smooth={true} duration={500}>Projects</LinkScroll>
          </li>
          <li className="text-xl font-bold hover:text-indigo-500 duration-200 hover:duration-200">
            <LinkScroll to='contact' smooth={true} duration={500}>Contact</LinkScroll>
          </li>
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
        <li className="py-8 text-5xl">
          <LinkScroll to="home" smooth={true} duration={500}>Home</LinkScroll>
        </li>
        <li className="py-8 text-5xl">
          <LinkScroll to="about" smooth={true} duration={500}>About</LinkScroll>
        </li>
        <li className="py-8 text-5xl">Skills</li>
        <li className="py-8 text-5xl">Projects</li>
        <li className="py-8 text-5xl">Contact</li>
      </ul>

      {/* icon menu */}
      <div className="hidden lg:flex fixed top-[25%] left-1">
        <ul className="flex flex-col gap-4">
          <li>
            <div onMouseEnter={handleHover1} onMouseLeave={handleHoverOff1} onClick={() => openInNewTab("https://www.linkedin.com/in/aarondudor/")} className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-200 hover:bg-indigo-500 duration-200">
              <a className="text-xl font-bold">
                {!isHovered1 ? (<FaLinkedin size={30} />) : (<p>LinkedIn</p>)}
              </a>
            </div>
          </li>
          <li>
            <div onMouseEnter={handleHover2} onMouseLeave={handleHoverOff2} onClick={() => openInNewTab("https://www.github.com/aarondudor")} className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-200 hover:bg-indigo-500 duration-200">
              <a className="text-xl font-bold">
                {!isHovered2 ? (<FaGithub size={30} />) : (<p>Github</p>)}
              </a>
            </div>
          </li>
          <li>
            <div onMouseEnter={handleHover3} onMouseLeave={handleHoverOff3} className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-200 hover:bg-indigo-500 duration-200">
              <a className="text-xl font-bold">                
              {!isHovered3 ? (<HiOutlineMail size={30} />) : (<p>Email</p>)}
              </a>
            </div>
          </li>
          <li>
            <div onMouseEnter={handleHover4} onMouseLeave={handleHoverOff4} onClick={() => openInNewTab(Resume)} className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-200 hover:bg-indigo-500 duration-200">
              <a className="text-xl font-bold">
              {!isHovered4 ? (<MdOutlineContactPage size={30} />) : (<p>Resume</p>)}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
