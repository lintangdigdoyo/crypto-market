const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,assets}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a68f4",
        "primary-light": "#edf4fe",
        success: "#25a764",
        error: "#e54040",
        black: "#0b0a0a",
        gray: "#929396",
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        "pulse-red": "pulse-red 2s linear",
        "pulse-green": "pulse-green 2s linear",
      },
      keyframes: {
        "pulse-red": {
          "0%": { color: "#e54040" },
          "100%": { color: "#0b0a0a" },
        },
        "pulse-green": {
          "0%": { color: "#25a764" },
          "100%": { color: "#0b0a0a" },
        },
      },
    },
  },
  plugins: [],
};
