import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Nov 2021 - Present",
    title: "IT Engineer IV",
    company: "Greenhouse Software",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, diam sit amet aliquam ultricies, diam tortor ultricies massa,",
  },
  {
    year: "May 2021 - Nov 2021",
    title: "Support Engineer",
    company: "Cedar",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, diam sit amet aliquam ultricies, diam tortor ultricies massa,",
  },
  {
    year: "October 2018 - May 2021",
    title: "Lab Technician",
    company: "Pratt Institute",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, diam sit amet aliquam ultricies, diam tortor ultricies massa,",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
