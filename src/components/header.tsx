'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useActiveSectionContext } from '@/contexts/active-section';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div
        className="borderBlack fixed left-1/2 h-[5rem] w-full -translate-x-1/2 rounded-none border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.3rem] backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-2xl"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-0 flex h-[5rem] -translate-x-1/2 items-center justify-between py-2 sm:top-6 sm:h-[3.25rem] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-base text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center justify-center sm:h-[36px]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={cn(
                  'flex w-full items-center justify-center p-1 px-3 text-inherit transition-all hover:text-gray-950 sm:p-3',
                  { 'text-gray-950': activeSection === link.name },
                )}
                href={link.hash}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
              >
                {link.name}
              </Link>
              {link.name === activeSection && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-xl bg-gray-200"
                  layoutId="activeSection"
                  transition={{
                    damping: 30,
                    stiffness: 380,
                    type: 'spring',
                  }}
                ></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
