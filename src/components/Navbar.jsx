import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);

  return (
    <navbar className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <section>
        <p>M.L - RoadToJunior</p>
      </section>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>About</li>
        <li>
          <a href="https://github.com/RoadToJunior">GitHub</a>
        </li>
        <li>Contact</li>
      </ul>
      {/* hamburger */}
      <section onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </section>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">
          <a href="https://github.com/RoadToJunior">GitHub</a>
        </li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* social icons */}
      <section className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li>
            <a href="/">
              Linkedin <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="/">
              Instagram <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              Github <FaGithub />
            </a>
          </li>
        </ul>
      </section>
    </navbar>
  );
};

export default Navbar;
