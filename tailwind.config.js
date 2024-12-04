/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Main blue color
        dark: "#1E293B", // Dark sidebar color
        light: "#F1F5F9", // Light color for text
        accent: "#818CF8", // Secondary accent
      },
    },
  },
  plugins: [],
};
