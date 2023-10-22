import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              aboutMe( );
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I&apos;m Marcin, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Over the past several years, I've dedicated myself to coding,
              investing countless hours into my craft. My GitHub profile is a
              testimony to this dedication and the continuous progress I've
              achieved. With daily coding practice, I've sharpened my skills and
              expanded my knowledge in a wide range of programming languages and
              frameworks. Join me on this journey of perpetual growth, and let's
              collaborate to build remarkable digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
