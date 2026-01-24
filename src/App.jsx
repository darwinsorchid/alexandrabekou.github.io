import { useState } from "react";
import "./index.css";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import TechStack from "./components/TechStack.jsx";
import LabSkills from "./components/LabSkills.jsx";
import FunProjects from "./components/FunProjects.jsx";
import Contact from "./components/Contact.jsx";
import { useScroll } from "framer-motion";
import { Pointer } from "@/components/ui/pointer";

function App() {
  return (
    <div className="flex flex-col gap-0 bg-[#0b010c]">
      {/* <Pointer/> */}
      <About />
      <Research />
      <TechStack />
      <LabSkills />
      <FunProjects />
      <Contact />
    </div>
  );
}

export default App;
