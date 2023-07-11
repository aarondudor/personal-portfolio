import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import THREE from "../assets/three.png";
import MYSQL from "../assets/mysql.png";
import JAVA from "../assets/java.png";
import PYTHON from "../assets/python.png";
import GIT from "../assets/git.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0e141f] text-indigo-50">
      <div className="max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto flex flex-col justify-center w-full h-full">
        <div className="px-9">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-8 border-indigo-500 text-white">
            Skills
          </p>
          <p className="pt-8 pb-4 text-md md:text-lg lg:text-xl w-full">
            These are technologies that I currently work with and have used in
            the past.
          </p>
        </div>
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 gap-y-4 text-center pt-5 text-xl font-semibold">
          <div className="hover:scale-110 duration-500">
            <img src={HTML} alt="HTML logo" className="w-10 sm:w-20 mx-auto" />
            <p className="my-3">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={CSS} alt="CSS logo" className="w-10 sm:w-20 mx-auto" />
            <p className="my-3">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={JAVASCRIPT}
              alt="JavaScript logo"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-3">JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={JAVA} alt="Java logo" className="w-10 sm:w-20 mx-auto" />
            <p className="my-3">Java</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={PYTHON}
              alt="Python logo"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-3">Python</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={REACT}
              alt="React logo"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-3">React</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={TAILWIND}
              alt="Tailwind logo"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-3">Tailwind</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={MYSQL}
              alt="MySQL logo"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-3">MySQL</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={THREE}
              alt="Three logo"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-3">Three.js</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={GIT} alt="Git logo" className="w-10 sm:w-20 mx-auto" />
            <p className="my-3">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
