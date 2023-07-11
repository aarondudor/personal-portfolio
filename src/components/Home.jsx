import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Frontend Developer.", "Web Developer."],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 1200,
  });

  return (
    <div id="home" className="w-full h-screen bg-[#0e141f]">
      <div className="max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto px-9 flex flex-col justify-center h-full">
        <p className="text-indigo-300 text-2xl md:text-4xl italic py-1">
          Hi, my name is...
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold pb-2">
          Aaron Dudor
        </h1>
        <h2 className="text-white text-4xl md:text-6xl font-bold">
          I am a <span className="text-indigo-500">{text}</span>
          <Cursor cursorBlinking="false" />
        </h2>
        <p className="text-indigo-50 text-l md:text-2xl py-6">
          I am a Junior Software Developer with a passion for building
          interactive and appealing digital experiences. I am currently working
          on developing my React and Tailwind skills to create responsive web
          applications.
        </p>
        <div>
          <LinkScroll to="projects" smooth={true} duration={500}>
            <button className="text-white group font-bold text-base border-2 px-6 py-3 my-2 flex items-center duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:duration-300">
              View Work
            </button>
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
