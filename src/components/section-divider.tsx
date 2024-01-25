"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="my-12 h-0 w-0 rounded-full bg-gray-200 sm:my-24 sm:block sm:h-16 sm:w-1"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDivider;
