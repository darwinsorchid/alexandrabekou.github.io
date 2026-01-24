import React, { useRef, useState, useEffect } from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col text-white px-6 md:px-16 w-full lg:px-32"
    >
      {/* <div className="max-w-1xl mr-auto flex flex-col">
        <h1 className="md:text-5xl font-normal tracking-normal uppercase leading-tight">
          CONTACT
        </h1>
      </div> */}

      <div className="w-full flex justify-center items-center gap-x-20 pt-40 pb-40">
        <a
          href="src/assets/files/AlexandraBekoyCV.pdf"
          download="AlexandraBekoyCV.pdf"
        >
          <img src="src/assets/logos/cv-logo.png" width="75" height="75"></img>
        </a>
        <a href="https://github.com/darwinsorchid" target="_blank">
          <img
            src="src/assets/logos/github-mark-white.png"
            width="75"
            height="75"
          ></img>
        </a>
        <a
          href="mailto:alexandra.bekoy@gmail.com"
          onClick={() =>
            navigator.clipboard.writeText("alexandra.bekoy@gmail.com")
          }
        >
          <img
            src="src/assets/logos/email-envelope-line-white-icon.png"
            width="75"
            height="75"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/alexandra-bekou-379356227/"
          target="_blank"
        >
          <img
            src="src/assets/logos/linkedin-app-white-icon.png"
            width="70"
            height="70"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Contact;
