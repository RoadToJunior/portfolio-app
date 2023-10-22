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
          {skillsList.map((item) => (
            <div className="shadow-2xl shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl">
              <a href={item.href} target="_blank" rel="noreferrer">
                <img
                  className="w-20 h-20 mx-auto"
                  src={item.src}
                  alt={item.alt}
                />
                <p className="my-4">{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
