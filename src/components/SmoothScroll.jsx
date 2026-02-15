import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.06, // Lower for snappier, more "magnetic" feel (adjust 0.03-0.08)
        duration: 1.0, // Smooth duration (lower for faster)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing for natural feel
        smoothWheel: true, // Keeps wheel smooth
        smoothTouch: false, // Disable touch smoothing to avoid mobile conflicts (enable if needed)
        wheelMultiplier: 1, // Wheel sensitivity
        touchMultiplier: 2, // Touch sensitivity (if smoothTouch is true)
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
