import React from "react";

const WorkItem = ({ year, title, company, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-5">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-base font-normal leading-none text-stone-800">
            {company}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;

// border-l adds a border to the left side of the element
// border-stone-200 is a custom color from tailwind.config.js
// border-white is a custom color from tailwind.config.js
// -left-1.5 moves the element 1.5px to the left
// mt-1.5 moves the element 1.5px down
// ml-4 moves the element 4px to the right
// mb-10 moves the element 10px down
