import { useEffect, useState } from "react";

const Research = () => {
  return (
    <section
      id="research"
      className="bg-[#1e1e1e] min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32"
    >
      <div className="max-w-1xl mr-auto flex flex-col  ">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5">
          RESEARCH
        </h1>
      </div>

      <div className="block border-l-6 border-gray-400/60">
        <div className="ml-130 pb-1 self-end pb-20">
          <h2 className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end">
            <span className="">Coevolution of agentic AI with NEAT</span>
          </h2>
          <h4 className="text-lg font-extralight">ATHENA R.C. / I.S.I</h4>
        </div>

        <div className="ml-130 pb-1 self-end pb-20">
          <h2 className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end ">
            <span className="">
              Neuromesodermal Organoids from hiPSCs for the study of
              Friedreich's Ataxia
            </span>
          </h2>
          <h4 className="text-lg font-extralight">
            Developmental Biology Lab, School of Biology
          </h4>
          <h4 className="text-lg font-extralight">
            Aristotle University of Thessaloniki
          </h4>
        </div>

        <div className="ml-130 pb-1 self-end pb-20">
          <h2 className="mt-4 text-lg md:text-3xl tracking-wide font-normal self-end ">
            <span className="">
              Age-Related Macular Degeneration Research with ARPE-19
            </span>
          </h2>
          <h4 className="text-lg font-extralight">
            Biohellenika S.A., R & D department
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Research;
