import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-screen bg-dark-blue">
      <div className="absolute w-full h-full top-[120px]  bg-dark-blue">
        <div className="flex justify-center px-2">
          <h1 className="my-10 py-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            My Projects
          </h1>
        </div>

        <div className="flex flex-col justify-center px-2 sm:flex-row sm:justify-around ">
          <a
            href="https://youtu.be/XFNTTKEm4nc"
            rel="noreferrer"
            target="_blank"
            className="mb-4 mx-auto"
          >
            <button className="box-border bg-white border-2 border-white text-dark-blue  rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
              Watch my showreel
            </button>
          </a>
          <a
            href="https://youtu.be/UnMDhESaK7k"
            rel="noreferrer"
            target="_blank"
            className="mx-auto"
          >
            <button className="box-border bg-white border-2 border-white text-dark-blue  rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
              slot animation samples
            </button>
          </a>
        </div>
        <iframe
          className="video  my-8  sm:my-5 mx-auto rounded sm:w-[560px] sm:h-[315px]"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/lK79KzcCGyY?autoplay=0`}
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
