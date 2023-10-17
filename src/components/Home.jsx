import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ReactTypingEffect from "react-typing-effect";
// eslint-disable-next-line import/no-extraneous-dependencies
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <ScrollToTop
        smooth
        top={500}
        component={<BsArrowUp />}
        style={{
          background: "rgba(255,255,255,0)",
          boxShadow: "none",
        }}
        className="text-4xl p-0.5 text-[#ccd6f6]"
      />
      <section className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">
          <ReactTypingEffect
            text={[
              "Cześć!",
              "Hi!",
              "Bonjour!",
              "Ahoy!",
              "Hola!",
              "Guten Tag!",
              "Konnichiwa!",
            ]}
            eraseSpeed={50}
            speed={120}
            className="text-pink-600"
          />
          My name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Marcin Lichota
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I&apos;m a<span className="text-pink-600"> Frontend Developer.</span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Currently, I&apos;m focused on builidng resposive web applications.
        </p>
        <div>
          <Link to="projects" smooth duration={500}>
            <button
              type="button"
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
