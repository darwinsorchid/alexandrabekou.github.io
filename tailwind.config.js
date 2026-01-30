/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui"],
        mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
