import React from "react";
import videojs from "video.js";

const Projects = () => {
  // const videoPlayer = {
  //   controls: true;
  //   sources:[{
  // src:
  // type: "video/mp4"
  //   }]
  // }

  return (
    <div className="w-full h-screen bg-dark-blue">
      <div className="absolute w-full h-full top-[120px] ">
        <div className="flex justify-center px-2">
          <h1 className="my-10 py-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            My Projects
          </h1>
        </div>

        <div className="flex flex-col justify-center px-2 sm:flex-row sm:justify-around">
          <a
            href="https://youtu.be/XFNTTKEm4nc"
            rel="noreferrer"
            target="_blank"
            className="mb-4 "
          >
            <button className="box-border bg-white border-2 border-white text-dark-blue  rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
              Watch my showreel
            </button>
          </a>
          <a
            href="https://youtu.be/UnMDhESaK7k"
            rel="noreferrer"
            target="_blank"
          >
            <button className="box-border bg-white border-2 border-white text-dark-blue  rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
              slot animation samples
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
