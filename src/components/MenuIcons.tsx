import React from 'react'
import { Hamburger } from '../uiComponents/MenuIconsUI'
import ComponentView from '../uiComponents/ComponentView'

const MenuIcons = () => {
  return (
    <div className="font-inter  flex-1 min-w-[calc(100vw-250px)] bg-background flex justify-center pt-6 pb-[5rem] px-[3rem] text-text">
        <div className=" w-[1200px] max-w-full  flex flex-col gap-[2.5rem]">
            <h1 className="text-[2.1rem] font-bold">Menu Icons</h1>
            <ComponentView component={Hamburger} header='Hamburger' name='Hamburger' codeString='import React, { useEffect, useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";

export const HamburgerI = () => {
  const [open, setOpen] = useState(false);
  const variantsT: Variants = {
    open: {
      y: "0.7rem",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    openI: {
      rotate: "40deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    close: {
      rotate: "0deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closeI: {
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const variantsM: Variants = {
    open: {
      scale: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    closeI: {
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const variantsB: Variants = {
    open: {
      y: "-0.7rem",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    openI: {
      rotate: "140deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    close: {
      rotate: "0deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closeI: {
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const controls = useAnimationControls();

  const openNav = async () => {
    if (open) {
      await controls.start("open");
      await controls.start("openI");
    } else {
      await controls.start("close");
      await controls.start("closeI");
    }
  };

  useEffect(() => {
    openNav();
  }, [open]);
  return (
    <button
      className="h-[1.9rem] *:h-[0.25rem] w-10 *:w-full *:bg-white relative  *:rounded-md"
      onClick={() => setOpen(!open)}
    >
      <motion.div
        variants={variantsT}
        animate={controls}
        className="absolute block top-0 left-0"
      ></motion.div>
      <motion.div
        variants={variantsM}
        animate={controls}
        className="absolute block top-[0.7rem] left-0"
      ></motion.div>
      <motion.div
        variants={variantsB}
        animate={controls}
        className="absolute block top-[1.4rem] left-0"
      ></motion.div>
    </button>
  );
};

export const HamburgerII = () => {
  const [open, setOpen] = useState(false);
  const variantsP: Variants = {
    open: {
      rotate: "90deg",

      transition: { duration: 0.25, ease: "easeOut" },
    },
    closeII: {
      rotate: 0,
    },
  };
  const variantsT: Variants = {
    openI: {
      y: "0.7rem",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    openII: {
      rotate: "-45deg",
    },
    close: {
      rotate: "0deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closeI: {
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const variantsM: Variants = {
    openII: {
      scale: 0,
    },
    closeI: {
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const variantsB: Variants = {
    openI: {
      y: "-0.7rem",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    openII: {
      rotate: "45deg",
    },

    close: {
      rotate: "0deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closeI: {
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const controls = useAnimationControls();

  const openNav = async () => {
    if (open) {
      await controls.start("open");
      await controls.start("openI");
      await controls.start("openII");
    } else {
      await controls.start("close");
      await controls.start("closeI");
      await controls.start("closeII");
    }
  };

  useEffect(() => {
    openNav();
  }, [open]);
  return (
    <button className="h-[1.9rem]  w-10  " onClick={() => setOpen(!open)}>
      <motion.div
        variants={variantsP}
        animate={controls}
        className=" h-full *:h-[0.25rem] *:w-full *:bg-white relative  *:rounded-md  justify-center"
      >
        <motion.div
          variants={variantsT}
          animate={controls}
          className="absolute block top-0 left-0 "
        ></motion.div>
        <motion.div
          variants={variantsM}
          animate={controls}
          className="absolute block top-[0.7rem] left-0"
        ></motion.div>
        <motion.div
          variants={variantsB}
          animate={controls}
          className="absolute block top-[1.4rem] left-0 "
        ></motion.div>
      </motion.div>
    </button>
  );
};

export const HamburgerIII = () => {
  const [open, setOpen] = useState(false);
  const variantsT: Variants = {
    open: {
      rotate: "-35deg",
      width: "1.3rem",
      y: 6,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    close: {
      rotate: "0deg",
      width: "2.5rem",
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const variantsB: Variants = {
    open: {
      rotate: "35deg",
      width: "1.3rem",
      y: -5,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    close: {
      rotate: "0deg",
      width: "2.5rem",
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const controls = useAnimationControls();

  const openNav = async () => {
    if (open) {
      await controls.start("open");
    } else {
      await controls.start("close");
    }
  };

  useEffect(() => {
    openNav();
  }, [open]);
  return (
    <button
      className="h-[1.9rem] *:h-[0.25rem] w-10 *:w-full *:bg-white relative  *:rounded-md "
      onClick={() => setOpen(!open)}
    >
      <motion.div
        variants={variantsT}
        animate={controls}
        className="absolute block top-0 left-0"
      ></motion.div>
      <div className="absolute block top-[0.7rem] left-0"></div>
      <motion.div
        variants={variantsB}
        animate={controls}
        className="absolute block top-[1.4rem] left-0"
      ></motion.div>
    </button>
  );
};'/>
        </div>
    </div>
  )
}

export default MenuIcons