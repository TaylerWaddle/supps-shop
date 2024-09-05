/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.2rem",
      "6xl": "5rem",
      "7xl": "6rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
      "12xl": "12rem",
      "14xl": "14rem",
    },
    fontFamily: {
      zain: ["Zain"],
      mont: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
};
