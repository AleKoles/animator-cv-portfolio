import React from "react";
import Blender from "../images/icon_blender.png";
import Maya from "../images/icon_maya.png";
import AE from "../images/icon_ae.png";
import PS from "../images/icon_ps.png";
import Marmoset from "../images/icon_marmoset.png";
import Substance from "../images/icon_substance.png";
import ZBrush from "../images/icon_zbrush.png";

const Resume = () => {
  return (
    <div className="w-full h-[2600px] sm:h-[3000px] md:h-[1800px]  bg-dark-blue absolute top-[100px]">
      <h1 className="my-10 py-10 text-white text-5xl font-bold text-center">
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

      <div className=" absolute  top-[320px] w-11/12 md:w-9/12 left-[16px] sm:left-[40px] md:left-[100px] lg:left-[200px]">
        <div className="py-2 px-4 bg-white rounded shadow-lg">
          <div className="grid grid-rows-6">
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
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Apparat Gaming
                    </h3>
                  </a>
                </div>
                <div className="col-span-5">
                  <h2 className="text-lg md:text-xl font-bold">
                    3D Animator / Modeller
                  </h2>
                  <p>
                    Modelling, rigging and skinning characters; <br /> Creating
                    slot animations, visual effects, and character animations.
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-span-2 mt-4">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2017 - 2022</h2>
                  <a
                    href="https://rubyplay.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      RubyPlay
                    </h3>
                  </a>
                </div>
                <div className="col-span-5">
                  <h2 className="text-lg md:text-xl font-bold">
                    Lead Animator
                  </h2>
                  <p>
                    Creating slot animations, visual effects, and character
                    animations;
                    <br />
                    Defining animation pipelines and workflows;
                    <br /> Managing the animation team;
                    <br /> Providing mentorship and feedback for junior
                    team-members.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2015 - 2017</h2>
                  <a
                    href="https://www.skywindgroup.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Skywind Group
                    </h3>
                  </a>
                </div>
                <div className="col-span-5">
                  <h2 className="text-lg md:text-xl font-bold">
                    2D / 3D Animator
                  </h2>
                  <p>
                    Creating slot animations, visual effects, character
                    animations
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2014 - 2015</h2>
                  <a
                    href="https://solarmedia.biz/?fbclid=IwAR0bXsk68A_TZBF01JII-EhO-qRwK1AG_k3Ys3k6bMjXvrWRaUK332EVSAE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Solar Media
                    </h3>
                  </a>
                </div>
                <div className="col-span-5">
                  <h2 className="text-lg md:text-xl font-bold">
                    Motion Designer
                  </h2>
                  <p>
                    Creating TV idents, bumpers; <br />
                    Program adaptation.
                  </p>
                </div>
              </div>
            </div>
            <div className="row md:mt-5 mb-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2011 - 2014</h2>
                  <a
                    href="https://www.linkedin.com/company/apparatgaming/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      ERS Games
                    </h3>
                  </a>
                </div>
                <div className="col-span-5">
                  <h2 className="text-lg md:text-xl font-bold">2D Animator</h2>
                  <p>
                    Creating slot animations, visual effects, and character
                    animations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 py-2 px-4 bg-white rounded shadow-lg">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-10">Skills</h2>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-5">Software</h3>
            <div className="flex justify-around items-center flex-wrap">
              <div className="px-2 py-2 flex items-center border-1 bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img src={Blender} alt="Blender" className="w-[20px] mr-2" />
                <p className="text-center font-semibold tracking-wide text-md">
                  Blender
                </p>
              </div>
              <div className="px-2 py-2 flex items-center border-1 bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img src={Maya} alt="Maya" className="w-[20px] mr-2" />
                <p className="text-center font-semibold tracking-wide text-md">
                  Maya
                </p>
              </div>
              <div className="px-2 py-2 flex items-center  bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img src={Marmoset} alt="Marmoset" className="w-[20px] mr-2" />
                <p className="text-center font-semibold tracking-wide text-md">
                  Marmoset
                </p>
              </div>
              <div className="px-2 py-2 flex items-center bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img src={ZBrush} alt="ZBrush" className="w-[20px] mr-2" />
                <p className="text-center font-semibold tracking-wide text-md">
                  ZBrush
                </p>
              </div>
              <div className="px-2 py-2 flex items-center  bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img src={PS} alt="Photoshop" className="w-[20px] mr-2" />
                <p className="text-center font-semibold tracking-wide text-md">
                  Photoshop
                </p>
              </div>
              <div className="px-2 py-2 flex items-center  bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img src={AE} alt="AfterEffects" className="w-[20px] mr-2" />
                <p className="text-center font-semibold tracking-wide text-md">
                  AfterEffects
                </p>
              </div>
              <div className="px-2 py-2 flex items-center bg-light-blue drop-shadow rounded-lg  my-2 mx-1">
                <img
                  src={Substance}
                  alt="Substance"
                  className="w-[20px] mr-2"
                />
                <p className="text-center font-semibold tracking-wide text-md">
                  Substance
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold my-5">Languages</h3>
            <div className="flex justify-around flex-wrap">
              <div className="px-2 py-1 bg-light-blue drop-shadow rounded-lg my-2 mx-2">
                <h5 className="font-semibold">Ukrainian - Native</h5>
              </div>
              <div className="px-2 py-1 bg-light-blue drop-shadow rounded-lg  my-2 mx-2">
                <h5 className="font-semibold">Russian - Native</h5>
              </div>
              <div className="px-2 py-1 bg-light-blue drop-shadow rounded-lg  my-2 mx-2">
                <h5 className="font-semibold">English - Advanced</h5>
              </div>
              <div className="px-2 py-1 bg-light-blue drop-shadow rounded-lg  my-2 mx-2">
                <h5 className="font-semibold">Italian - Elementary</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 py-2 px-4 bg-white rounded shadow-lg">
          <div className="grid grid-rows-4">
            <div className="row">
              <div className="col-span-8  mb-5">
                <h2 className="text-xl md:text-2xl font-bold">Education</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2018</h2>
                </div>
                <div className="col-span-5">
                  <a
                    href="https://ianimate.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      iAnimate Animation School
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2018</h2>
                </div>
                <div className="col-span-5">
                  <a
                    href="https://www.animsquad.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Animsquad Animation School
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h2 className="text-lg md:text-xl font-bold">2005 - 2011</h2>
                </div>
                <div className="col-span-5">
                  <a
                    href="https://nau.edu.ua/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      National Aviation University,{" "}
                      <span className="capitalize">
                        Network Information Security, MSc
                      </span>
                    </h3>
                  </a>
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
