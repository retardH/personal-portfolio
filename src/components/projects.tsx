"use client";
import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionView } from "@/lib/hooks";

const MyProjects = () => {
  const { ref } = useSectionView("Projects", 0.45);

  return (
    <section id="projects" className="scroll-mt-32" ref={ref}>
      <SectionHeader>My Projects</SectionHeader>
      {projectsData.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
};

export default MyProjects;
