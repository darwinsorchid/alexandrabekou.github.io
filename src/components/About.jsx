import React from "react";
import Navbar from "./NavBar.jsx";
import { HyperText } from "@/components/ui/hyper-text";
import { MorphingText } from "@/components/ui/morphing-text";
import { TextAnimate } from "@/components/ui/text-animate";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 justify-center"
    >
      <Navbar />

      {/* Align name with title */}
      <div className="flex w-full items-start justify-between mt-20">
        <div>
          <h1 className="text-white text-5xl md:text-5xl tracking-normal uppercase leading-tight">
            ALEXANDRA BEKOU
          </h1>
        </div>

        <div className="text-right mt-20">
          <h2 className="text-lg md:text-2xl tracking-wide font-semibold self-end">
            <HyperText delay={800} characterSet="[IHAVEBEENWATCHING]">
              INTERDISCIPLINARY RESEARCHER
            </HyperText>
          </h2>

          <div className="border-l border-purple-700 pb-1 self-center pr-5">
            <h2 className="mt-2 text-lg md:text-3xl text-purple-700/80 font-thin">
              <TextAnimate animation="blurInUp" by="character" once>
                Biological Systems and Artificial Intelligence
              </TextAnimate>
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mr-16 md:mr-24 flex flex-col pt-25 pl-20">
        <h2 className="text-4xl font-small text-white mb-1">
          <span className="text-3xl">RESEARCH INTERESTS</span>:
        </h2>
        {/* <h3>
          <MorphingText texts={["Machine Learning", "Molecular Research"]} />
        </h3> */}
        <ul className="mt-2 space-y-1 text-xl font-light">
          <li className="list-disc list-inside">
            Bio-inspired Neural Networks
          </li>
          <li className="list-disc list-inside">
            Neuroevolution and Natural Computing
          </li>
          <li className="list-disc list-inside">Computational Biology</li>
          <li className="list-disc list-inside">
            Organoids and Disease Modeling
          </li>
          <li className="list-disc list-inside">
            Machine Learning for Biomedical Data
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
