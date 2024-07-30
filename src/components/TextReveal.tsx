import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import { qtcreatorDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeSyntax from "../uiComponents/CodeSyntax";

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
            <h1>Text Reveal</h1>
                <CodeSyntax />
        </div>
    </div>
  );
};

export default TextReveal;
