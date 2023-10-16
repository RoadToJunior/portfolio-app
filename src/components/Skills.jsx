import React from "react";
import { skillsList } from "../data/data";

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            skills( );
          </p>
          <p className="py-4">
            &#47;&#47;These are the technologies I&apos;ve worked with
          </p>
        </div>

        {/* container for all icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=eng"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-20 mx-auto" src={HTML} alt="HTML logo" />
              <p className="my-4">HTML</p>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl">
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                className="w-20 mx-auto"
                src={Tailwind}
                alt="Tailwind logo"
              />
              <p className="my-4">Tailwind</p>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#040c16]  hover:scale-110 duration-500 rounded-3xl">
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <img className="w-20 py-2 mx-auto" src={Sass} alt="Sass logo" />
              <p className="my-4">Sass</p>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl">
            <a
              href="https://github.com/RoadToJunior"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-20 mx-auto" src={Github} alt="GitHub logo" />
              <p className="my-4">GitHub</p>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl">
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img
                className="w-20 mx-auto"
                src={ReactLogo}
                alt="React.js logo"
              />
              <p className="my-4">React</p>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=pl"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-20 mx-auto"
                src={Javascript}
                alt="Javascript logo"
              />
              <p className="my-4">Javascript</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
