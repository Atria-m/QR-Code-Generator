/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      mobile: "360px",
      desktop: "1000px",
    },
  },
  plugins: [],
};
