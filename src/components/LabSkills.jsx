import React from "react";
import LabSkillsDiagram from "./LabSkillsSVG.jsx";

const LabSkills = () => {
  return (
    <section
      id="labskills"
      className="h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 mt-20"
    >
      <div className="max-w-1xl ml-auto flex flex-col">
        <h1 className="text-3xl font-bold tracking-normal uppercase leading-tight md:text-5xl md:font-normal mb-5 pt-40 pb-10">
          LAB SKILLS
        </h1>
      </div>

      <div className="w-full h-[40rem] min-h-[420px] md:h-[26rem] md:min-h-[400px] lg:h-[30rem] lg:min-h-[500px] flex justify-center items-center overflow-visible">
        <div className="w-full max-w-[520px] scale-[1.4] origin-center md:scale-100 md:max-w-none">
          <LabSkillsDiagram />
        </div>
      </div>
    </section>
  );
};

export default LabSkills;
