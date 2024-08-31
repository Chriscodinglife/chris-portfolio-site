import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiFillFire,
  AiFillExperiment,
  AiFillMail,
} from "react-icons/ai";

export const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const iconSize = 20
  const MyIcons = Object.freeze({
    homeIcon: <AiFillHome size={iconSize} />,
    workIcon: <AiFillFire size={iconSize} />,
    projectIcon: <AiFillExperiment size={iconSize} />,
    mailIcon: <AiFillMail size={iconSize} />
  })


  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          {/* This is for a mobile device */}
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            {MyIcons.homeIcon}
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            {MyIcons.workIcon}
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            {MyIcons.projectIcon}
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            {MyIcons.mailIcon}
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      {/* This section is for a typical screen */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pounter hover:scale-110 ease-in duration-300"
          >
            {MyIcons.homeIcon}
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pounter hover:scale-110 ease-in duration-300"
          >
            {MyIcons.workIcon}
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pounter hover:scale-110 ease-in duration-300"
          >
            {MyIcons.projectIcon}
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pounter hover:scale-110 ease-in duration-300"
          >
            {MyIcons.mailIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

// md:hidden is for the mobile view, after a certain pixel width, the nav bar will be hidden
// z-[99] is for the z-index, this is to make sure the nav bar is on top of everything else
// absolute top-4 right-4 is for the position of the nav bar, it will be 4 pixels from the top and 4 pixels from the right
