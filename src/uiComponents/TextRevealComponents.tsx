import { motion, Variants } from "framer-motion";
import React from "react";

export const TextRevealUp = () => {
  const textRevealUp: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
      clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
      transition: { duration: 0.5, staggerChildren: 0.15, ease: "easeOut" },
    },
  };
  return (
    <div className="font-inter h-[300px] border rounded-[10px] flex items-center justify-center bg-black">
      <motion.div
        variants={textRevealUp}
        initial="hidden"
        whileInView="visible"
        className={`relative  text-[3rem] font-bold  text-[#EAF6F3] `}
      >
        <motion.p variants={textRevealUp}>Hello,</motion.p>
        <motion.p variants={textRevealUp}>
          Welcome to <span className="text-primary">UiLab</span>
        </motion.p>
      </motion.div>
    </div>
  );
};
