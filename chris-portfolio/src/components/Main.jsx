import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaBlogger } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Chris Orellana
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm
            <TypeAnimation
              sequence={[
                "a Programmer", // Types 'One'
                2000, // Waits 1s
                "a Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "a Coder",
                2000,
                "an IT Administrator",
                2000,
                "a Backend Developer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <a href="https://www.linkedin.com/in/chrisdotorellana/">
              <FaLinkedin className="cursor-pointer" size={30} />
            </a>
            <a href="https://github.com/Chriscodinglife">
              <FaGithub className="cursor-pointer" size={30} />
            </a>
            <a href="https://blog.chriscoding.app">
              <FaBlogger className="cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// Object-cover is used to make the image cover the entire screen
// Object-left is used to make the image start from the left side of the screen
// Scale-x-[-1] is used to flip the image horizontally
// W-full is used to make the image take up the entire width of the screen
// H-screen is used to make the image take up the entire height of the screen
// You can move the image to the right a few pixels by using the following:
// <img
//     className='w-full h-screen object-cover object-left scale-x-[-1] -ml-4'
//     src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""
// />
// -ml-4 is used to move the image to the right 4 pixels
// You can move the image to the left a few pixels by using the following:
// <img
//     className='w-full h-screen object-cover object-left scale-x-[-1] -ml-4'
