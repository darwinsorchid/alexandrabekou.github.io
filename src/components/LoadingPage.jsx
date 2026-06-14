import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // show for 1 second

    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="fixed inset-0 bg-[#0d061ce5] flex md:text-2xl items-center justify-center z-[9999]">
      <h1 className="text-white font-mono">L o a d i n g ...</h1>
    </div>
  );
}
