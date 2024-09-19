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
  spotlight,
  tf16,
  orgPickup,
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
    title: "Stem Specialist",
    company_name: "New York Edge",
    icon: "",
    iconBg: "#003459",
    date: "March 2024 - Present",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#003459",
    date: "Sep 2022 - Feb 2024",
  },
  {
    title: "Freelance Web Developer",
    company_name: "WALE",
    icon: "",
    iconBg: "#003459",
    date: "Sep 2019 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Kings League",
    description: "The official website for a community's basketball league",
    image: klHome,
    repo: "https://github.com/walethesolution/ball-league",
    live: "https://kings-league-theta.vercel.app/",
  },
  {
    id: "project-2",
    name: "Spotlight Beta",
    description:
      "This is the beta version of spotlight app, this aim of this app is to connect Non profit orgarnizations to community members in need of their services",
    image: spotlight,
    repo: "Confidential",
    live: "https://spotlight-beta.vercel.app/",
  },
  {
    id: "project-3",
    name: "Tough-16",
    description: "The official website for a Gaming Franchise",
    image: tf16,
    repo: "https://github.com/walethesolution/tough-16",
    live: "https://tough16.com",
  },
  {
    id: "project-4",
    name: "Orgarnized-Pickup",
    description: "The official website for a Soccer Pickup",
    image: orgPickup,
    repo: "https://github.com/walethesolution/orgarnized-pickup",
    live: "https://orgarnized-pickup.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
