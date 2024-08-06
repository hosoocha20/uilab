import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import { qtcreatorDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeSyntax from "../uiComponents/CodeSyntax";
import ComponentView from "../uiComponents/ComponentView";
import { TextRevealUp } from "../uiComponents/TextRevealComponents";

const TextReveal = () => {
  const codeString = 
`import React from 'react' 
import { motion } from 'framer-motion'
interface Props{
    children: JSX.Element;
    lassName?: string;
    once? : false | boolean;
}

const TextReveal = (props: Props) => {
    return (
        <motion.div 
            variants={{hidden: {opacity: 0, y: 25, clipPath:'polygon(0% 100%,100% 100%,100% 100%,0% 100%)'}, 
            visible: {opacity:1, y:0, clipPath:'polygon(0% 100%,100% 100%,100% 0%,0% 0%)'}}}
            initial="hidden"
            whileInView="visible"
            viewport={{once: props.once}}
            transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
            className={${<code>`</code>}relative  "$"{props.className} ${<code>`</code>}}>
            {props.children}
            </motion.div>
    )
}
export default TextReveal`;
    const customStyle = {
    fontSize: '0.9rem',
    borderRadius: '10px',
  };

  return (
    <div className="font-inter  flex-1 min-w-[calc(100vw-250px)] bg-background flex justify-center pt-6 pb-[5rem] px-[3rem] text-text">
        <div className=" w-[1200px] max-w-full  flex flex-col gap-[2.5rem]">
            <h1 className="text-[2.1rem] font-bold">Text Reveal</h1>
            <ComponentView component={TextRevealUp} name="Text Reveal Up" header="TextRevealUp" codeString='import { motion, Variants } from "framer-motion";
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
};'/>
        </div>
    </div>
  );
};

export default TextReveal;
