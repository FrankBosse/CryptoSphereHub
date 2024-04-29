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
    // Add custom CSS classes for scrollbar
    addComponents: {
      // Hide scrollbar for Chrome, Safari, and Opera
      ".hide-scrollbar::-webkit-scrollbar": {
        display: "none",
      },
      // Hide scrollbar for Firefox
      ".hide-scrollbar": {
        scrollbarWidth: "none",
      },
      // Hide scrollbar for Internet Explorer and Edge
      ".hide-scrollbar": {
        msOverflowStyle: "none",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
};
