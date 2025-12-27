import React, { useRef, useState, useEffect } from "react";

const LabSkillsDiagram = () => {
  return (
    <svg
      viewBox="0 0 1000 500"
      width="100%"
      height="100%"
      className="bg-transparent"
    >
      {/* Lines */}
      <line
        x1="500"
        y1="75"
        x2="500"
        y2="145"
        className="stroke-white stroke-1"
      />
      <line
        x1="380"
        y1="160"
        x2="460"
        y2="160"
        className="stroke-white stroke-1"
      />
      <line
        x1="220"
        y1="180"
        x2="220"
        y2="230"
        className="stroke-white stroke-1"
      />
      <line
        x1="500"
        y1="230"
        x2="500"
        y2="280"
        className="stroke-white stroke-1"
      />
      <line
        x1="350"
        y1="180"
        x2="350"
        y2="270"
        className="stroke-white stroke-1"
      />
      <line
        x1="365"
        y1="355"
        x2="590"
        y2="355"
        className="stroke-white stroke-1"
      />
      <line
        x1="200"
        y1="270"
        x2="200"
        y2="330"
        className="stroke-white stroke-1"
      />

      {/* Text */}
      <text x="450" y="60" className="fill-white text-2xl font-light">
        Confocal Microscopy
      </text>
      <text x="200" y="165" className="fill-white text-2xl font-light">
        Organoid culture
      </text>
      <text x="470" y="165" className="fill-white text-2xl font-light">
        Immunocytochemistry
      </text>
      <text x="165" y="260" className="fill-white text-2xl font-light">
        q-PCR
      </text>
      <text x="450" y="220" className="fill-white text-2xl font-light">
        CRISPR-Cas9
      </text>
      <text x="340" y="300" className="fill-white text-2xl font-light">
        2D hiPSCs culture
      </text>
      <text x="160" y="360" className="fill-white text-2xl font-light">
        ARPE-19 cell culture
      </text>
      <text x="600" y="360" className="fill-white text-2xl font-light">
        ELISA
      </text>
    </svg>
  );
};

export default LabSkillsDiagram;
