import { useEffect, useRef, useState } from "react";

const Research = () => {
  const [hoveredIndex, setIsHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateDeviceType = () => setIsMobile(mediaQuery.matches);
    updateDeviceType();

    mediaQuery.addEventListener("change", updateDeviceType);
    return () => mediaQuery.removeEventListener("change", updateDeviceType);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const updateActiveResearchItem = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((node, index) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setIsHoveredIndex(closestIndex);
    };

    updateActiveResearchItem();
    window.addEventListener("scroll", updateActiveResearchItem, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveResearchItem);

    return () => {
      window.removeEventListener("scroll", updateActiveResearchItem);
      window.removeEventListener("resize", updateActiveResearchItem);
    };
  }, [isMobile]);

  return (
    <section
      id="research"
      className="min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 mt-16 md:mt-30 pb-12 md:pb-0"
    >
      <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="text-3xl font-bold tracking-normal uppercase leading-tight md:text-5xl md:font-normal mb-10 md:mb-20">
          RESEARCH
        </h1>
      </div>

      <div className="relative pt-10 border-l-0 md:border-l-6 md:border-gray-500/60">
        <div
          className="relative"
          ref={(node) => {
            itemRefs.current[0] = node;
          }}
          data-index="0"
        >
          <div className="hidden md:absolute md:left-[-0.2rem] md:top-6 md:top-8 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:block">
            <div
              className={`w-4 h-4 rounded-full ${hoveredIndex === 0 ? "bg-gray-200" : "bg-gray-500"}`}
            ></div>
            <span
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 font-light whitespace-nowrap ${hoveredIndex === 0 ? "opacity-100" : "opacity-0"}`}
            >
              2025 - Present
            </span>
          </div>
          <div className="ml-10 pb-8 md:ml-16 md:pb-14 lg:ml-60 lg:pb-20 self-end">
            <div className="mt-4 flex items-center justify-between gap-3 md:block">
              <h2
                className="text-xl font-bold md:text-3xl tracking-wide font-normal self-end pt-"
                onMouseEnter={() => !isMobile && setIsHoveredIndex(0)}
                onMouseLeave={() => !isMobile && setIsHoveredIndex(null)}
                onClick={(event) => {
                  if (isMobile) {
                    event.preventDefault();
                    setIsHoveredIndex((current) => (current === 0 ? null : 0));
                  }
                }}
              >
                <span
                  className={`${
                    hoveredIndex === 0
                      ? "text-purple-700/80 cursor-pointer"
                      : ""
                  }`}
                >
                  <a
                    href="https://coevolution-project.eu/"
                    target="_blank"
                    onClick={(event) => isMobile && event.preventDefault()}
                  >
                    Host-Parasite Coevolution for Robust AI with NEAT
                  </a>
                </span>
              </h2>

              <div className="md:hidden ml-auto text-[10px] font-medium text-gray-200">
                2025 - Present
              </div>
            </div>

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
                Built <span className="text-purple-400">CoEvoNEAT</span>, a{" "}
                <span className="text-white">
                  bio-inspired cybersecurity framework
                </span>{" "}
                based on host-parasite coevolution using NeuroEvolution of
                Augmenting Topologies (NEAT) . Developed as part of the{" "}
                <span className="text-blue-400">EU-funded CoEvolution </span>
                project.
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

        <div
          className="relative"
          ref={(node) => {
            itemRefs.current[1] = node;
          }}
          data-index="1"
        >
          <div className="hidden md:absolute md:left-[-0.2rem] md:top-6 md:top-8 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:block">
            <div
              className={`w-4 h-4 rounded-full ${hoveredIndex === 1 ? "bg-gray-200" : "bg-gray-500"}`}
            ></div>
            <span
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 font-light whitespace-nowrap ${hoveredIndex === 1 ? "opacity-100" : "opacity-0"}`}
            >
              2022 - 2024
            </span>
          </div>
          <div className="ml-10 pb-8 md:ml-16 md:pb-14 lg:ml-60 lg:pb-20 self-end">
            <div className="mt-4 flex items-center justify-between gap-3 md:block">
              <h2
                className="text-xl font-bold md:text-3xl tracking-wide font-normal self-end"
                onMouseEnter={() => !isMobile && setIsHoveredIndex(1)}
                onMouseLeave={() => !isMobile && setIsHoveredIndex(null)}
                onClick={(event) => {
                  if (isMobile) {
                    event.preventDefault();
                    setIsHoveredIndex((current) => (current === 1 ? null : 1));
                  }
                }}
              >
                <span
                  className={`${
                    hoveredIndex === 1
                      ? "text-purple-700/80 cursor-pointer"
                      : ""
                  }`}
                >
                  <a
                    href="https://kosbio.com/"
                    target="_blank"
                    onClick={(event) => isMobile && event.preventDefault()}
                  >
                    Development of hiPSC Neuromesodermal Organoids for the study
                    of Friedreich's Ataxia
                  </a>
                </span>
              </h2>

              <div className="md:hidden ml-auto text-[10px] font-medium text-gray-200">
                2022 - 2024
              </div>
            </div>

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

        <div
          className="relative"
          ref={(node) => {
            itemRefs.current[2] = node;
          }}
          data-index="2"
        >
          <div className="hidden md:absolute md:left-[-0.2rem] md:top-6 md:top-8 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:block">
            <div
              className={`w-4 h-4 rounded-full ${hoveredIndex === 2 ? "bg-gray-200" : "bg-gray-500"}`}
            ></div>
            <span
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 font-light whitespace-nowrap ${hoveredIndex === 2 ? "opacity-100" : "opacity-0"}`}
            >
              2023
            </span>
          </div>
          <div className="ml-10 pb-8 md:ml-16 md:pb-14 lg:ml-60 lg:pb-20 self-end">
            <div className="mt-4 flex items-center justify-between gap-3 md:block">
              <h2
                className="text-xl font-bold md:text-3xl tracking-wide font-normal self-end"
                onMouseEnter={() => !isMobile && setIsHoveredIndex(2)}
                onMouseLeave={() => !isMobile && setIsHoveredIndex(null)}
                onClick={(event) => {
                  if (isMobile) {
                    event.preventDefault();
                    setIsHoveredIndex((current) => (current === 2 ? null : 2));
                  }
                }}
              >
                <span
                  className={`${
                    hoveredIndex === 2
                      ? "text-purple-700/80 cursor-pointer"
                      : ""
                  }`}
                >
                  Age-Related Macular Degeneration (AMD) Research
                </span>
              </h2>

              <div className="md:hidden ml-auto text-[10px] font-medium text-gray-200">
                2023
              </div>
            </div>
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
