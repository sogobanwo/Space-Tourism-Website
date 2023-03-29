import React from "react";

type Props = {};

const HompageContent = (props: Props) => {
  return (
    <div className="mx-8 flex flex-col items-center mt-6 md:mt-16 md:text-2xl lg:flex-row lg:mt-36">
      <div className="md:w-[60%] lg:w-[50%] flex items-center justify-center">
        <div className="text-center text-slate-300 font-robotoCondensed  lg:w-[75%]  lg:h-auto  lg:text-left lg:text-xl">
          <h1 className="text-2xl leading-none md:text-3xl">
            SO YOU WANT TO TRAVEL TO
          </h1>
          <br />
          <h1 className="font-serif text-8xl leading-tight md:text-9xl font-light ">
            {" "}
            SPACE
          </h1>{" "}
          <br />
          <h1>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
          </h1>
        </div>
      </div>
      <div className="flex mt-8 justify-center items-center lg:w-[50%]">
        <h1 className="flex font-serif  text-center text-2xl bg-slate-300 w-[11rem] h-[11rem] md:w-[15rem] md:h-[15rem] rounded-full justify-center items-center md:text-4xl">
          Explore
        </h1>
      </div>
    </div>
  );
};

export default HompageContent;
