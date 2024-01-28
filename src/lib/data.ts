import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaSchool } from 'react-icons/fa6';
import { ProjectType } from './types';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'History',
    hash: '#history',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Matriculated',
    location: 'Hlaingtharyar, Yangon',
    description:
      "I passed the matriculation examination with 4 distincitions. After that, I couldn't go the college due to the covid pandemic.",
    icon: React.createElement(FaSchool),
    date: '2019 - 2020',
  },
  {
    title: 'Junior Front-End Engineer',
    location: 'Yangon',
    description:
      'I worked as a front-end engineer for almost 1 year at a software house. I mainly develop robust and user interactive web apps collaborating with design team and backend engineers.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: 'Freelancer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack engineer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Node.js, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
] as const;

export const projectsData: ProjectType[] = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: '/demo.png',
    repoLink: 'https://github.com/retardH/comfy-ecommerce',
    siteLink: 'https://comfy-home.netlify.app',
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: '/demo.png',
    repoLink: 'https://github.com/retardH/comfy-ecommerce',
    siteLink: 'https://comfy-home.netlify.app',
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: '/demo.png',
    repoLink: 'https://github.com/retardH/comfy-ecommerce',
    siteLink: 'https://comfy-home.netlify.app',
  },
];

export const skillsData = [
  { text: 'HTML', image: '/html-5.svg' },
  { text: 'CSS', image: '/css-3.svg' },
  { text: 'Tailwind', image: '/tailwindcss-icon.svg' },
  { text: 'Antd', image: '/ant-design.svg' },
  { text: 'Javascript', image: '/javascript.svg' },
  { text: 'Typescript', image: '/typescript-icon.svg' },
  { text: 'React', image: '/react.svg' },
  { text: 'Redux', image: '/redux.svg' },
  { text: 'Vue', image: '/vue.svg' },
  { text: 'Next.js', image: '/nextjs-icon.svg' },
  { text: 'Node.js', image: '/nodejs-icon.svg' },
  { text: 'Express', image: '/nodejs-icon.svg' },
  { text: 'Prisma', image: '/prisma.svg' },
  { text: 'MongoDB', image: '/mongodb-icon.svg' },
  { text: 'Git', image: '/git-icon.svg' },
  { text: 'Framer Motion', image: '/framer.svg' },
] as const;
