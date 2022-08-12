import React from "react";
import Discord from "../images/discord-brands.svg";
import Telegram from "../images/telegram-brands.svg";
import Mail from "../images/envelope-solid.svg";
import Art from "../images/artstation-brands.svg";
import Linkedin from "../images/linkedin-brands.svg";

const Contacts = () => {
  return (
    <div className="w-full h-screen bg-dark-blue">
      <div className="absolute w-full top-[160px] text-white px-2 md:px-10">
        <h1 className="my-10 py-10 text-5xl text-center font-bold">
          Contact me
        </h1>

        <div className="h-[120px] w-full bg-white flex flex-wrap rounded-md justify-around items-center drop-shadow">
          <a
            href="https://www.linkedin.com/in/dmitri-petrov/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              className="w-[40px] opacity-60 hover:scale-110 hover:opacity-100 mx-2"
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
              className="w-[40px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
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
              className="w-[40px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
            />
          </a>
          <a href="https://t.me/dzimge" target="_blank" rel="noreferrer">
            <img
              src={Telegram}
              alt="Telegram"
              className="w-[40px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
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
              className="w-[40px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
