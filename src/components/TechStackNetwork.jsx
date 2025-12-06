import React, { useRef, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";

const graphData = {
  nodes: [
    { id: "Python", label: "Python", group: "ML" },
    { id: "scikit-learn", label: "scikit-learn", group: "ML" },
    { id: "Git", label: "Git", group: "ML" },
    { id: "React", label: "React", group: "Frontend" },
    { id: "TailwindCSS", label: "Tailwind CSS", group: "Frontend" },
    { id: "Figma", label: "Figma", group: "Frontend" },
    { id: "R", label: "R", group: "Bioinformatics" },
    { id: "Biopython", label: "Biopython", group: "Bioinformatics" },
  ],
  links: [
    { source: "Python", target: "Git" },
    { source: "scikit-learn", target: "Python" },
    { source: "Biopython", target: "Python" },
    { source: "React", target: "TailwindCSS" },
    { source: "React", target: "Git" },
    { source: "Figma", target: "React" },
    { source: "R", target: "Git" },
  ],
};

const TechStackNetwork = () => {
  const fgRef = useRef();
  const [hoveredNode, setHoveredNode] = useState(null);

  // Magnetic effect: Attract hovered node towards mouse
  const handleNodeHover = (node, prevNode) => {
    setHoveredNode(node ? node.id : null);

    if (node) {
      // Scale up on hover
      node.__threeObj.scale.set(1.5, 1.5, 1.5);
      // Add magnetic force: Simulate attraction by adjusting position
      const graph = fgRef.current;
      const mousePos = graph.controls().getMousePosition(); // Get mouse position
      if (mousePos) {
        // Custom force to pull node towards mouse (simplified)
        const forceStrength = 0.01;
        node.vx += (mousePos.x - node.x) * forceStrength;
        node.vy += (mousePos.y - node.y) * forceStrength;
        node.vz += (mousePos.z - node.z) * forceStrength;
      }
    } else if (prevNode) {
      // Reset scale on hover out
      prevNode.__threeObj.scale.set(1, 1, 1);
    }
  };

  return (
    <div className="w-full h-96 bg-gray-900 rounded-lg shadow-lg">
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="label" // Labels on hover
        nodeColor={(node) => (hoveredNode === node.id ? "#ff6b6b" : "white")} // Red on hover
        nodeRelSize={6}
        linkColor={() => "white"}
        linkWidth={2}
        onNodeHover={handleNodeHover}
        enableNodeDrag={false} // Disable dragging to focus on magnetic hover
        enableNavigationControls={false} // Disable orbit/zoom to prevent scroll interference
        cooldownTicks={100}
      />
    </div>
  );
};

export default TechStackNetwork;
