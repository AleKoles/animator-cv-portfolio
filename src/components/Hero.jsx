import React from "react";
import Photo from "../images/dima.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-8">
        <div className="col-span-3 bg-dark-blue h-screen static">
          <div className="absolute top-[160px] left-[15px] lg:left-[280px] md:left-[160px]  sm:left-[60px]  w-11/12 sm:w-[360px]  h-[500px] flex flex-col shadow-lg">
            <div className="h-[450px] bg-light-blue text-white text-center">
              <div className="border-4 border-white rounded-full overflow-hidden w-[235px] h-[235px] mt-10 mx-auto">
                <img src={Photo} alt="portrait" />
              </div>
              <h1 className="text-3xl font-bold tracking-wide mt-8">
                Dmitri Petrov
              </h1>
              <hr className="mt-4 mx-auto bg-white h-[2px] w-[80px]" />
              <h2 className="mt-4 text-2xl uppercase">
                3D animator / 3D Modeller
              </h2>
            </div>
            <div className="h-[50px] bg-white">
              <p>lol</p>
            </div>
          </div>
        </div>
        <div className="col-span-5"></div>
      </div>
    </div>
  );
};

export default Hero;
