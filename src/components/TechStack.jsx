import React from "react";
import TechStackNetwork from "./TechStackNetwork.jsx";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "python",
  "r",
  "visualstudiocode",
  "git",
  "github",
  "pandas",
  "numpy",
  "scikitlearn",
  "quarto",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col text-white px-6 md:px-16 w-full lg:px-32 gap-8 md:gap-20 mt-6 md:mt-20 pb-12 md:pb-0"
    >
      <div className="max-w-1xl mr-auto flex flex-col pt-6 md:pt-10 mt-0 md:mt-2">
        <h1 className="text-3xl font-bold tracking-normal uppercase leading-tight md:text-5xl md:font-normal pb-4 md:pb-20">
          TECH STACK
        </h1>
      </div>

      <TechStackNetwork />
      {/* <IconCloud images={images} /> */}
      {/* </span> */}
    </section>
  );
};

export default TechStack;
