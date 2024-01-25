"use client";
import { ProjectType } from "@/lib/types";
import Image from "next/image";
import React, { useRef } from "react";
import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { motion, useScroll, useTransform } from "framer-motion";

const Project: React.FC<ProjectType> = ({
  title,
  description,
  tags,
  imageUrl,
  repoLink,
  siteLink,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="group mb-3 last:mb-0 sm:mb-8 lg:mb-12"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col justify-center px-5 py-4 sm:max-w-[50%] sm:py-6 sm:pl-10 sm:pr-2 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a
              className="borderBlack flex max-w-max cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm outline-none transition-all hover:bg-white/50 dark:bg-white/10"
              href={repoLink}
              target="_blank"
            >
              Source Code <FiGithub className="transition" />
            </a>
            <a
              className="borderBlack flex max-w-max cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm outline-none transition-all hover:bg-white/50 dark:bg-white/10"
              href={siteLink}
              target="_blank"
            >
              Demo <CgWebsite className="transition" />
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={500}
          height={800}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-even:-left-40 
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3

        group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
};

export default Project;
