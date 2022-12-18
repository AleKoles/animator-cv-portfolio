import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="w-screen h-[100px] shadow-lg z-20 top-0 bg-white fixed">
      <div className="flex justify-between px-6 items-center w-full h-full">
        <div className="flex items-center text-xl font-bold mr-4 sm:text-2xl tracking-wide">
          <a href="/">
            <h1>
              <strong>Dmitri Petrov</strong>
              <span className="uppercase font-normal"> / CG Animator</span>
            </h1>
          </a>
        </div>

        <ul className="hidden md:flex ">
          <li>
            <Link to="/">About me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute w-full px-8 bg-white bg-opacity-90"
        }
      >
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
