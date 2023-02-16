import React from "react";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-dark-blue z-0 mt-[100px] pb-24">
      <h3 className="pb-10 pt-16 text-white text-5xl font-bold text-center">
        Resume
      </h3>
      <div className="flex justify-around items-center px-2">
        <h2 className=" text-white text-xl md:text-2xl  uppercase">
          3d animator / 3d modeler
        </h2>
        <a
          href="https://drive.google.com/uc?export=download&id=1OucLZcRtLJPYQgmSayczsYpfsUTGxQQ-"
          rel="noreferrer"
          target="_blank"
        >
          <button className="box-border bg-white border-2 border-white text-dark-blue  rounded-3xl uppercase px-2 py-2 sm:px-4 md:px-8 md:py-3  hover:bg-dark-blue hover:text-white">
            Download Resume
          </button>
        </a>
      </div>

      <div className="w-11/12 md:w-9/12 mx-auto mt-16">
        <div className="py-2 px-4 bg-white rounded shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold uppercase my-6">
            Experience
          </h3>
          <div className="grid grid-rows-6">
            <div className="row">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h3 className="text-lg md:text-xl font-bold">
                    2022 - Present
                  </h3>
                  <a
                    href="https://www.apparatgaming.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Apparat Gaming
                    </h4>
                  </a>
                </div>
                <div className="col-span-5">
                  <h3 className="text-lg md:text-xl font-bold">
                    3D Animator / Modeller
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold">2017 - 2022</h3>
                  <a
                    href="https://rubyplay.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      RubyPlay
                    </h4>
                  </a>
                </div>
                <div className="col-span-5">
                  <h3 className="text-lg md:text-xl font-bold">
                    Lead Animator
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold">2015 - 2017</h3>
                  <a
                    href="https://www.skywindgroup.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Skywind Group
                    </h4>
                  </a>
                </div>
                <div className="col-span-5">
                  <h3 className="text-lg md:text-xl font-bold">2D Animator</h3>
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
                  <h3 className="text-lg md:text-xl font-bold">2014 - 2015</h3>
                  <a
                    href="https://solarmedia.biz/?fbclid=IwAR0bXsk68A_TZBF01JII-EhO-qRwK1AG_k3Ys3k6bMjXvrWRaUK332EVSAE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Solar Media
                    </h4>
                  </a>
                </div>
                <div className="col-span-5">
                  <h3 className="text-lg md:text-xl font-bold">
                    Motion Designer
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold">2013 - 2014</h3>
                  <a
                    href="https://www.linkedin.com/company/apparatgaming/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      ERS Games
                    </h4>
                  </a>
                </div>
                <div className="col-span-5">
                  <h3 className="text-lg md:text-xl font-bold">2D Animator</h3>
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
          <Skills />
        </div>

        <div className="my-10 py-2 px-4 bg-white rounded shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold uppercase my-6">
            Education
          </h3>
          <div className="grid grid-rows-4">
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h3 className="text-lg md:text-xl font-bold">2018</h3>
                </div>
                <div className="col-span-5">
                  <a
                    href="https://ianimate.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      iAnimate Animation School
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h3 className="text-lg md:text-xl font-bold">2018</h3>
                </div>
                <div className="col-span-5">
                  <a
                    href="https://www.animsquad.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      Animsquad Animation School
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="grid grid-cols-8">
                <div className="col-span-3">
                  <h3 className="text-lg md:text-xl font-bold">2005 - 2011</h3>
                </div>
                <div className="col-span-5">
                  <a
                    href="https://nau.edu.ua/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-md md:text-lg font-bold uppercase text-dark-blue hover:text-light-blue">
                      National Aviation University,{" "}
                      <span className="capitalize">
                        Network Information Security, MSc
                      </span>
                    </h4>
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
