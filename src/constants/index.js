import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  dcc,
  klHome,
  spotlight
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Web Architecture",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#003459",
    date: "Sep 2022 - Present",
  },
  {
    title: "Freelance Web Developer",
    company_name: "Wale Solutions",
    icon: "",
    iconBg: "#003459",
    date: "Sep 2019 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Kings League",
    description:
      "The official website for the local community's basketball league in East NY, Brooklyn",
    image: klHome,
    repo: "https://github.com/walethesolution/ball-league",
    live: "https://kings-league-theta.vercel.app/",
  },
  {
    id: "project-2",
    name: "Spotlight Beta",
    description: "This is the beta version of spotlight app, this aim of this app is to connect Non profit orgarnizations to community members in need of their services",
    image: spotlight,
    repo: "Confidential",
    live: "https://spotlight-beta.vercel.app/"
  }
];

export { services, technologies, experiences, projects };
