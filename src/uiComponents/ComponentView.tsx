import React, { useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { renderToString } from "react-dom/server";
import CodeSyntax from "./CodeSyntax";
import { PiEye } from "react-icons/pi";
import { IoCodeSlashOutline } from "react-icons/io5";

interface Props {
  component: React.ComponentType<{ className?: string }>;
  header: string;
}
const ComponentView = (props: Props) => {
  const [toggleView, setToggleView] = useState(true);
  const controls = useAnimationControls();
  const codeString = `import { motion, Variants } from "framer-motion";
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
        className="relative  text-[3rem] font-bold  text-[#EAF6F3]"
      >
        <motion.p variants={textRevealUp}>Hello,</motion.p>
        <motion.p variants={textRevealUp}>Welcome to <span className="text-primary">UiLab</span></motion.p>
      </motion.div>
    </div>
  );
};`;

  const buttonVariants: Variants = {
    code1: {
      width: "100%",
      right: 0,
      top: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
    code2: { left: "auto" },
    code3: { width: "50%" },
    view: {},
    view1: {
      width: "100%",
      left: 0,
      top: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
    view2: { right: "auto" },
    view3: { width: "50%" },
    initial: { scaleX: 1, left: 0, top: 0 },
  };
  const textVariants1: Variants = {
    active: {
      color: "#000000",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
    inactive: {
      color: "#ffffff",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  const textVariants2: Variants = {
    activePair: {
      color: "#ffffff",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    inactivePair: {
      color: "#000000",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const sequenceToCode = async () => {
    setToggleView(false);
    controls.start("inactivePair");
    controls.start("inactive");
    await controls.start("code1");
    await controls.start("code2");
    return controls.start("code3");
  };
  const sequenceToView = async () => {
    setToggleView(true);
    controls.start("active");
    controls.start("activePair");
    await controls.start("view1");
    await controls.start("view2");
    return controls.start("view3");
  };
  return (
    <div>
      <div className="font-inter flex items-center justify-between py-2">
        <h3 className="font-semibold text-text text-[1.2rem]">
          {props.header}
        </h3>
        <div className="border border-seashell-950 bg-seashell-950 flex py-[0.15rem] px-[0.18rem] rounded-[1.2rem]">
          <div className="flex relative rounded-[1rem] overflow-hidden">
            <motion.div
              variants={buttonVariants}
              initial={"initial"}
              animate={controls}
              className="absolute  w-[50%] rounded-[1rem] h-full bg-white z-[0]"
            ></motion.div>
            <motion.button
              variants={textVariants1}
              initial={"active"}
              animate={controls}
              className="flex-1 flex items-center gap-3 py-1 px-4 z-10 bg-transparent text-text"
              onClick={sequenceToView}
            >
              <PiEye className="text-[1.1rem]" />
              <p className="text-[0.9rem] font-medium ">VIEW</p>
            </motion.button>
            <motion.button
              variants={textVariants2}
              initial={"activePair"}
              animate={controls}
              className="flex items-center flex-1 gap-3 py-1 px-4 z-10 bg-transparent text-white"
              onClick={sequenceToCode}
            >
              <IoCodeSlashOutline className="text-[1.1rem]" />
              <p className="text-[0.9rem] font-medium  ">CODE</p>
            </motion.button>
          </div>
        </div>
      </div>
      {toggleView ? (
        <props.component />
      ) : (
        <CodeSyntax codeString={codeString} />
      )}
    </div>
  );
};

export default ComponentView;
