import React from "react";
import { Experience } from "./experience";

const expData = [
  {
    title: "Freelancing Experience",
    content: (
      <p>
        <span className="text-purple-500 text-xl">Freelance Developer:</span> Worked on
        various projects as a freelancer, delivering full-stack solutions for
        clients. <br />
        <span className="text-slate-400 text-sm">January 2024 – Present</span>
      </p>
    ),
  },
  {
    title: "Application Development Intern",
    content: (
      <p>
        <span className="text-purple-500 text-xl">
          Application Development Intern at Xyloinc:
        </span>{" "}
        Developed and maintained applications, focusing on improving user
        experience and functionality. <br />
        <span className="text-slate-400 text-sm">
          June 2024 – December 2024
        </span>
      </p>
    ),
  },
  {
    title: "FullStack Developer Intern",
    content: (
      <p>
        <span className="text-purple-500 text-xl">
          FullStack Developer Intern at Synecx AI Labs:
        </span>{" "}
        Contributed to building scalable web applications with a focus on both
        front-end and back-end development. <br />
        <span className="text-slate-400 text-sm">December 2024 – Present</span>
      </p>
    ),
  },
];

const   ExpHome = () => {
  return (
    <div >
      <Experience data={expData} />
    </div>
  );
};

export default ExpHome;
