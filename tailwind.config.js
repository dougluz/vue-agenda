/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "#fa7268",
        "light-yellowish-green": "#dbff90",
        "light-background": "#f8f9fd",
        dark: "#2a2d3b",
      },
    },
  },
  plugins: [],
};
