import React from "react";

const Resume = () => {
  return (
    <div className="w-full h-screen bg-dark-blue absolute top-[100px]">
      <h1 className="my-10 py-10 text-white text-4xl font-bold text-center">
        Resume
      </h1>
      <div className="flex justify-around items-center">
        <h2 className=" text-white text-xl md:text-2xl  uppercase">
          3d animator / 3d modeler
        </h2>
        <button className="box-border bg-white border-2 border-white text-dark-blue  rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
          Download Resume
        </button>
      </div>

      <div className="bg-white absolute rounded shadow-lg top-[320px] w-11/12 md:w-9/12 left-[16px] sm:left-[40px] md:left-[100px] lg:left-[200px]">
        <div className="py-2 px-4">
          <div className="grid grid-rows-14">
            <div className="row">
              <div className="col-span-8  mb-5">
                <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">
                    2022 - Present
                  </h2>
                  <a
                    href="https://www.linkedin.com/company/apparatgaming/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue">
                      Apparat Gaming
                    </h3>
                  </a>
                </div>
                <div className="col-span-5">
                  <h2 className="text-lg md:text-xl font-bold">
                    3D Animator / Modeller
                  </h2>
                  <p>
                    Creating slot animations, visual effects, character
                    animations; <br /> Modelling, rigging and skinning
                    characters;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
