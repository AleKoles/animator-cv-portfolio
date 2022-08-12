import React from "react";
import Photo from "../images/dima.jpg";
import Discord from "../images/discord-brands.svg";
import Telegram from "../images/telegram-brands.svg";
import Mail from "../images/envelope-solid.svg";
import Art from "../images/artstation-brands.svg";
import Linkedin from "../images/linkedin-brands.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-8">
        <div className="col-span-3 bg-dark-blue md:h-screen h-[1020px]">
          <div className="absolute top-[160px] left-[15px] xl:left-[280px] lg:left-[160px] w-11/12 md:w-[360px] h-[800px]  md:h-[500px] flex flex-col shadow-lg">
            <div className="md:h-[450px] h-[750px] rounded bg-light-blue text-white text-center">
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
              <div className="block md:hidden">
                <div className="my-5 flex justify-center">
                  <button className="mx-3 box-border bg-dark-blue text-white rounded-3xl uppercase px-8 py-3 hover:bg-white hover:text-dark-blue  hover:border-dark-blue">
                    Resume
                  </button>
                  <button className="mx-3 box-border bg-dark-blue text-white rounded-3xl uppercase px-8 py-3 hover:bg-white hover:text-dark-blue  hover:border-dark-blue">
                    projects
                  </button>
                </div>

                <p className="text-lg leading-7 mx-5">
                  I am an experienced <strong>CG animator</strong> particularly
                  interested in <strong>3D animation</strong>,{" "}
                  <strong>rigging</strong>, <strong>skinning</strong>, and{" "}
                  <strong>modelling</strong>. With over 3 years' experience of
                  managing art teams, I can build animation pipeline from
                  scratch and define the most efficient workflow for any
                  project.
                </p>
              </div>
            </div>
            <div className="h-[50px] bg-white flex justify-around items-center ">
              <a
                href="https://www.linkedin.com/in/dmitri-petrov/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100"
                />
              </a>
              <a
                href="mailto:gear.shiftin42@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Mail}
                  alt="Gmail"
                  className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.artstation.com/landmine"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Art}
                  alt="Artstation"
                  className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100"
                />
              </a>
              <a href="https://t.me/dzimge" target="_blank" rel="noreferrer">
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100"
                />
              </a>
              <a
                href="https://discordapp.com/users/Dmitri#4430"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Discord}
                  alt="Discord"
                  className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-5 absolute top-[160px] left-[400px] xl:left-[700px] lg:left-[550px] hidden md:block h-[500px] lg:w-[400px] w-[300px]">
          <h1 className="md:text-5xl font-bold text-3xl">Hello</h1>
          <h2 className="text-2xl font-extralight mt-10">
            I'm Dmitri, an experienced CG animator
          </h2>
          <div className="my-10 flex justify-around">
            <button className="box-border bg-transparent text-dark-blue border-2 border-dark-blue rounded-3xl uppercase px-8 py-3 hover:bg-dark-blue hover:text-white">
              Resume
            </button>
            <button className="box-border bg-dark-blue text-white rounded-3xl uppercase px-8 py-3 hover:bg-white hover:text-dark-blue hover:border-2 hover:border-dark-blue">
              projects
            </button>
          </div>

          <p className="lg:leading-8 lg:text-xl text-lg leading-7">
            I am particularly interested in <strong>3D animation</strong>,{" "}
            <strong>rigging</strong>, <strong>skinning</strong>, and{" "}
            <strong>modelling</strong>. With over 3 years' experience of
            managing art teams, I can build animation pipeline from scratch and
            define the most efficient workflow for any project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
