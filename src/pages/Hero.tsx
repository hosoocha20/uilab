import React from "react";

const Hero = () => {
  const animationsArr = ["Text Animations", "Text Reveals"];
  const transitionsArr = ["Page Transitions", "Page Loaders"];
  const menusArr = ["Menu Bar", "Dropdown Menu", "Fullscreen Navbar", "Responsive Navbar"];
  const dataArr = ["Grid", "Gallery", "Card", "Wheel"];
  const eleArr = ["Buttons", "Inputs", "Links", "Notifications"];
  const otherEleArr = ["Mouse Scroll", "Loaders"]
  return (
    <div className="font-inter  flex-1 min-w-[calc(100vw-250px)] bg-background flex justify-center pt-6 pb-[5rem]  text-text">
      <div className=" h-full  w-[960px] flex flex-col gap-[2.5rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[2rem] font-bold tracking-wide  pb-2 ">
            UILab Components
          </h1>
          <p className="font-light">
            UILab Components is a collection of pre-built, reusable React
            components, animations, and transitions designed to elevate your web
            projects. Inspired by modern design trends, our components offer a
            solid foundation for creating stunning and user-friendly interfaces.
          </p>
          <p className="font-light">
            Our components are built with React, TypeScript, and styled with
            Tailwind CSS, ensuring high quality and maintainability. Some
            components leverage Framer Motion for dynamic interactions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Getting Started</h2>
          <p className="font-light mt-[0.5rem]">
            To use UI Lab Components, simply copy and paste the desired
            component code into your React project. Our components are designed
            for easy integration and customization.
          </p>
        </div>

        <div>
          <h3 className="text-[1.4rem] font-bold tracking-wide mt-[2rem] text-seashell-950">Animations</h3>
          <div className="mt-[0.8rem] flex flex-wrap w-full gap-4">
            {animationsArr.map((name: string, i: number) => (
              <div key={i} className=" w-[220px] rounded-xl px-3 py-6 bg-aqua-spring-100 cursor-pointer border border-transparent shadow-transparent hover:border-aqua-spring-200 hover:shadow-[0_0_0.1px_rgba(0,0,0,0.021),0_0_0.5px_rgba(0,0,0,0.03),0_0_0.6px_rgba(0,0,0,0.039),0_0_6px_rgba(0,0,0,0.06)] transition-[border,box-shadow] duration-300 ease-in-out">
                <p className=" text-center text-[0.91rem] font-semibold text-seashell-900">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[1.4rem] font-bold tracking-wide mt-[2.5rem] text-seashell-950">Transitions</h3>
          <div className="mt-[0.8rem] flex flex-wrap w-full gap-4">
            {transitionsArr.map((name: string, i: number) => (
              <div key={i} className=" w-[220px] rounded-xl px-3 py-6 bg-aqua-spring-100 cursor-pointer border border-transparent shadow-transparent hover:border-aqua-spring-200 hover:shadow-[0_0_0.1px_rgba(0,0,0,0.021),0_0_0.5px_rgba(0,0,0,0.03),0_0_0.6px_rgba(0,0,0,0.039),0_0_6px_rgba(0,0,0,0.06)] transition-[border,box-shadow] duration-300 ease-in-out">
                <p className=" text-center text-[0.91rem] font-semibold text-seashell-900">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[1.4rem] font-bold tracking-wide mt-[2.5rem] text-seashell-950">Menus & Navbar</h3>
          <div className="mt-[0.8rem] flex flex-wrap w-full gap-4">
            {menusArr.map((name: string, i: number) => (
              <div key={i} className=" w-[220px] rounded-xl px-3 py-6 bg-aqua-spring-100 cursor-pointer border border-transparent shadow-transparent hover:border-aqua-spring-200 hover:shadow-[0_0_0.1px_rgba(0,0,0,0.021),0_0_0.5px_rgba(0,0,0,0.03),0_0_0.6px_rgba(0,0,0,0.039),0_0_6px_rgba(0,0,0,0.06)] transition-[border,box-shadow] duration-300 ease-in-outing-200 transition-[border] duration-300 ease-in-out">
                <p className=" text-center text-[0.91rem] font-semibold text-seashell-900">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[1.4rem] font-bold tracking-wide mt-[2.5rem] text-seashell-950">Data display</h3>
          <div className="mt-[0.8rem] flex flex-wrap w-full gap-4">
            {dataArr.map((name: string, i: number) => (
              <div key={i} className=" w-[220px] rounded-xl px-3 py-6 bg-aqua-spring-100 cursor-pointer border border-transparent shadow-transparent hover:border-aqua-spring-200 hover:shadow-[0_0_0.1px_rgba(0,0,0,0.021),0_0_0.5px_rgba(0,0,0,0.03),0_0_0.6px_rgba(0,0,0,0.039),0_0_6px_rgba(0,0,0,0.06)] transition-[border,box-shadow] duration-300 ease-in-out">
                <p className=" text-center text-[0.91rem] font-semibold text-seashell-900">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[1.4rem] font-bold tracking-wide mt-[2.5rem] text-seashell-950">Elements</h3>
          <div className="mt-[0.8rem] flex flex-wrap w-full gap-4">
            {eleArr.map((name: string, i: number) => (
              <div key={i} className=" w-[220px] rounded-xl px-3 py-6 bg-aqua-spring-100 cursor-pointer border border-transparent shadow-transparent hover:border-aqua-spring-200 hover:shadow-[0_0_0.1px_rgba(0,0,0,0.021),0_0_0.5px_rgba(0,0,0,0.03),0_0_0.6px_rgba(0,0,0,0.039),0_0_6px_rgba(0,0,0,0.06)] transition-[border,box-shadow] duration-300 ease-in-out">
                <p className=" text-center text-[0.91rem] font-semibold text-seashell-900">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[1.4rem] font-bold tracking-wide mt-[2.5rem] text-seashell-950">Other Elements</h3>
          <div className="mt-[0.8rem] flex flex-wrap w-full gap-4">
            {otherEleArr.map((name: string, i: number) => (
              <div key={i} className=" w-[220px] rounded-xl px-3 py-6 bg-aqua-spring-100 cursor-pointer border border-transparent shadow-transparent hover:border-aqua-spring-200 hover:shadow-[0_0_0.1px_rgba(0,0,0,0.021),0_0_0.5px_rgba(0,0,0,0.03),0_0_0.6px_rgba(0,0,0,0.039),0_0_6px_rgba(0,0,0,0.06)] transition-[border,box-shadow] duration-300 ease-in-out">
                <p className=" text-center text-[0.91rem] font-semibold text-seashell-900">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
