import React from "react";
import LabSkillsDiagram from "./LabSkillsSVG.jsx";

const LabSkills = () => {
  return (
    <section
      id="labskills"
      className="h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32"
    >
      <div className="max-w-1xl ml-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5 pt-0">
          LAB SKILLS
        </h1>
      </div>

      <div className="w-full h-96 min-h-[500px] flex justify-center items-center">
        <LabSkillsDiagram />
      </div>
    </section>
  );
};

export default LabSkills;
