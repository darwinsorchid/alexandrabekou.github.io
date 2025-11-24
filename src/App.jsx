import { useState } from "react";
import "./styles.css";
import { About } from "./components/About.jsx";
import { Research } from "./components/Research.jsx";
import { TechStack } from "./components/TechStack.jsx";
import { LabSkills } from "./components/LabSkills.jsx";
import { FunProjects } from "./components/FunProjects.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  return (
    <>
      <About />
      <Research />
      <TechStack />
      <LabSkills />
      <FunProjects />
      <Contact />
    </>
  );
}

export default App;
