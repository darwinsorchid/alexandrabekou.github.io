import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // When window fully loads, hide the loading screen
    const handleLoad = () => setLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Don't render if loaded
  if (loaded) return null;

  return (
    <div className="fixed inset-0 bg-[#0e0617] flex items-center justify-center z-[9999] transition-opacity duration-500">
      {/* <img
        src="src/assets/logos/cv-logo.png"
        className="w-14 h-14 animate-pulse"
      /> */}
      <h1 className="text-white font-2xl">[Loading ...]</h1>
    </div>
  );
}
