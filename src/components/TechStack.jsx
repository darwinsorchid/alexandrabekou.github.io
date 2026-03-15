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
      className="h-screen flex flex-col text-white px-6 md:px-16 w-full lg:px-32 gap-20 mt-20"
    >
      <div className="max-w-1xl mr-auto flex flex-col mb-[-5rem] pt-40 mt-10">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight pb-20">
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
