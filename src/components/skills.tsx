'use client';
import React from 'react';
import SectionHeader from './section-header';
import { useSectionView } from '@/lib/hooks';
import { skillsData } from '@/lib/data';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, type Variants } from 'framer-motion';

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
    },
  }),
};

const MySkills = () => {
  const { ref } = useSectionView('Skills', 0.95);
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeader>My Skills</SectionHeader>
      <ul className="flex flex-wrap items-center justify-center gap-4 text-lg text-gray-700">
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill.text}
            className="borderBlack flex max-h-[45.6px] items-center gap-1 rounded-xl bg-white px-4 py-2 text-gray-700 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill.image}
              alt="skill icon"
              width={60}
              height={60}
              className="h-[24px] w-[24px]"
            />
            <span className={cn(index < 2 && 'mt-1', 'text-inherit')}>
              {skill.text}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
