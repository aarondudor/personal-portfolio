import React from "react";
import Portrait from "assets/professional_pic.png";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0e141f] text-indigo-50">
      <div className="flex flex-row gap-8 justify-center items-center w-full h-full max-w-[1000px] px-9 mx-auto">
        <div className="flex flex-col text-l md:text-xl items-start">
          <div className="">
            <p className="text-3xl md:text-5xl font-bold inline border-b-8 border-indigo-500 text-white">
              About
            </p>
          </div>
          <p className="pt-8">
            I am a recent graduate from the University of Wisconsin-Madison with
            a B.S. in Computer Science and a Certificate in Digital Studies. I
            am passionate about building programs and creating digital
            experiences that bring new innovation and excitement. I have always
            had a creative eye and have been particularly interested in frontend
            development, however I am open to any opportunity to learn and grow
            in my software development career. I am excited to take my first
            step into the field and begin my career in software development!
          </p>
          <p className="pt-4">
            Feel free to contact me with any opportunities!
          </p>
          <div className="sm:hidden w-36 pt-6 mx-auto sm:w-56">
            <img
              className="object-contain shadow shadow-indigo-500 rounded mx-auto"
              src={Portrait}
              alt="Portrait picture"
            ></img>
          </div>
        </div>
        <div className="hidden sm:block my-auto pt-8">
          <img
            className="shadow shadow-indigo-500 w-3/4 mx-auto rounded"
            src={Portrait}
            alt="Portrait picture"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
