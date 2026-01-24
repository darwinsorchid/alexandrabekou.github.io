import React from "react";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.08]"
    >
      {/* Black background always visible */}
      <div className="absolute inset-0" />

      {/* Image fades in on hover */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

      {/* Title always visible on top */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h3 className="text-white group-hover:opacity-0 text-sm md:text-2xl font-normal z-10">
          {title}
        </h3>
      </div>

      {/* Optional description appears on hover */}
      {description && (
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-xs md:text-base text-center">
            {/* {description} */}
          </p>
        </div>
      )}
    </a>
  );
};

export default ProjectCard;
