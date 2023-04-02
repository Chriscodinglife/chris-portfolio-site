import React from "react";
import ProjectItem from "./ProjectItem";
import howComputerImg from "../assets/howComputer.png";
import jamfAppImg from "../assets/jamfApp.png";
import obsGuiImg from "../assets/obsGui.png";
import streamCreatorImg from "../assets/streamCreator.png";
import windowsLoginImg from "../assets/windowslogin.png";
import eng2frImg from "../assets/eng2fre.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        My most recent and favorite projects I've worked on, spanning from local
        useful scripts, to apps deployed on the web and the App Store.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={howComputerImg}
          title="How To Computer App"
          details="FastAPI + Python"
          link="https://github.com/Chriscodinglife/Interactive-Presentation-Python-App"
        />
        <ProjectItem
          img={jamfAppImg}
          title="Jamf IOS App"
          details="Swift + XCode"
          link="https://github.com/Chriscodinglife/Jamf-It-An-iOS-app"
        />
        <ProjectItem
          img={obsGuiImg}
          title="OBS Lua GUI"
          details="Lua + OBSLua API"
          link="https://github.com/Chriscodinglife/get-started-with-lua"
        />
        <ProjectItem
          img={streamCreatorImg}
          title="Stream Creator App"
          details="React"
          link="https://github.com/Chriscodinglife/lua_script_creator/tree/main/services/frontend-projectcreator"
        />
        <ProjectItem
          img={windowsLoginImg}
          title="Windows Login App"
          details="Python + Tkinter + Selenium"
          link="https://github.com/Chriscodinglife/Local-Login-App-for-Windows-10"
        />
        <ProjectItem
          img={eng2frImg}
          title="English to French App"
          details="Python + Tkinter"
          link="https://github.com/Chriscodinglife/french-to-english-app"
        />
      </div>
    </div>
  );
};

export default Projects;
