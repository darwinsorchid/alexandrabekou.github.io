import { useEffect, useState } from "react";

const Research = () => {
  const [hoveredIndex, setIsHoveredIndex] = useState(null);

  return (
    <section
      id="research"
      className="h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 mt-30"
    >
      <div className="max-w-1xl mr-auto flex flex-col  ">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-20">
          RESEARCH
        </h1>
      </div>

      <div className="block border-l-6 border-gray-500/60 relative pt-10">
        <div className="relative">
          <div className="absolute left-[-0.2rem] top-8 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={`w-4 h-4 rounded-full ${hoveredIndex === 0 ? "bg-gray-200" : "bg-gray-500"}`}
            ></div>
            <span
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 font-light whitespace-nowrap ${hoveredIndex === 0 ? "opacity-100" : "opacity-0"}`}
            >
              2025 - Present
            </span>
          </div>
          <div className="ml-60 pb-1 self-end pb-20">
            <h2
              className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end pt-"
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
                  Evaluated on: MNIST • CIFAR-10 • PCOS Diagnosis • Synthetic
                  Moon
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[-0.2rem] top-8 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={`w-4 h-4 rounded-full ${hoveredIndex === 1 ? "bg-gray-200" : "bg-gray-500"}`}
            ></div>
            <span
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 font-light whitespace-nowrap ${hoveredIndex === 1 ? "opacity-100" : "opacity-0"}`}
            >
              2022 - 2024
            </span>
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
            <div
              className={`transition-opacity duration-400 ${
                hoveredIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg font-light leading-relaxed text-gray-300 mb-3">
                Developed a{" "}
                <span className="text-purple-400">
                  3D hiPSC-derived organoid model
                </span>{" "}
                to study{" "}
                <span className="text-white">neuromesodermal development</span>{" "}
                with applications in Friedreich’s Ataxia research.
              </p>

              <ul className="text-gray-300 space-y-1 text-md leading-relaxed list-disc list-inside">
                <li>
                  Contributed to the standardization of a 3D culture protocol
                  for generating reproducible beating hiPSC organoids
                </li>
                <li>
                  Stardardized a 3D immunocytochemistry (ICC) organoid screening
                  protocol for lineage-specific markers
                </li>
                <li>
                  Characterized structural and functional properties of
                  organoids through morphological analysis and qPCR-based
                  quantification of cell-type-specific gene expression
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[-0.2rem] top-8 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={`w-4 h-4 rounded-full ${hoveredIndex === 2 ? "bg-gray-200" : "bg-gray-500"}`}
            ></div>
            <span
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 font-light whitespace-nowrap ${hoveredIndex === 2 ? "opacity-100" : "opacity-0"}`}
            >
              2023
            </span>
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
                Age-Related Macular Degeneration (AMD) Research
              </span>
            </h2>
            <h4
              className={`text-lg font-extralight ${
                hoveredIndex === 2 ? "text-purple-600/80" : ""
              }`}
            >
              Biohellenika S.A., R&D department
            </h4>
            <div
              className={`transition-opacity duration-400 ${
                hoveredIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg font-light leading-relaxed text-gray-300 mb-3">
                Contributed to the development of an{" "}
                <span className="text-purple-400">in vitro AMD model</span>{" "}
                using{" "}
                <span className="text-white">ARPE-19 retinal stem cells</span>{" "}
                and amyloid-beta treatment to investigate mechanisms of retinal
                degeneration.
              </p>

              <ul className="text-gray-300 space-y-1 text-md leading-relaxed list-disc list-inside">
                <li>
                  Established and maintained 2D cultures of ARPE-19 stem cells
                  with morphological assessment of differentiation stages
                </li>
                <li>
                  Performed amyloid-beta treatments on early-stage
                  differentiated retinal cells and quantified metabolic stress
                  responses via protein marker analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
