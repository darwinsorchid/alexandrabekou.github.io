import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    title: "Photography Portfolio",
    // description: "",
    image: "src/assets/pics/IMG_5775.JPG",
    link: "https://alexandrabekoy.wixsite.com/photography",
  },
  {
    title: "Mandelbrot Fractal App",
    // description: "A browser-based game built with React and canvas.",
    image: "src/assets/pics/mandelbrot_set_1.png",
    link: "https://the-mandelbrot-fractal.streamlit.app/",
  },
  // {
  //   title: "Personal Blog",
  //   description: "My blog with research notes, tutorials, and experiments.",
  //   image: "/images/blog.png",
  //   link: "https://yourblog.com",
  // },
];

const Fun = () => {
  return (
    <section
      id="fun"
      className="min-h-screen flex flex-col text-white px-6 w-full md:px-16 lg:px-32"
    >
      <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight mb-5 self-end">
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
