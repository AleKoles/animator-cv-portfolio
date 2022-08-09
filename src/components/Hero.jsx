import React from "react";
import Photo from "../images/dima.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-8">
        <div className="col-span-3 bg-dark-blue h-screen static">
          <div className="absolute top-[150px] left-[15px] lg:left-[250px] md:left-[150px]  sm:left-[50px]  w-11/12 sm:w-[375px]  h-[500px] flex flex-col shadow-lg">
            <div className="h-[450px] bg-light-blue">
              <h1>Hello</h1>
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
