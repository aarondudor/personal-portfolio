import React from "react";
import Resume from "../assets/Resume_AaronDudor_2023.pdf";

const Experience = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div
      id="experience"
      className="w-full h-screen bg-[#0e141f] text-indigo-50"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="px-9">
          <p className="md:text-5xl text-3xl font-bold inline border-b-8 border-indigo-500 text-white">
            Experience
          </p>
          <p className="pt-8 text-l md:text-xl w-full">
            These are my most recent work experiences. Additional information
            can be found on my{" "}
            <a
              onClick={() => openInNewTab(Resume)}
              className="text-indigo-400 cursor-pointer duration-100 hover:text-indigo-600 hover:duration-100"
            >
              resume
            </a>
            .
          </p>
        </div>
        <div className="w-full max-w-[1000px] mx-auto px-9 flex flex-col justify-center">
          <ul className="text-md cursor-text">
            <div className="pt-4">
              <li className="text-xl md:text-2xl font-bold cursor-text text-indigo-400">
                Mobile Support Technician
              </li>
              <li className="text-md md:text-lg cursor-text">
                Apex Systems | Madison, WI | June 2023 - Present
              </li>
              <ol className="list-disc list-inside px-5 text-sm md:text-md">
                <li className="cursor-text">
                  Installed and configured mobile applications for 1,300+
                  employees, maintaining a 100% successful installation rate
                </li>
                <li className="cursor-text">
                  Maintained accurate records of app installations, establishing
                  efficient tracking and reference for troubleshooting
                </li>
                <li className="cursor-text">
                  Provided clear instructions and demonstrations for users,
                  reducing user error and support requests by 80%
                </li>
              </ol>
            </div>
            <div className="pt-4">
              <li className="text-xl md:text-2xl font-bold cursor-text text-indigo-400">
                Help Desk Technician
              </li>
              <li className="text-md md:text-lg cursor-text">
                WCER Research IT | Madison, WI | September 2021 - May 2023
              </li>
              <ol className="list-disc list-inside px-5 text-sm md:text-md">
                <li className="cursor-text">
                  Monitored support request queue and ensured clear
                  communication for 600+ clientele
                </li>
                <li className="cursor-text">
                  Quickly resolved 10+ user issues daily with 90% success
                </li>
                <li className="cursor-text">
                  Imaged and issued 100+ laptops and desktops to new and
                  preexisting users
                </li>
                <li className="cursor-text">
                  Restructured and reorganized checkout library, increasing
                  checkout efficiency by 75%
                </li>
              </ol>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
