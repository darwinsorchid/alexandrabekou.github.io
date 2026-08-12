import React, { useRef, useState, useEffect } from "react";
import githubLogo from "../assets/logos/github-mark-white.png";
import emailLogo from "../assets/logos/email-envelope-line-white-icon.png";
import linkedinLogo from "../assets/logos/linkedin-app-white-icon.png";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();

    mediaQuery.addEventListener("change", updateMobileState);
    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    if (!isMobile || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alexandra.bekoy@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={[
        "min-h-screen flex flex-col text-white px-6 md:px-16 w-full lg:px-32 transition-all duration-700 ease-out py-12 md:py-0",
        isMobile && !isInView
          ? "opacity-0 translate-y-6"
          : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      {/* <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight">
          CONTACT
        </h1>
      </div> */}

      <div className="w-full flex justify-center items-center gap-x-20 pt-20 md:pt-100">
        {/* <a
          href="src/assets/files/AlexandraBekoyCV.pdf"
          download="AlexandraBekoyCV.pdf"
        >
          <img src="src/assets/logos/cv-logo.png" width="50" height="50"></img>
        </a> */}
        <a href="https://github.com/darwinsorchid" target="_blank">
          <img src={githubLogo} width="50" height="50"></img>
        </a>

        <div className="relative inline-block group">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
            {copied ? "Copied!" : "Copy email"}
          </div>

          <button
            onClick={handleCopyEmail}
            className="p-1.5 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none bg-transparent border-none"
            aria-label="Copy email: alexandra.bekoy@gmail.com"
          >
            <img src={emailLogo} width="50" height="50" alt="Copy email" />
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/alexandra-bekou-379356227/"
          target="_blank"
        >
          <img src={linkedinLogo} width="50" height="50"></img>
        </a>
      </div>
    </section>
  );
};

export default Contact;
