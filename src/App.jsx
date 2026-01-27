import { useState } from "react";
import "./index.css";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import TechStack from "./components/TechStack.jsx";
import LabSkills from "./components/LabSkills.jsx";
import FunProjects from "./components/FunProjects.jsx";
import Contact from "./components/Contact.jsx";
// import { useScroll } from "framer-motion";
// import { Pointer } from "@/components/ui/pointer";
import ParticlesComponent from "./components/ParticleBackground.jsx";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import LoadingScreen from "./components/LoadingPage.jsx";

function App() {
  return (
    <div className="relative">
      <LoadingScreen />

      <div className="relative min-h-screen z-0 overflow-hidden cursor-none">
        <SmoothCursor />
        <ParticlesComponent />

        <main className="relative z-10 flex flex-col">
          <About />
          <Research />
          <TechStack />
          <LabSkills />
          <FunProjects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
