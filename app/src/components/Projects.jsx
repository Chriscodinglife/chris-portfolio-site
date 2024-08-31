import React from "react";
import ProjectItem from "./ProjectItem";
import howComputerImg from "../assets/howComputer.png";
import jamfAppImg from "../assets/jamfApp.png";
import obsGuiImg from "../assets/obsGui.png";
import streamCreatorImg from "../assets/streamCreator.png";
import windowsLoginImg from "../assets/windowslogin.png";
import eng2frImg from "../assets/eng2fre.png";
import caneye from "../assets/caneye.png";
import discordBirthday from "../assets/discordbirthday.png";

const projectsMessage = "I've worked on a variety of projects, from developing efficient " +
                        "automations to launching apps on the web and the App Store. " +
                        "🚀 These have been some of my most rewarding experiences."

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-20">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Projects
      </h1>
      <p className="flex flex-row justify-center text-center md:px-40 px-2 py-16">
      {projectsMessage}
      </p>
      <div className="grid sm:grid-cols-2 gap-16 pb-20">
        <ProjectItem
          img={discordBirthday}
          title="Happy Birthday Discord Bot"
          details="Node.js"
          link="https://discord.com/oauth2/authorize?client_id=1184275134446579743"
        />
        <ProjectItem
          img={caneye}
          title="Can Eye iPhone App"
          details="Swift"
          link="https://apps.apple.com/us/app/can-eye/id6471035637?platform=iphone"
        />
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
