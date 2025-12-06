import React from "react";
import TechStackNetwork from "./TechStackNetwork.jsx";

const TechStack = () => {
  return (
    <section className="bg-[#1e1e1e] min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32">
      <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5">
          TECH STACK
        </h1>
      </div>

      <div>
        <TechStackNetwork />
      </div>
    </section>
  );
};

export default TechStack;
