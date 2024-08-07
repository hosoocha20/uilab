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

export const TextSlideUp = () => {
  const variants: Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.13, ease: "linear" },
    },
  };
  const childVariants: Variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="font-inter h-[300px] border rounded-[10px] flex flex-col items-center justify-center bg-white">
      <motion.div
        variants={variants}
        initial={"hidden"}
        whileInView={"visible"}
      >
        <div className="text-text text-[3.5rem] font-bold leading-tight relative overflow-hidden ">
          <motion.p
            variants={childVariants}
            className="will-change-transform   h-full pl-4"
          >
            Text
          </motion.p>
        </div>
        <div className="text-text text-[3.5rem] font-bold leading-tight relative overflow-hidden  ">
          <motion.p
            variants={childVariants}
            className="will-change-transform   h-full"
          >
            slide
          </motion.p>
        </div>
        <div className="text-text text-[3.5rem] font-bold leading-tight relative overflow-hidden ">
          <motion.p
            variants={childVariants}
            className="will-change-transform   h-full pl-12"
          >
            up reveal
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export const TextZoomInUp = () => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1, ease: "easeOut" },
    },
  };
  const childVariants: Variants = {
    hidden: {
      y: "100%",
      scaleX: 0.7,
    },
    visible: {
      y: 0,
      scaleX: 1,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className="font-inter h-[300px] border rounded-[10px] flex flex-col items-center justify-center bg-white ">
      <motion.div
        variants={variants}
        initial={"hidden"}
        whileInView={"visible"}
        className="text-text  text-center text-[3rem] font-bold tracking-tight"
      >
        <div className="overflow-hidden  relative ">
          <motion.p
            variants={childVariants}
            className="will-change-transform   h-full leading-snug"
          >
            The Art of Design:
          </motion.p>
        </div>
        <div className="overflow-hidden ">
          <motion.p
            variants={childVariants}
            className="will-change-transform h-full leading-snug"
          >
            Where Function meets
          </motion.p>
        </div>
        <div className="overflow-hidden ">
          <motion.p
            variants={childVariants}
            className="will-change-transform h-full leading-snug"
          >
            Fantasy
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export const StaggeredTextRevealUp = () => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  };
  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const text = "Staggered";
  const text1 = "Text";
  const text2 = "Animation";

  return (
    <div className="font-inter h-[300px] border rounded-[10px] flex flex-col items-center  bg-black overflow-y-auto">
      <div className="min-h-[300px] flex items-center ">
        <motion.div
          variants={variants}
          initial={"hidden"}
          whileInView={"visible"}
          className="text-white text-[3.5rem] font-bold tracking-wider"
        >
          {text.split("").map((char: string, i: number) => {
            return (
              <motion.span
                key={i}
                variants={childVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
      <div className="min-h-[300px] flex items-center ">
        <motion.div
          variants={variants}
          initial={"hidden"}
          whileInView={"visible"}
          className="text-white text-[3.5rem] font-bold tracking-wider "
        >
          {text1.split("").map((char: string, i: number) => {
            return (
              <motion.span
                key={i}
                variants={childVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
      <div className="min-h-[300px] flex items-center">
        <motion.div
          variants={variants}
          initial={"hidden"}
          whileInView={"visible"}
          className="text-white text-[3.5rem] font-bold tracking-wider "
        >
          {text2.split("").map((char: string, i: number) => {
            return (
              <motion.span
                key={i}
                variants={childVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
