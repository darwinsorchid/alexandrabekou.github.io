import { useState } from "react";
import "./index.css";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import TechStack from "./components/TechStack.jsx";
import LabSkills from "./components/LabSkills.jsx";
import FunProjects from "./components/FunProjects.jsx";
import Contact from "./components/Contact.jsx";
import ParticlesComponent from "./components/ParticleBackground.jsx";
import LoadingScreen from "./components/LoadingPage.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <LoadingScreen />

        <div className="relative min-h-screen z-0 overflow-hidden">
          <ParticlesComponent />

          <main className="relative z-10 flex flex-col snap-y snap-mandatory">
            <About />
            <Research />
            <TechStack />
            <LabSkills />
            <FunProjects />
            <Contact />
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
