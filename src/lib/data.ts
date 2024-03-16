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
    location: 'Yangon',
    description:
      "I passed the matriculation examination with 4 distincitions. After that I couldn't go the college due to the covid pandemic.",
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
    location: 'Yangon',
    description:
      "I'm now a full-stack engineer learning new things and building projects as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Node.js, Mysql and MongoDB. I'm open to any full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
] as const;

export const projectsData: ProjectType[] = [
  {
    title: 'Comfy Home',
    description:
      'A furnitures ecommerce web app for home and office uses. It has features like sorting, filtering products and making actual payments.',
    tags: ['React', 'Typescript', 'Tailwind', 'Stripe'],
    imageUrl: '/comfy-home.png',
    repoLink: 'https://github.com/retardH/comfy-ecommerce',
    siteLink: 'https://ch-ecommerce.netlify.app',
  },
  {
    title: 'MUVI',
    description:
      'A public web app for searching various movies and tv shows. All datas are fetched from the TMDB api. It has features like debounce searching, filtering the results.',
    tags: ['React', 'Typescript', 'Tailwind', 'Clerk'],
    imageUrl: '/muvi.png',
    repoLink: 'https://github.com/retardH/tmdb-project',
    siteLink: 'https://tmuvi.vercel.app',
  },
  {
    title: 'Jobster',
    description:
      'A dashboard web app for managing job posts. User can create, update, delete job posts and view chart reports.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Redux'],
    imageUrl: '/jobster.png',
    repoLink: 'https://github.com/retardH/jobster-ts',
    siteLink: 'https://jobster20.vercel.app ',
  },
  {
    title: 'Shloot Shloot',
    description:
      "A public web app for searching various meals and receipts by text or by country. Users can also mark their fav meals' receipts.",
    tags: ['Vue', 'Tailwind', 'Pinia'],
    imageUrl: '/shloot-shloot.png',
    repoLink: 'https://github.com/retardH/vue-meal-receipts',
    siteLink: 'https://shloot-shloot.vercel.app',
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
  { text: 'Pinia', image: '/pinia.svg' },
  { text: 'Next.js', image: '/nextjs-icon.svg' },
  { text: 'Node.js', image: '/nodejs-icon.svg' },
  { text: 'Prisma', image: '/prisma.svg' },
  { text: 'MongoDB', image: '/mongodb-icon.svg' },
  { text: 'Git', image: '/git-icon.svg' },
  { text: 'Framer Motion', image: '/framer.svg' },
] as const;
