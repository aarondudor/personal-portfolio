import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0e141f] text-indigo-50">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="justify-center items-center pb-8 md:pb-12 px-9">
            <p className="text-3xl font-bold inline border-b-8 border-indigo-500 md:text-5xl text-white">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-9 text-l md:text-2xl">
          <div className="pb-4">
            <p>Welcome to my portfolio!</p>
          </div>
          <div>
            <p>
              I am a recent graduate from the University of Wisconsin-Madison
              with a B.S. in Computer Science and a Certificate in Digital
              Studies. I am passionate about building programs and creating
              digital experiences that bring new innovation and excitement.
              Currently, I am very interested in front end development, however
              I am open to any opportunity to learn and grow in my software
              development career.
            </p>
          </div>
          <div className="pt-4">
            <p>Feel free to contact me with any opportunities!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
