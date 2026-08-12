import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import DecBound from "../assets/pics/dec_bound.png";
import MandelBrot from "../assets/pics/mandelbrot_set.png";
import PPI from "../assets/pics/bioPPI.png";
import Pic from "../assets/pics/IMG_5775.JPG";
import Logo from "../assets/pics/icon.png";

const projects = [
  {
    title: "Numpy NN vs Analytical Function",
    // description: "My blog with research notes, tutorials, and experiments.",
    image: DecBound,
    link: "https://github.com/darwinsorchid/nn-from-scratch",
  },

  {
    title: "Mandelbrot Fractal App",
    // description: "A browser-based game built with React and canvas.",
    image: MandelBrot,
    link: "https://github.com/darwinsorchid/The-Mandelbrot-Fractal",
  },
  {
    title: "PPI Network Analysis",
    // description: "My blog with research notes, tutorials, and experiments.",
    image: PPI,
    link: "/BioNet.html",
  },
  {
    title: "Photography Portfolio",
    // description: "",
    image: Pic,
    link: "https://alexandrabekoy.wixsite.com/photography",
  },

  {
    title: "Personal Website",
    // description: "",
    image: Logo,
    link: "https://github.com/darwinsorchid/alexandrabekou.github.io",
  },
];

const Fun = () => {
  return (
    <section
      id="fun"
      className="min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 mt-10 md:mt-20 pb-16 md:pb-0"
    >
      <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="text-3xl font-bold tracking-normal uppercase leading-tight md:text-5xl md:font-normal mb-3 md:mb-5 pt-6 md:pt-10 self-end pb-4 md:pb-8">
          FUN
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Fun;
