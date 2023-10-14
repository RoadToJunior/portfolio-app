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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              quae nobis quos nostrum repellat quibusdam reiciendis ducimus,
              natus placeat totam nihil dolore, praesentium illum repudiandae
              recusandae dicta fugit perferendis ipsa omnis laboriosam enim eum
              molestias?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
