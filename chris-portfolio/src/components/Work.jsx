import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Feb 2024 - Present",
    title: "Software Engineer - Enterpise Apps",
    company: "Greenhouse Software",
    details: 
      "🎉 Spearhead app development for automating employee celebrations\n\
      💻 Utilize JavaScript and Ruby on Rails for internal automations\n\
      🛠️ Serve as a resource for Corporate IT escalations\n\
      📈 Boosted IT team productivity by 10% through comprehensive documentation"
  },
  {
    year: "Nov 2021 - Present",
    title: "IT Engineer IV",
    company: "Greenhouse Software",
    details:
      "🚀 Developed innovative IT automations using AWS infrastructure\n\
      🔒 Administered Okta with advanced workflows and APIs\n\
      🐍 Wrote Python scripts to streamline IT tasks\n\
      💡 Provided programming expertise and support to colleagues",
  },
  {
    year: "May 2021 - Nov 2021",
    title: "Support Engineer",
    company: "Cedar",
    details:
      "🛠️ Provided technical assistance and resolved issues for users\n\
      🖥️ Introduced bash scripting for IT task automation\n\
      ✅ Managed machines with Jamf for compliance and security",
  },
  {
    year: "October 2018 - May 2021",
    title: "Lab Technician",
    company: "Pratt Institute",
    details:
      "🔐 Ensured security and updates of lab devices\n\
      ⚙️ Wrote bash scripts to automate tasks and improve efficiency",
  },
];

const Work = () => {
  return (
    <div className="bg-gray-200">
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 md:px-16 px-2 py-16 font-barlow font-bold">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-16">Work</h1>
        <div className="flex flex-col m-auto md:p-2">
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
      </div>
    </div>
  );
};

export default Work;
