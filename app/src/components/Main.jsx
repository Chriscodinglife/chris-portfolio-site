import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaBlogger } from "react-icons/fa";

const Main = () => {

  const owner = import.meta.env.VITE_OWNER
  const linkedin = import.meta.env.VITE_LINKEDIN;
  const github = import.meta.env.VITE_GITHUB;
  const blog = import.meta.env.VITE_BLOG;
  const aws = import.meta.env.VITE_AWS;

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={`https://${aws}.s3.amazonaws.com/wallpaper.png`}
        alt="wallpaper"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:center items-center pb-40">
          <div className="bg-white/90 shadow-lg shadow-slate-800 flex flex-col w-3/4 items-center rounded-xl p-10">
            <img src="/chris_circle_logo.png" className="object-scale-down h-40 w-40 m-5" alt="main_logo"/>
            <h1 className="sm:text-5xl text-4xl font-barlow font-bold text-gray-800">
              Hi, I'm {owner} 👋
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 font-barlow font-medium text-gray-800">
              I'm
              <TypeAnimation
                sequence={[
                  "a Programmer 👨‍💻", // Types 'One'
                  2000, // Waits 1s
                  "a Software Engineer 🤖", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "a Computer Nerd 👾",
                  2000,
                  "an IT Administrator 🛠️",
                  2000,
                  "a Backend Developer ⚙️",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
              />
            </h2>
            <div className="flex justify-between gap-3 pt-6 max-w-[100px] w-full">
              <a href={linkedin}>
                <FaLinkedin className="cursor-pointer" size={30} />
              </a>
              <a href={github}>
                <FaGithub className="cursor-pointer" size={30} />
              </a>
              <a href={blog}>
                <FaBlogger className="cursor-pointer" size={30} />
              </a>
            </div>
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
