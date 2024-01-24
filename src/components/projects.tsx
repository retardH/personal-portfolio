import React from "react";
import SectionHeader from "./section-header";
import { ProjectType } from "@/lib/types";
import { projectsData } from "@/lib/data";

const MyProjects = () => {
  return (
    <section>
      <SectionHeader>My Projects</SectionHeader>
      {projectsData.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
};

const Project: React.FC<ProjectType> = (project) => {
  return <div>Project</div>;
};

export default MyProjects;
