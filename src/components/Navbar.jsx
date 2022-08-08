import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div>
      <h1 className="text-2xl">
        <strong>Dmitri Petrov</strong>
        <span className="text-xl uppercase font-thin"> / 3D Animator</span>
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default Navbar;
