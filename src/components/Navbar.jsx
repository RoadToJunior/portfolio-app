import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <navbar className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <section>
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </section>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <section className="hidden">
        <FaBars />
      </section>
      {/* mobile menu */}
      <section></section>
      {/* social icons */}
      <section></section>
    </navbar>
  );
};

export default Navbar;
