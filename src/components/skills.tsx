"use client";
import React from "react";
import SectionHeader from "./section-header";
import { useSectionView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MySkills = () => {
  const { ref } = useSectionView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeader>My Skills</SectionHeader>
      <ul className="flex flex-wrap items-center justify-center gap-4 text-lg text-gray-700">
        {skillsData.map((skill, index) => (
          <li
            key={skill.text}
            className="borderBlack flex items-center gap-1 rounded-xl bg-white px-4 py-2 text-gray-700 dark:bg-white/10 dark:text-white/80"
          >
            <Image
              src={skill.image}
              alt="skill icon"
              width={60}
              height={60}
              className="h-[24px] w-[24px]"
            />
            <span className={cn(index < 2 && "mt-1", "text-inherit")}>
              {skill.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
