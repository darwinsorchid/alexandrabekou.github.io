import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import DecBound from "@/assets/pics/dec_bound.png";
import MandelBrot from "@/assets/pics/mandelbrot_set.png";
import Pic from "@/assets/pics/IMG_5775.JPG";
import Site from "@/assets/pics/website.png";

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
    title: "PPI Network Report w/ Quarto, R",
    // description: "My blog with research notes, tutorials, and experiments.",
    image: "src/assets/pics/PPI.png",
    link: "src/assets/BioNet.html",
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
    image: "src/assets/pics/website.png",
    link: "https://github.com/darwinsorchid/alexandrabekou.github.io",
  },
];

const Fun = () => {
  return (
    <section
      id="fun"
      className="h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32 mt-20"
    >
      <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5 pt-10 self-end pb-8">
          FUN
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Fun;
