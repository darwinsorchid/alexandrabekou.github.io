import { useEffect, useState } from "react";

const Research = () => {
  const [hoveredIndex, setIsHoveredIndex] = useState(null);

  return (
    <section
      id="research"
      className="bg-[#0b010c] min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32"
    >
      <div className="max-w-1xl mr-auto flex flex-col  ">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5">
          RESEARCH
        </h1>
      </div>

      <div className="block border-l-6 border-gray-400/60">
        <div className="ml-130 pb-1 self-end pb-20 pt-20">
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
          <p
            className={`text-lg font-light transition-opacity duration-400 ${
              hoveredIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            Designed and developed a bio-inspired cybersecurity framework based
            on host-parasite coevolutionary dynamics using NeuroEvolution of
            Augmenting Topologies (NEAT). Tested on MNIST, CIFAR10, PCOS
            Diagnosis and synthetic Moon datasets.
          </p>
        </div>

        <div className="ml-130 pb-1 self-end pb-20">
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
            Protocol standardization for culturing and screening
            (immunocytochemistry) beating neuromesodermal hiPSC organoids as a
            potential model for Friedreich's Ataxia. (SPECIALIZED)
          </p>
        </div>

        <div className="ml-130 pb-1 self-end pb-20">
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
