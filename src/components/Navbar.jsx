import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link as LinkScroll } from "react-scroll";
import Resume from "../assets/Resume_AaronDudor_2023.pdf";

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

  const openMailCleint = (url) => {
    window.location.href = "mailto:" + url;
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [helpNav, setHelp] = useState(false);
  const handleHelpClick = () => setHelp(!helpNav);

  return (
    <div
      id="nav"
      className="fixed w-full z-50 h-20 flex justify-end items-center px-4 bg-[#0e141f] text-white"
    >
      {/* menu */}
      <div>
        <ul className="hidden lg:flex">
          <li className="cursor-default">
            <LinkScroll
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer hover:text-indigo-500 duration-200 hover:duration-200"
            >
              Home
            </LinkScroll>
          </li>
          <li className="cursor-default">
            <LinkScroll
              to="about"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer hover:text-indigo-500 duration-200 hover:duration-200"
            >
              About
            </LinkScroll>
          </li>
          <li className="cursor-default">
            <LinkScroll
              to="experience"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer hover:text-indigo-500 duration-200 hover:duration-200"
            >
              Experience
            </LinkScroll>
          </li>
          <li className="cursor-default">
            <LinkScroll
              to="skills"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer hover:text-indigo-500 duration-200 hover:duration-200"
            >
              Skills
            </LinkScroll>
          </li>
          <li className="cursor-default">
            <LinkScroll
              to="projects"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer hover:text-indigo-500 duration-200 hover:duration-200"
            >
              Projects
            </LinkScroll>
          </li>
          <li className="cursor-default">
            <LinkScroll
              to="contact"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer hover:text-indigo-500 duration-200 hover:duration-200"
            >
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>

      {/* help button */}
      <div className="hidden fixed bottom-10 right-4">
        <button
          onClick={handleHelpClick}
          className="rounded-full bg-indigo-400 w-16 h-16 text-4xl font-bold duraiton-300 hover:duration-300 hover:bg-indigo-700"
        >
          ?
        </button>
      </div>

      {/* stacked menu */}
      <div onClick={handleClick} className="lg:hidden z-50">
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
            : "absolute z-40 top-0 left-0 w-full h-screen bg-[#0e141f] text-white flex flex-col justify-center items-center"
        }
      >
        <li className="pb-4 md:pb-6 text-4xl md:text-6xl font-bold hover:text-indigo-500 hover:duration-200 duration-200">
          <LinkScroll
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </LinkScroll>
        </li>
        <li className="py-4 md:py-6 text-4xl md:text-6xl font-bold hover:text-indigo-500 hover:duration-200 duration-200">
          <LinkScroll
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </LinkScroll>
        </li>
        <li className="py-4 md:py-6 text-4xl md:text-6xl font-bold hover:text-indigo-500 hover:duration-200 duration-200">
          <LinkScroll
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </LinkScroll>
        </li>
        <li className="py-4 md:py-6 text-4xl md:text-6xl font-bold hover:text-indigo-500 hover:duration-200 duration-200">
          <LinkScroll
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </LinkScroll>
        </li>
        <li className="py-4 md:py-6 text-4xl md:text-6xl font-bold hover:text-indigo-500 hover:duration-200 duration-200">
          <LinkScroll
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </LinkScroll>
        </li>
        <li className="pt-4 md:pt-6 text-4xl md:text-6xl font-bold hover:text-indigo-500 hover:duration-200 duration-200">
          <LinkScroll
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </LinkScroll>
        </li>
      </ul>

      {/* icon menu */}
      <div className="hidden lg:flex fixed left-1 h-full items-center top-0">
        <ul className="flex flex-col gap-4">
          <li className="cursor-default">
            <div
              onMouseEnter={handleHover1}
              onMouseLeave={handleHoverOff1}
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/aarondudor")
              }
              className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-300 hover:bg-indigo-700 duration-300 cursor-pointer"
            >
              <a className="text-xl font-bold">
                {!isHovered1 ? <FaLinkedin size={30} /> : <p>LinkedIn</p>}
              </a>
            </div>
          </li>
          <li className="cursor-default">
            <div
              onMouseEnter={handleHover2}
              onMouseLeave={handleHoverOff2}
              onClick={() => openInNewTab("https://www.github.com/aarondudor")}
              className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-300 hover:bg-indigo-700 duration-300 cursor-pointer"
            >
              <a className="text-xl font-bold">
                {!isHovered2 ? <FaGithub size={30} /> : <p>Github</p>}
              </a>
            </div>
          </li>
          <li className="cursor-default">
            <div
              onMouseEnter={handleHover3}
              onMouseLeave={handleHoverOff3}
              onClick={() => openMailCleint("aarondudor@gmail.com")}
              className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center transform hover:w-32 hover:duration-300 hover:bg-indigo-700 duration-300 cursor-pointer"
            >
              <a className="text-xl font-bold">
                {!isHovered3 ? <HiOutlineMail size={30} /> : <p>Email</p>}
              </a>
            </div>
          </li>
          <li className="cursor-default">
            <div
              onMouseEnter={handleHover4}
              onMouseLeave={handleHoverOff4}
              onClick={() => openInNewTab(Resume)}
              className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center transform hover:w-32 hover-duration-300 hover:bg-indigo-700 duration-300 cursor-pointer"
            >
              <a className="text-xl font-bold">
                {!isHovered4 ? (
                  <MdOutlineContactPage size={30} />
                ) : (
                  <p>Resume</p>
                )}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
