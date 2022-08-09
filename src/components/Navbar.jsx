import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px]  z-10 bg-white fixed">
      <div className="flex justify-between px-6 items-center w-full h-full">
        <div className="flex items-center text-xl font-bold mr-4 sm:text-2xl tracking-wide">
          <h1 className="">
            <strong>Dmitri Petrov</strong>
            <span className="uppercase font-normal"> / 3D Animator</span>
          </h1>
        </div>
        <ul className="hidden md:flex ">
          <li>About me</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute w-full px-8"}>
        <li>About me</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
