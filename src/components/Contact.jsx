import React, { useRef, useState, useEffect } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

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
      id="contact"
      className="h-screen flex flex-col text-white px-6 md:px-16 w-full lg:px-32"
    >
      {/* <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight">
          CONTACT
        </h1>
      </div> */}

      <div className="w-full flex justify-center items-center gap-x-20 pt-100">
        {/* <a
          href="src/assets/files/AlexandraBekoyCV.pdf"
          download="AlexandraBekoyCV.pdf"
        >
          <img src="src/assets/logos/cv-logo.png" width="50" height="50"></img>
        </a> */}
        <a href="https://github.com/darwinsorchid" target="_blank">
          <img
            src="src/assets/logos/github-mark-white.png"
            width="50"
            height="50"
          ></img>
        </a>

        <div className="relative inline-block group">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
            {copied ? "Copied!" : "Copy email"}
          </div>

          <button
            onClick={handleCopyEmail}
            className="p-1.5 hover:scale-110 transition-all duration-200 focus:outline-none bg-transparent border-none"
            aria-label="Copy email: alexandra.bekoy@gmail.com"
          >
            <img
              src="src/assets/logos/email-envelope-line-white-icon.png"
              width="50"
              height="50"
              alt="Copy email"
            />
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/alexandra-bekou-379356227/"
          target="_blank"
        >
          <img
            src="src/assets/logos/linkedin-app-white-icon.png"
            width="50"
            height="50"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Contact;
