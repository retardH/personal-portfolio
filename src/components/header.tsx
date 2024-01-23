"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 h-[4.5rem] w-full -translate-x-1/2 rounded-full border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.3rem] backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] lg:w-[50rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 2, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"></nav>
    </header>
  );
};

export default Header;
