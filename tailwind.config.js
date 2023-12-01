const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pumpkin: {
          50: "#fff4ed",
          100: "#ffe6d5",
          200: "#feccaa",
          300: "#fdac74",
          400: "#fb8a3c",
          500: "#f97316",
          600: "#ea670c",
          700: "#c2570c",
          800: "#9a4a12",
          900: "#7c3d12",
          950: "#432007",
        },
      },
    },
  },
  plugins: [nextui()],
};
