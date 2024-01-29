'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';

import Link from 'next/link';
import { useSectionView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/contexts/active-section';

const IntroSection = () => {
  const { ref } = useSectionView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section id="home" ref={ref} className="max-w-[50rem] scroll-mt-[100rem]">
      <div className="flex flex-col items-center justify-center">
        <motion.figure
          className="relative h-[80px] w-[80px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: '0.25',
          }}
        >
          <Image
            src="/bear.png"
            alt="profile image"
            width={80}
            height={80}
            className="rounded-full border-4 border-white object-cover"
            priority
          />
          <motion.span
            className="absolute -right-2 bottom-0 z-20 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.4,
              duration: 0.6,
            }}
          >
            👋
          </motion.span>
        </motion.figure>
        <motion.h1
          className="mb-10 mt-4 text-center text-2xl sm:text-4xl sm:!leading-[3rem]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span className="font-bold">Hello, I&apos;m Zarni.</span> I&apos;m a{' '}
          <b className="font-bold">full-stack developer</b> with{' '}
          <b className="font-bold">industrial experience.</b> I enjoy building{' '}
          <span className="italic">sites & apps</span>. My focus is{' '}
          <span className="underline underline-offset-[10px]">
            Javascript Language
          </span>
          .
        </motion.h1>
        <motion.div
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3 text-white outline-none transition-all hover:scale-105 hover:bg-gray-950 focus:scale-110 active:scale-105"
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{' '}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-3 outline-none transition-all hover:scale-105 focus:scale-110 active:scale-105 dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV{' '}
            <HiDownload className="opacity-60 transition group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-5">
            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-2xl bg-white p-3 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-2xl bg-white p-3 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://github.com/retardH"
              target="_blank"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
