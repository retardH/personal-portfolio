import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { ProjectType } from "./types";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "History",
    hash: "#history",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I&apos;m now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I&apos;m open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData: ProjectType[] = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/demo.png",
    repoLink: "https://github.com/retardH/comfy-ecommerce",
    siteLink: "https://comfy-home.netlify.app",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/demo.png",
    repoLink: "https://github.com/retardH/comfy-ecommerce",
    siteLink: "https://comfy-home.netlify.app",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/demo.png",
    repoLink: "https://github.com/retardH/comfy-ecommerce",
    siteLink: "https://comfy-home.netlify.app",
  },
];

export const skillsData = [
  { text: "HTML", image: "/html-5.svg" },
  { text: "CSS", image: "/css-3.svg" },
  { text: "Tailwind", image: "/tailwindcss-icon.svg" },
  { text: "Antd", image: "/ant-design.svg" },
  { text: "Javascript", image: "/javascript.svg" },
  { text: "Typescript", image: "/typescript-icon.svg" },
  { text: "React", image: "/react.svg" },
  { text: "Redux", image: "/redux.svg" },
  { text: "Vue", image: "/vue.svg" },
  { text: "Next.js", image: "/nextjs-icon.svg" },
  { text: "Node.js", image: "/nodejs-icon.svg" },
  { text: "Express", image: "/nodejs-icon.svg" },
  { text: "Prisma", image: "/prisma.svg" },
  { text: "MongoDB", image: "/mongodb-icon.svg" },
  { text: "Git", image: "/git-icon.svg" },
  { text: "Framer Motion", image: "/framer.svg" },
  // "CSS",
  // "JavaScript",
  // "TypeScript",
  // "React",
  // "Redux",
  // "Vue.js",
  // "Next.js",
  // "Node.js",
  // "Express",
  // "Tailwind",
  // "Antd",
  // "Prisma",
  // "MongoDB",
  // "Git",
  // "Gitlab",
  // "Framer Motion",
] as const;
