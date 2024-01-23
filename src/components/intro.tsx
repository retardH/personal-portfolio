"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import Link from "next/link";

const IntroSection = () => {
  return (
    <section className="mt-[10rem]">
      <div className="flex flex-col items-center justify-center">
        <figure className="relative h-[80px] w-[80px] overflow-hidden rounded-full border-4 border-white">
          <Image
            src="/bear.png"
            alt="profile image"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </figure>
        <motion.h1
          className="mb-10 mt-4 px-4 text-center text-2xl sm:text-4xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span className="font-bold">Hello, I'm Zarni.</span> I'm a{" "}
          <b className="font-bold">full-stack developer</b> with{" "}
          <b className="font-bold">industrial experience.</b> I enjoy building{" "}
          <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline underline-offset-8">React (Next.js)</span>.
        </motion.h1>
        <motion.div
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-105 hover:bg-gray-950 focus:scale-110 active:scale-105"
            // onClick={() => {
            //   setActiveSection("Contact");
            //   setTimeOfLastClick(Date.now());
            // }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-105 focus:scale-110 active:scale-105 dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-x-1" />
          </a>

          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedinIn size={24} />
          </a>

          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/retardH"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
