import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoLogoReact } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import { BsClipboard2Check } from "react-icons/bs";
import { motion, useAnimationControls, Variants } from "framer-motion";

interface Props{
    codeString : string;
    header: string;
}
const CodeSyntax = (props: Props) => {

  const controls = useAnimationControls();

    const variants : Variants = {
        show: {
            opacity: 1,
            y: "-0.2rem",
            transition: {duration: 0.3, ease: "easeOut"}
        },
        hide: {
            opacity: 0,
            y: "-0.4rem",
            transition: {duration: 0.3, ease: "easeOut", delay: 3}
        },
        initial: {
            opacity: 0,
            y: "0"
        }
    }

    const showPopUp = async () =>{
        await controls.start("show");
        await controls.start("hide");
        controls.set("initial")
    }
  const customStyle = {
    backgroundColor: "#292929",
    
  };
  return (
    <div>
      <div className=" w-full  flex gap-2  px-4 py-2  bg-seashell-950 rounded-t-[10px]">
        <div className="bg-[#ff605c] w-3 h-3 rounded-full"></div>
        <div className="bg-[#ffbd44] w-3 h-3 rounded-full"></div>
        <div className="bg-[#00ca4e] w-3 h-3 rounded-full"></div>
      </div>
      <div className="w-full  bg-seashell-950 border-b border-t border-[rgb(126,120,135)] ">
        <div className="w-fit flex items-center px-3 py-1 border-r border-[rgb(126,120,135)] gap-2">
          <IoLogoReact className="text-[#61dbfb]" />
          <div className="w-fit  text-[0.82rem] tracking-wider text-white">
            {props.header}.tsx
          </div>
        </div>
      </div>
      <div className="syntax-container relative py-2 bg-seashell-950 rounded-b-[10px]">
        <button className="absolute top-2 right-6 text-white p-3 rounded-md bg-seashell-800 hover:bg-seashell-600 transition-[background-color] duration-200 ease-in-out" onClick={() => showPopUp()}>
            <CopyToClipboard text={props.codeString} >
                <RxCopy />
            </CopyToClipboard>
        </button>
        <motion.div variants={variants} animate={controls} initial={"initial"} className="absolute top-[-2.4rem] right-6  text-white p-3 flex gap-2 items-center bg-seashell-800 rounded-md">
            <BsClipboard2Check className="text-[1.1rem]"/>
            <p className="text-[0.8rem]">Copied to clipboard</p>
        </motion.div>
        <SyntaxHighlighter
          language="tsx"
          showLineNumbers
          wrapLongLines={true}
          customStyle={customStyle}
          style={oneDark}
          className={
            "syntax-highlighter bg-seashell-950 text-[0.9rem] max-h-[400px] overflow-y-auto"
          }
          id="syntax-style"
        >
          {props.codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSyntax;
