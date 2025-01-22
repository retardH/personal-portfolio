'use client';
import React from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useSectionView } from '@/lib/hooks';

const AboutMyself = () => {
  const { ref } = useSectionView('About');
  return (
    <motion.section
      id="about"
      className="max-w-[50rem] scroll-mt-32 leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
    >
      <SectionHeader>About Myself</SectionHeader>
      <p>
        I am a software engineer with a deep passion for building innovative,
        accessible and pixel-perfect web applications. I love open-source
        software and have a dream to develop various open-source softwares that
        is useful for the development world. My primary expertise lies in
        Javascript/Typescript ecosystem. But I also have some experience in
        backend development with C#(.NET Core). Currently, I&apos;m a full-stack
        software engineer at KBZ Bank where I develop cutting-edge solutions for
        the human resource sector in the bank. I specialize in working on the
        frontend side mostly using React and Typescript. I thrive on tackling
        challenging tasks, whether it&apos;s optimizing performance, ensuring
        scalability, or improving user interfaces. Outside of work, I am
        constantly exploring new technologies and trends in the tech industry,
        which helps me stay ahead in this fast-evolving field.
      </p>
      {/* <p className="mb-3 text-justify text-base !leading-7 sm:!leading-8">
        After passing the matriculation examination with four distinctions, I
        could not go the the college due to the covid pandemic and political
        situation in my country, Myanmar. So, I decided to pursue my passion for
        programming by self learning. I enrolled in udemy and edX courses for
        learning{' '}
        <b className="font-semibold">programming and web development</b>. So
        then, I became passionate for creating{' '}
        <b className="font-semibold">
          interactive and user-friendly web applications
        </b>
        . My main focus is <b className="font-semibold">Javascript</b> and core
        tech stack is <b className="font-semibold">React, Next.js</b>. I am also
        familiar with{' '}
        <b className="font-semibold">Typescript, Vue.js, Node.js and MongoDB</b>
        . With a solid foundation web application development using Javascript
        language, I believe I can contribute my skills to dynamic and
        collaborative team. I have experience in using version control systems
        such as <b className="font-semibold">Git, Gitlab and Github</b> for
        collaborative development. I stay up-to-date with latest technologies to
        deliver high quality solutions to any problem. Passionate about staying
        abreast of emerging technologies, I am committed to continuous learning
        and thrive in dynamic environments where innovation and excellence are
        paramount. I am currently looking for a{' '}
        <b className="font-semibold">full-time position</b> as a web developer.
      </p> */}
    </motion.section>
  );
};

export default AboutMyself;
