/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "#fa7268",
        "very-light-pink": "#fff3f2",
        salmon: "#fa8d68",
        "light-yellowish-green": "#dbff90",
        "light-background": "#f8f9fd",
        dark: "#2a2d3b",
        "blue-grey": "#9198af",
        "light-blue-grey": "#e1e1e1",
      },
    },
  },
  plugins: [],
};
