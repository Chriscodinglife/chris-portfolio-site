import React from "react";

const ProjectItem = ({ img, title, details, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-sky-950">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-0"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-barlow text-white font-bold tracking-wider text-center ">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white font-monts text-center ">{details}</p>
        <a href={link}>
          <p className="text-center p-3 rounded-lg bg-[#1c8bb0] text-white cursor-pointer text-lg mt-4 shadow-md shadow-gray-600 font-monts">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
