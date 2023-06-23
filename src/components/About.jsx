import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0e141f] text-indigo-50">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="justify-center items-center pb-8 md:pb-12 px-9">
            <p className="text-3xl font-bold inline border-b-8 border-indigo-500 md:text-5xl">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-9 text-l md:text-2xl">
          <div className="pb-4">
            <p>Hi there! Welcome to my portfolio!</p>
          </div>
          <div>
            <p>
              I am a recent graduate from the University of Wisconsin-Madison
              with a B.S. in Computer Science. I am passionate about building
              programs and creating digital experiences. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Voluptates illo tempore ullam,
              nam eligendi, ex, doloremque voluptatum dolorum cupiditate
              repellat quia veniam facilis optio nisi! Aliquam saepe velit
              libero labore. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reiciendis ipsum commodi odit officiis inventore modi, sint
              dolor est nam enim vitae vero corrupti! Delectus repudiandae
              harum, magni dolores repellat modi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
