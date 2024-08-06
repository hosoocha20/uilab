import React, { useEffect } from "react";

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
      <p className="text-[3.5rem] font-bold cursor-default">
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
