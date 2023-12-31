import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navbarList, socialIconsList } from "../data/data";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);

  return (
    <navbar className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <section>
        <p className="hover:text-pink-600 duration-100 cursor-pointer">
          <Link to="home" smooth duration={500}>
            Road To Junior
          </Link>
        </p>
      </section>

      {/* menu */}

      <ul className="hidden md:flex">
        {navbarList.map((item) => (
          <li
            className={
              item.name === "GitHub"
                ? "text-pink-600 hover:text-gray-300"
                : "hover:text-[#8892b0]"
            }
          >
            {item.to ? (
              <Link to={item.to} smooth duration={500}>
                {item.name}
              </Link>
            ) : (
              <a href={item.href}>{item.name}</a>
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
        {navbarList.map((item) => (
          <li className="py-6 text-4xl">
            {item.to ? (
              <Link onClick={handleClick} to={item.to} smooth duration={500}>
                {item.name}
              </Link>
            ) : (
              <a href={item.href}>{item.name}</a>
            )}
          </li>
        ))}
      </ul>
      {/* social icons */}
      <section className="hidden lg:flex fixed flex-col top-[35%] left-0">
        {socialIconsList.map((item) => (
          <ul>
            {item.to ? (
              <Link
                className="flex justify-between items-center w-full text-gray-300"
                to={item.to}
                smooth
                duration={500}
              >
                <li
                  className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.bg}`}
                >
                  {item.name} {item.icon}
                </li>
              </Link>
            ) : (
              <li
                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.bg}`}
              >
                <a
                  href={item.href}
                  className="w-full h-full flex justify-between items-center w-full text-gray-300"
                >
                  {item.name} {item.icon}
                </a>
              </li>
            )}
          </ul>
        ))}
      </section>
    </navbar>
  );
};

export default Navbar;
