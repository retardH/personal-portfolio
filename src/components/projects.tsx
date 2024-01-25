import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";

const MyProjects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeader>My Projects</SectionHeader>
      {projectsData.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
};

export default MyProjects;
