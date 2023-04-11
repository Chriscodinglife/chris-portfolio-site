import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Nov 2021 - Present",
    title: "IT Engineer IV",
    company: "Greenhouse Software",
    details:
      "- Developing innovative automations for IT tasks using Docker and other tools\n\
      - Administering Okta with Okta Workflows and Okta's built-in API for enhanced security and streamlined IT workflows\n\
      - Writing Python scripts to streamline and optimize the daily tasks of the IT team\n\
      - Providing expertise and support to my colleagues on programming-related questions",
  },
  {
    year: "May 2021 - Nov 2021",
    title: "Support Engineer",
    company: "Cedar",
    details:
      "- Provided technical assistance to users in-person and remote settings and resolved technical issues\n\
      - Triaged, troubleshooted and escalated issues to the appropriate team\n\
      - Introduced bash scripting to IT Team to assist in the automation of daily tasks\n\
      - Managed machines with Jamf to ensure compliance and security",
  },
  {
    year: "October 2018 - May 2021",
    title: "Lab Technician",
    company: "Pratt Institute",
    details:
      "- Managed and maintained lab rooms of Mac OS devices\n\
      - Updated and ensured the security of devices\n\
      - Wrote bash scripts to automate repetitive tasks and improve efficiency\n\
      - Used JAMF MDM to manage the devices across the school campus",
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
