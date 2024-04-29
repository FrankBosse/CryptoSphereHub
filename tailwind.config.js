/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    addComponents: {
      // Hide scrollbar for Chrome, Safari, and Opera
      ".container-snap::-webkit-scrollbar": {
        display: "none",
      },
      // Hide scrollbar for IE, Edge, and Firefox
      ".container-snap": {
        "-ms-overflow-style": "none", // IE and Edge
        "scrollbar-width": "none", // Firefox
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
