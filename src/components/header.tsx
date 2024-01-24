"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.3rem] backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full lg:w-[40rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-0 flex h-[4.5rem] -translate-x-1/2 items-center justify-between py-2 sm:top-6 sm:h-[3.25rem] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-base text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex items-center justify-center sm:h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center p-1 px-3 text-inherit transition-all hover:text-gray-950 sm:p-3"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
