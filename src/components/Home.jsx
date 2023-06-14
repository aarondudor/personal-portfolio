import React from "react";

const Home = () => {
  return <div id="home" className="w-full h-screen bg-[#0e141f]">
    <div className="max-w-[1000px] mx-auto px-9 flex flex-col justify-center h-full">
      <p className="text-indigo-300 text-xl md:text-4xl italic py-1">
        Hi, my name is
      </p>
      <h1 className="text-white text-4xl md:text-7xl font-bold pb-2">
        Aaron Dudor
      </h1>
      <h2 className="text-indigo-500 text-4xl md:text-6xl font-bold">
        I am a Software Developer.
      </h2>
      <p className="text-indigo-50 text-xl md:text-2xl py-6">
        I am a Junior Software Developer specializing in front end developement, 
        building interactive and appealing digital experiences. 
        I am currently working on developing my React and Tailwind skills to 
        create responsive web applications.
      </p>
      <div>
        <button className="text-white group font-bold text-md border-2 px-6 py-3 my-2 flex items-center duration-300 hover:bg-indigo-500 hover:border-indigo-500 hover:duration-300">View Work</button>
      </div>
    </div>

  </div>;
};

export default Home;
