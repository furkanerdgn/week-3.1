/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blop: "blop 6s infinite",
      },
      keyframes: {
        blop: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "scale(1.1) translate(30px,-50px)",
          },
          "66%": {
            transform: "scale(0.9) translate(-20px,20px)",
          },
          "100%": {
            transform: "scale(1) translate(0px,0px)",
          },
        },
      },
    },
    plugins: [],
  },
};
