import React from "react";
import TechStackNetwork from "./TechStackNetwork.jsx";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col text-white px-6 md:px-16 w-full lg:px-32 gap-20"
    >
      <div className="max-w-1xl mr-auto flex flex-col mb-[-5rem] pt-20">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-[-5rem]">
          TECH STACK
        </h1>
      </div>

      <div className="flex flex-col self-end">
        <TechStackNetwork />
      </div>
    </section>
  );
};

export default TechStack;
