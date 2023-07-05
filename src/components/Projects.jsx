import React from "react";
import GTown from "../assets/graphics_town.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen bg-[#0e141f] text-indigo-50">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="justify-center items-center px-9">
          <p className="text-3xl md:text-5xl font-bold inline border-b-8 border-indigo-500 text-white">
            Projects
          </p>
          <p className="pt-8 md:pt-12 pb-6 text-l md:text-2xl w-full">
            These are a few notable projects that I have worked on. Hover over
            the images to view the demo or code behind the projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-16 py-3">
          <div
            style={{ backgroundImage: `url(${GTown})` }}
            className="shadow-indigo-500 shadow group container rounded-md flex justify-center items-center mx-auto text-center content-div h-36 w-3/4 sm:w-full sm:h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-100 hover:duration-100">
              <span className="text-md sm:text-xl font-bold text-white tracking-wider">
                Office Hour Queue
              </span>
              <div className="pt-3 sm:pt-8 text-center">
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-indigo-500 font-bold text-sm sm:text-lg hover:text-white hover:bg-indigo-500 hover:duration-100 duration-100">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/aarondudor/office-hours-queue"
                  target="_blank"
                >
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-indigo-500 font-bold text-sm sm:text-lg hover:text-white hover:bg-indigo-500 hover:duration-100 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GTown})` }}
            className="shadow-indigo-500 shadow group container rounded-md flex justify-center items-center text-center mx-auto content-div h-36 w-3/4 sm:w-full sm:h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-100 hover:duration-100">
              <span className="text-md sm:text-xl font-bold text-white tracking-wider">
                Graphics Town
              </span>
              <div className="pt-3 sm:pt-8 text-center">
                <a
                  href="https://aarondudor.github.io/graphics_town/for_students/final-grtown.html"
                  target="_blank"
                >
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-indigo-500 font-bold text-sm sm:text-lg hover:text-white hover:bg-indigo-500 hover:duration-100 duration-100">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/aarondudor/graphics_town"
                  target="_blank"
                >
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-indigo-500 font-bold text-sm sm:text-lg hover:text-white hover:bg-indigo-500 hover:duration-100 duration-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
