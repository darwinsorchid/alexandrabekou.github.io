import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "@tsparticles/react",
      "@tsparticles/engine",
      "@tsparticles/preset-big-circles",
    ], // Pre-bundle tsParticles packages for faster loading and to avoid dynamic import issues
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          tsparticles: ["@tsparticles/react", "@tsparticles/engine"], // Separate chunk for tsParticles to prevent bundling conflicts
        },
      },
    },
  },
});
