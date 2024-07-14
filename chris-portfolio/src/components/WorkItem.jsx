import React from "react";

const WorkItem = ({ year, title, company, details }) => {
  return (
    <ol className="flex flex-col md:flex-row w-10/12 m-auto relative border-l border-stone-700" >{/*Left Line*/}
      <li className="mb-10 ml-16">
        <div className="absolute w-3 h-3 bg-stone-700 rounded-full mt-1.5 -left-1.5 border-white" /> {/*Left Bullet Dot*/}
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-monts text-white bg-[#2c2c2c] rounded-md">{year}</span>
          <span className="text-lg font-monts text-gray-800">{title}</span>
        </p>
        <p className="flex flex-wrap m-3"><span className="my-1 text-base font-monts text-stone-600">Company: {company}</span></p> 
        <p className="my-10 text-base font-monts text-stone-600 whitespace-pre-line">{details}</p>
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
