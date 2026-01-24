import React from "react";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-64 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xs opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-white text-xl font-normal mb-1">{title}</h3>
        {/* <p className="text-gray-300 text-sm">{description}</p> */}
      </div>
    </a>
  );
};

export default ProjectCard;
