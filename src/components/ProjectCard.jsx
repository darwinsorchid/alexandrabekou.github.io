import React, { useEffect, useRef, useState } from "react";

const ProjectCard = ({ title, description, image, link }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();

    mediaQuery.addEventListener("change", updateMobileState);
    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <a
      ref={cardRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-64 md:h-72 lg:h-70 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.08] active:scale-[1.04]"
    >
      <div className="absolute inset-0" />

      {image && (
        <img
          src={image}
          className={[
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isMobile
              ? isInView
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100 group-active:opacity-100",
          ].join(" ")}
        />
      )}

      <div className="absolute inset-0 flex justify-center items-center">
        <h3
          className={[
            "text-white text-sm md:text-2xl font-normal z-10 transition-opacity duration-500",
            isMobile
              ? isInView
                ? "opacity-0"
                : "opacity-100"
              : "group-hover:opacity-0 group-active:opacity-0",
          ].join(" ")}
        >
          {title}
        </h3>
      </div>

      {description && (
        <div
          className={[
            "absolute inset-0 flex flex-col justify-end items-center p-4 transition-opacity duration-500",
            isMobile
              ? isInView
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100 group-active:opacity-100",
          ].join(" ")}
        >
          <p className="text-white text-xs md:text-base text-center">
            {/* {description} */}
          </p>
        </div>
      )}
    </a>
  );
};

export default ProjectCard;
