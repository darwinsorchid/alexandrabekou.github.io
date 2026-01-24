import React from "react";
import Navbar from "./NavBar.jsx";
import { HyperText } from "@/components/ui/hyper-text";
import { MorphingText } from "@/components/ui/morphing-text";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 justify-center"
    >
      <Navbar />
      <div className="max-w-4xl mr-auto flex flex-col">
        <h1 className="text-5xl md:text-5xl font-light tracking-normal uppercase leading-tight mb-0">
          ALEXANDRA BEKOU
        </h1>
        {/* <h1 className="text-5xl md:text-5xl font-normal tracking-normal uppercase leading-tight mt-[-1.4rem]">
          BEKOU
        </h1> */}
      </div>

      <div className="mt-1 ml-130 pb-1 self-center">
        <h2 className="mt-4 text-lg md:text-3xl tracking-wide font-semibold self-end">
          <HyperText delay={800} characterSet="[IHAVEBEENWATCHING]">
            INTERDISCIPLINARY RESEARCHER
          </HyperText>
        </h2>
        <div className="border-l-1 border-purple-700 pb-1 self-center">
          <h2 className="mt-2 pl-2 text-lg md:text-3xl text-purple-700/80 font-thin">
            Next-gen Biologist
          </h2>
        </div>
      </div>

      <div className="w-full max-w-6xl mr-16 md:mr-24 flex flex-col pt-45 pl-20">
        <h2 className="text-4xl font-small text-white mb-1">
          <span className="text-4xl">EXPERIMENTAL DESIGN </span>for:
        </h2>
        {/* <h3>
          <MorphingText texts={["Machine Learning", "Molecular Research"]} />
        </h3> */}
        <ul className="mt-2 space-y-1 text-2xl font-light">
          <li className="list-disc list-inside">Machine Learning</li>
          <li className="list-disc list-inside">Molecular Research</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
