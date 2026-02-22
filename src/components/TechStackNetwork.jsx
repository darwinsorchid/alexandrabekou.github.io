import React, { useRef, useState, useEffect } from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const TechStackNetwork = () => {
  return (
    <div className="w-full flex justify-center items-center gap-x-20">
      <Terminal>
        <TypingAnimation delay={0}>$ ls</TypingAnimation>

        <AnimatedSpan delay={800} className="text-green-600">
          machine_learning bioinformatics web_development
        </AnimatedSpan>

        <TypingAnimation delay={1600} className="text-green-600">
          $ cd machine_learning
        </TypingAnimation>
        <AnimatedSpan>✔ python </AnimatedSpan>
        <AnimatedSpan>✔ git </AnimatedSpan>
        <AnimatedSpan>✔ keras </AnimatedSpan>
        <AnimatedSpan>✔ scikit-learn </AnimatedSpan>
        <AnimatedSpan> </AnimatedSpan>

        <TypingAnimation delay={2400} className="text-green-600">
          $ cd bioinformatics
        </TypingAnimation>
        <AnimatedSpan>✔ R </AnimatedSpan>
        <AnimatedSpan>✔ networkX </AnimatedSpan>
        <AnimatedSpan>✔ numpy </AnimatedSpan>
        <AnimatedSpan>✔ pandas </AnimatedSpan>
        <AnimatedSpan> </AnimatedSpan>

        <TypingAnimation delay={3200} className="text-green-600">
          $ cd web_development
        </TypingAnimation>
        <AnimatedSpan>✔ react </AnimatedSpan>
        <AnimatedSpan>✔ nodejs </AnimatedSpan>
        <AnimatedSpan>✔ tailwindcss </AnimatedSpan>
      </Terminal>
    </div>
  );
};

export default TechStackNetwork;
