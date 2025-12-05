import React from "react";
import Navbar from "./NavBar.jsx";

const About = () => {
  return (
    <section className="bg-[#1e1e1e] min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 pt-20">
      <Navbar />
      <div className="w-full max-w-4xl mr-16 md:mr-24 flex flex-col pt-50 pl-20">
        <h1 className="text-4xl md:text-6xl font-normal tracking-normal uppercase leading-tight mb-0">
          ALEXANDRA
        </h1>
        <h1 className="text-4xl md:text-6xl font-normal tracking-normal uppercase leading-tight mt-[-1.5rem]">
          BEKOU
        </h1>
      </div>
      <h2 className="mt-4 text-lg md:text-4xl tracking-wide font-semibold self-end">
        <span className="pl-4">INTERDISCIPLINARY RESEARCHER</span>
      </h2>

      <div className="mt-1 ml-130 border-l-2 border-purple-700 pb-1 self-center">
        <h2 className="mt-2 pl-2 text-lg md:text-3xl text-purple-700/50 font-thin">
          Next-gen Biologist
        </h2>
      </div>

      <div className="w-full max-w-6xl mr-16 md:mr-24 flex flex-col pt-45 pl-20">
        <h2 className="text-4xl font-small text-white mb-1">
          <span className="text-4xl">EXPERIMENTAL DESIGN </span>for:
        </h2>
        <ul className="mt-2 space-y-1 text-2xl font-light">
          <li className="list-disc list-inside">Machine Learning</li>
          <li className="list-disc list-inside">Molecular Research</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
