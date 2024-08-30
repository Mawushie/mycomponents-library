/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: "Inter",
    },
    colors: {
      offwhite: "#F9FAFB",
      mygray: "#6B7280",
      transparent: "transparent",
    },
  },
  plugins: [],
};
