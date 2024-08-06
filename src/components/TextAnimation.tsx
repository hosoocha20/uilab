import React from "react";
import { FastText } from "../uiComponents/TextAnimationComponents";
import ComponentView from "../uiComponents/ComponentView";

const TextAnimation = () => {
  return (
    <div className="font-inter  flex-1 min-w-[calc(100vw-250px)] bg-background flex justify-center pt-6 pb-[5rem] px-[3rem] text-text">
      <div className=" w-[1200px] max-w-full  flex flex-col gap-[2.5rem]">
        <h1 className="text-[2.1rem] font-bold">Text Animation</h1>
        <ComponentView component={FastText} name="Fast Text" header="FastText" codeString='import React, { useEffect } from "react";

export const FastText = () => {
  const wordsToChange = [
    "me",
    "fast",
    "text",
    "animation",
    "kinetic",
    "design",
    "component",
  ];
  const colors = [
    "#ffffff",
    "#6ac46d",
    "#fbe090",
    "#f69d50",
    "#f47068",
    "#fc8dc7",
    "#b083f0",
    "#529bf5",
  ];
  let interId: number | undefined;
  function showText() {
    document.getElementById("fastText")!.innerHTML = wordsToChange[0];
  }

  const onHoverChangeText = () => {
    let currentIndex = 0;
    interId = setInterval(function loop() {
      if (currentIndex >= wordsToChange.length) {
        currentIndex = 0;
      }
      document.getElementById("fastText")!.style.color =
        colors[currentIndex + 1];
      document.getElementById("fastText")!.style.borderBottomColor =
        colors[currentIndex + 1];
      document.getElementById("fastText")!.innerHTML =
        wordsToChange[currentIndex++];
    }, 250);
  };

  const stopChangeText = () => {
    clearInterval(interId);
    document.getElementById("fastText")!.style.color = "#ffffff";
    document.getElementById("fastText")!.style.borderBottomColor = "#ffffff";
    showText();
  };

  useEffect(() => {
    showText();
  }, []);

  return (
    <div
      id="fastTextCont"
      className="font-inter h-[300px] border rounded-[10px] flex items-center pl-[20%]  bg-black text-white"
    >
      <p className="text-[3rem] font-bold cursor-default">
        Hover over{" "}
        <span
          id="fastText"
          className="border-b-4 border-white "
          onMouseOver={onHoverChangeText}
          onMouseLeave={stopChangeText}
        ></span>
        <span className="block">to see effect.</span>
      </p>
    </div>
  );
};
'/>
      </div>
    </div>
  );
};

export default TextAnimation;
