import React from "react";
import Tailwind from "../assets/tailwind.png";
import HTML from "../assets/html.png";
import Sass from "../assets/sass-1-logo-png-transparent.png";
import Github from "../assets/github.png";
import ReactLogo from "../assets/react.png";
import Javascript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div>
        <p>Skills</p>
        <p>// These are the technologies I've worked with</p>
      </div>
      <div>
        <div>
          <img className="w-20" src={HTML} alt="HTML logo" />
          <p>HTML</p>
        </div>
        <div>
          <img className="w-20" src={Tailwind} alt="HTML logo" />
          <p>Tailwind</p>
        </div>
        <div>
          <img className="w-20" src={Sass} alt="HTML logo" />
          <p>Sass</p>
        </div>
        <div>
          <img className="w-20" src={Github} alt="HTML logo" />
          <p>Github</p>
        </div>
        <div>
          <img className="w-20" src={ReactLogo} alt="HTML logo" />
          <p>React</p>
        </div>
        <div>
          <img className="w-20" src={Javascript} alt="HTML logo" />
          <p>Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
