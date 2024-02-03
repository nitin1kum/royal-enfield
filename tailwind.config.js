/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hover: "#d1291c",
        "fb-background": "#183392",
        "gg-background": "#cf5252",
        "nav-bg": "#0a0a0a",
        "footer-bg": "#e5e3e3"
      },
    },
  },
  plugins: [],
};
