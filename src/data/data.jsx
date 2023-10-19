import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ProjectIMG from "../assets/workImg.jpeg";
import Tailwind from "../assets/tailwind.png";
import HTML from "../assets/html.png";
import Sass from "../assets/sass-1-logo-png-transparent.png";
import Github from "../assets/github.png";
import ReactLogo from "../assets/react.png";
import Javascript from "../assets/javascript.png";

export const data = [
  {
    id: 1,
    name: "Portfolio website",
    image: ProjectIMG,
    github: "https://github.com/RoadToJunior/portfolio-app",
    live: "",
  },
  {
    id: 2,
    name: "alelipaco.com ecommerce",
    image: ProjectIMG,
    github: "https://github.com/RoadToJunior/alelipa",
    live: "",
  },
  {
    id: 3,
    name: "test",
    image: ProjectIMG,
    github: "",
    live: "",
  },
];

export const navbarList = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
  { name: "GitHub", href: "https://github.com/RoadToJunior" },
];

export const skillsList = [
  {
    name: "HTML",
    src: HTML,
    alt: "HTML Logo",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=pl",
  },
  {
    name: "Tailwind",
    src: Tailwind,
    alt: "Tailwind Logo",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Sass",
    src: Sass,
    alt: "Sass Logo",
    href: "https://sass-lang.com/",
  },
  {
    name: "GitHub",
    src: Github,
    alt: "GitHub Logo",
    href: "https://github.com/RoadToJunior",
  },
  {
    name: "React",
    src: ReactLogo,
    alt: "React Logo",
    href: "https://react.dev/",
  },
  {
    name: "JavaScript",
    src: Javascript,
    alt: "JavaScript Logo",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=pl",
  },
];

export const socialIconsList = [
  {
    name: "LinkedIn",
    href: "https://pl.linkedin.com/in/marcin-lichota-61ba85251",
    icon: <FaLinkedin size={30} />,
    bg: "bg-[#0b66c2]",
  },
  {
    name: "Email",
    href: "/",
    icon: <HiOutlineMail size={30} />,
    bg: "bg-pink-600",
    to: "contact",
  },
  {
    name: "GitHub",
    href: "https://github.com/RoadToJunior",
    icon: <FaGithub size={30} />,
    bg: "bg-[#333333]",
  },
];
