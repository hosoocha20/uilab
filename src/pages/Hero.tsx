import React from "react";

const Hero = () => {
  return (
    <div className="font-inter h-screen flex-1 min-w-[calc(100vw-250px)] bg-background flex justify-center py-6  text-text">
      <div className=" h-full border w-[960px] max-w-[960px]">
        <h1 className="text-[1.8rem] font-bold">UILab Components</h1>
        <p>
          UILab Components is a collection of pre-built, reusable React
          components, animations, and transitions designed to elevate your web
          projects. Inspired by modern design trends, our components offer a
          solid foundation for creating stunning and user-friendly interfaces.
        </p>
      </div>
    </div>
  );
};

export default Hero;
