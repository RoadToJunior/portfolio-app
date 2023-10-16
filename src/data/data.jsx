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
  { text: "Home", to: "home" },
  { text: "About", to: "about" },
  { text: "Projects", to: "projects" },
  { text: "Contact", to: "contact" },
  { text: "GitHub", href: "https://github.com/RoadToJunior" },
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
