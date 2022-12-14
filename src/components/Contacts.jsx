import React from "react";
import Discord from "../images/discord-brands.svg";
import Telegram from "../images/telegram-brands.svg";
import Mail from "../images/envelope-solid.svg";
import Art from "../images/artstation-brands.svg";
import Linkedin from "../images/linkedin-brands.svg";

const Contacts = () => {
  return (
    <div className="w-full min-h-screen h-fit pb-24 bg-dark-blue">
      <div className="w-full mt-[100px] z-0 text-white px-2 md:px-10">
        <h2 className="pb-10 pt-16 text-5xl text-center font-bold">
          Contact me
        </h2>
        <form
          action="https://getform.io/f/2627977c-c5b5-47e1-bb27-dd54507ca3e2"
          method="POST"
          className="w-8/12 mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between text-black">
            <input
              className="sm:my-4 p-2 rounded-md w-full sm:w-5/12"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 rounded-md w-full sm:w-5/12"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>

          <textarea
            className="mx-auto p-2 w-full rounded-md text-black"
            name="message"
            rows="10"
            placeholder="Message me"
          ></textarea>

          <div className="flex justify-center">
            <button className="mx-3 my-2 box-border bg-dark-blue text-white rounded-3xl uppercase px-8 py-3 hover:bg-white hover:text-dark-blue">
              Let's collaborate
            </button>
          </div>
        </form>
        <div className="mx-auto h-[50px] my-2 w-8/12 bg-white flex flex-wrap rounded-md justify-around items-center drop-shadow">
          <a
            href="https://www.linkedin.com/in/dmitri-petrov/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100 mx-2"
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
              className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
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
              className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
            />
          </a>
          <a href="https://t.me/dzimge" target="_blank" rel="noreferrer">
            <img
              src={Telegram}
              alt="Telegram"
              className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
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
              className="w-[20px] opacity-60 hover:scale-110 hover:opacity-100  mx-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
