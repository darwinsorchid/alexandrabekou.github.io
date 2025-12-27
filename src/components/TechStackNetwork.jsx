import React, { useRef, useState, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";

const graphData = {
  nodes: [
    { id: "Python", group: "ML" },
    { id: "scikit-learn", group: "ML" },
    { id: "TensorFlow", group: "ML" },
    { id: "NumPy", group: "ML" },
    { id: "pandas", group: "ML" },
    { id: "Git", group: "ML" },
    { id: "VSCode", group: "ML" },
    { id: "neat-python", group: "ML" },

    { id: "React", group: "Frontend" },
    { id: "TailwindCSS", group: "Frontend" },
    { id: "Figma", group: "Frontend" },

    { id: "R", group: "Bioinformatics" },
    { id: "Quarto", group: "Bioinformatics" },
    { id: "Biopython", group: "Bioinformatics" },
    { id: "NetworkX", group: "Bioinformatics" },
    { id: "PyViz", group: "Bioinformatics" },
  ],
  links: [
    { source: "Python", target: "Git" },
    { source: "scikit-learn", target: "Python" },
    { source: "Python", target: "NetworkX" },
    { source: "Python", target: "neat-python" },
    { source: "TensorFlow", target: "neat-python" },
    { source: "PyViz", target: "NetworkX" },
    { source: "Python", target: "PyViz" },
    { source: "TensorFlow", target: "Python" },
    { source: "TensorFlow", target: "scikit-learn" },
    { source: "Python", target: "NumPy" },
    { source: "pandas", target: "NumPy" },
    { source: "pandas", target: "scikit-learn" },
    { source: "pandas", target: "TensorFlow" },
    { source: "Python", target: "pandas" },
    { source: "Python", target: "VSCode" },
    { source: "React", target: "VSCode" },
    { source: "Biopython", target: "Python" },
    { source: "React", target: "TailwindCSS" },
    { source: "React", target: "Git" },
    { source: "Figma", target: "React" },
    { source: "R", target: "Git" },
    { source: "R", target: "Python" },
    { source: "R", target: "Quarto" },
    { source: "Python", target: "React" },
  ],
};

const TechStackNetwork = () => {
  const fgRef = useRef();
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("charge").strength(-150);
      fgRef.current.d3Force("link").distance(30);
    }
  }, []);

  const handleNodeHover = (node) => {
    setHoveredNode(node?.id || null);
    if (fgRef.current) {
      // Apply hover-deter forces: increase repulsive charge strength on hover to "deter" (repel) nodes more strongly
      fgRef.current.d3Force("charge").strength(node ? -200 : -120);
      // Restart simulation to apply the force change
      fgRef.current.d3ReheatSimulation();
    }
  };

  return (
    <div className="w-full h-full">
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeLabel={(node) => node.id}
        nodeColor={(node) =>
          hoveredNode === node.id ? "#ffffff" : "rgba(240, 240, 240, 0.8)"
        }
        nodeVal={(node) => (hoveredNode === node.id ? 2 : 1)}
        nodeRelSize={8}
        linkColor={() => "rgba(255,255,255,0.3)"}
        linkWidth={1.5}
        onNodeHover={handleNodeHover}
        enableNodeDrag={false}
        enableZoomPan={true}
        minZoom={1} // Disable zooming in/out with scroll by setting min and max zoom to 1
        maxZoom={1}
        backgroundColor="transparent"
        cooldownTicks={150}
      />
    </div>
  );
};

export default TechStackNetwork;
