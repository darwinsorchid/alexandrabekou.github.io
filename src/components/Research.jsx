import { useEffect, useState } from "react";

const Research = () => {
  const [hoveredIndex, setIsHoveredIndex] = useState(null);

  return (
    <section
      id="research"
      className="h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 mt-30"
    >
      <div className="max-w-1xl mr-auto flex flex-col  ">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5">
          RESEARCH
        </h1>
      </div>

      <div className="block border-l-6 border-gray-500/60">
        <div className="ml-60 pb-1 self-end pb-20 pt-20">
          <h2
            className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end"
            onMouseEnter={() => setIsHoveredIndex(0)}
            onMouseLeave={() => setIsHoveredIndex(null)}
          >
            <span
              className={`${
                hoveredIndex === 0 ? "text-purple-700/80 cursor-pointer" : ""
              }`}
            >
              Host-Parasite Coevolution for Robust AI with NEAT
            </span>
          </h2>

          <h4
            className={`text-lg font-extralight ${
              hoveredIndex === 0 ? "text-purple-600/80" : ""
            }`}
          >
            ATHENA R.C. / I.S.I
          </h4>
          <div
            className={`transition-opacity duration-400 ${
              hoveredIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg font-light leading-relaxed text-gray-300 mb-3">
              Developed <span className="text-purple-400">CoEvoNEAT</span>, a{" "}
              <span className="text-white">
                bio-inspired cybersecurity framework
              </span>{" "}
              based on host-parasite coevolution using NeuroEvolution of
              Augmenting Topologies (NEAT) .
            </p>

            <ul className="text-gray-300 space-y-1 text-md leading-relaxed list-disc list-inside">
              <li>
                Models adversarial coevolution between defensive and attacking
                networks
              </li>
              <li>
                Alternative approach to adversarial learning for binary
                label-flipping attacks
              </li>
              <li>
                Evaluated on: MNIST • CIFAR-10 • PCOS Diagnosis • Synthetic Moon
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-60 pb-1 self-end pb-20">
          <h2
            className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end"
            onMouseEnter={() => setIsHoveredIndex(1)}
            onMouseLeave={() => setIsHoveredIndex(null)}
          >
            <span
              className={`${
                hoveredIndex === 1 ? "text-purple-700/80 cursor-pointer" : ""
              }`}
            >
              Development of hiPSC Neuromesodermal Organoids for the study of
              Friedreich's Ataxia
            </span>
          </h2>
          <h4
            className={`text-lg font-extralight ${
              hoveredIndex === 1 ? "text-purple-600/80" : ""
            }`}
          >
            Developmental Biology Lab, School of Biology, Aristotle University
            of Thessaloniki
          </h4>
          {/* <h4 className="text-lg font-extralight">
            Aristotle University of Thessaloniki
          </h4> */}
          <p
            className={`text-lg font-light transition-opacity duration-400 ${
              hoveredIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            Protocol standardization for 3D culturing and ICC screening of
            beating neuromesodermal hiPSC organoids as a potential model for
            Friedreich's Ataxia.
          </p>
        </div>

        <div className="ml-60 pb-1 self-end pb-20">
          <h2
            className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end"
            onMouseEnter={() => setIsHoveredIndex(2)}
            onMouseLeave={() => setIsHoveredIndex(null)}
          >
            <span
              className={`${
                hoveredIndex === 2 ? "text-purple-700/80 cursor-pointer" : ""
              }`}
            >
              Age-Related Macular Degeneration Research
            </span>
          </h2>
          <h4
            className={`text-lg font-extralight ${
              hoveredIndex === 2 ? "text-purple-600/80" : ""
            }`}
          >
            Biohellenika S.A., R&D department
          </h4>
          <p
            className={`text-lg font-light transition-opacity duration-400 ${
              hoveredIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            ARPE-19 2D culture and amyloid-beta treatment for the study of AMD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
