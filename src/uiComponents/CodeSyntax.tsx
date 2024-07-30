import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoLogoReact } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";

const CodeSyntax = () => {
  const codeString = `import React from 'react'\nimport { motion } from 'framer-motion'\ninterface Props{\n\tchildren: JSX.Element;\n\tlassName?: string;
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
                className={${(<code>`</code>)}relative  "$"{props.className} ${(
    <code>`</code>
  )}}>
                {props.children}
                </motion.div>
        )
    }
    export default TextReveal`;
  const customStyle = {
    fontSize: "0.9rem",
    borderRadius: "0 0 10px 10px",
    backgroundColor: "#292929",
    maxHeight: "500px",
  };
  return (
    <div>
      <div className="border">
        <h2>Text Reveal 1</h2>
      </div>
      <div className=" w-full  flex gap-2  px-4 py-2  bg-seashell-950 rounded-t-[10px]">
        <div className="bg-[#ff605c] w-3 h-3 rounded-full"></div>
        <div className="bg-[#ffbd44] w-3 h-3 rounded-full"></div>
        <div className="bg-[#00ca4e] w-3 h-3 rounded-full"></div>
      </div>
      <div className="w-full  bg-seashell-950 border-b border-t border-[rgb(126,120,135)] ">
        <div className="w-fit flex items-center px-3 py-1 border-r border-[rgb(126,120,135)] gap-2">
          <IoLogoReact className="text-[#61dbfb]" />
          <div className="w-fit  text-[0.82rem] tracking-wider text-white">
            TextReveal.tsx
          </div>
        </div>
      </div>
      <div className="syntax-container relative py-2 bg-seashell-950 rounded-b-[10px]">
        <button className="absolute top-2 right-6 text-white p-3 rounded-md bg-seashell-800 hover:bg-seashell-600 transition-[background-color] duration-200 ease-in-out">
            <CopyToClipboard text={codeString} onCopy={() => alert("Copied!")}>
                <RxCopy />
            </CopyToClipboard>
          
        </button>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers
          wrapLongLines={true}
          useInlineStyles={false}
          className={
            "syntax-highlighter bg-seashell-950 text-[0.9rem] max-h-[400px] overflow-y-auto"
          }
          id="syntax-style"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSyntax;
