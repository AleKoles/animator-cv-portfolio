import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-fit bg-dark-blue">
      <div className="w-full h-full mt-[100px] z-0 bg-dark-blue pb-24">
        <div className="flex justify-center px-2">
          <h2 className="pb-10 pt-16 text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            My Projects
          </h2>
        </div>

        <div className="flex flex-col justify-center px-2 sm:flex-row sm:justify-around ">
          <a
            href="https://youtu.be/XFNTTKEm4nc"
            rel="noreferrer"
            target="_blank"
            className="mb-4 mx-auto"
          >
            <button className="box-border bg-white border-2 border-white text-dark-blue rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
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
          className="video  my-8  sm:my-5 mx-auto rounded w-full aspect-video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/lK79KzcCGyY?autoplay=0`}
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
