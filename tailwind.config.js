/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        other: { min: "250px", max: "750px" },
      },
    },
  },
  plugins: [],
};
