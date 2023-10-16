import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);

  const navList = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Projects", to: "projects" },
    { text: "Contact", to: "contact" },
    { text: "GitHub", href: "https://github.com/RoadToJunior" },
  ];

  return (
    <navbar className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <section>
        <p className="hover:text-pink-600 duration-100 cursor-pointer">
          Marcin.
        </p>
      </section>

      {/* menu */}

      <ul className="hidden md:flex">
        {navList.map((item) => (
          <li className="hover:text-[#8892b0]">
            {item.to ? (
              <Link to={item.to} smooth duration={500}>
                {item.text}
              </Link>
            ) : (
              <a href={item.href}>{item.text}</a>
            )}
          </li>
        ))}
      </ul>
      {/* hamburger */}
      <section
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
        className="md:hidden z-10"
      >
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
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a href="https://github.com/RoadToJunior">GitHub</a>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <section className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/RoadToJunior"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </section>
    </navbar>
  );
};

export default Navbar;
