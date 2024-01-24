"use client";
import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";

const AboutMyself = () => {
  return (
    <motion.section
      id="about"
      className="max-w-[50rem] leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Myself</SectionHeader>
      <p className="mb-3 text-center text-base !leading-8">
        After passing the matriculation examination with four distinctions, I
        could not go the the college due to the covid pandemic and political
        situation in my country, Myanmar. So, I decided to pursue my passion for
        programming by self learning. I enrolled in some udemy and edX courses
        for learning <b className="font-medium">web development</b>. I became
        passionate for creating{" "}
        <b className="font-medium">
          interactive and user-friendly web applications
        </b>
        . My main focus is <b className="font-medium">Javascript</b> and core
        tech stack is <b className="font-medium">React, Next.js</b>. I am also
        familiar with{" "}
        <b className="font-medium">Typescript, Node.js and MongoDB</b>. With a
        solid foundation web application development using Javascript language,
        I believe I can contribute my skills to dynamic and collaborative team.
        I have experience in using version control systems such as{" "}
        <b className="font-medium">Git, Gitlab and Github</b> for collaborative
        development. I stay up-to-date with latest technologies to deliver high
        quality solutions to any problem. Passionate about staying abreast of
        emerging technologies, I am committed to continuous learning and thrive
        in dynamic environments where innovation and excellence are paramount. I
        am currently looking for a{" "}
        <b className="font-medium">full-time position</b> as a web developer.
      </p>
    </motion.section>
  );
};

export default AboutMyself;
