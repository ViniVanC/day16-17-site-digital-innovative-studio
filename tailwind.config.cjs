/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#212721",
        greyGreen: "#4A524A",
        yellow: "#FFEA00",
        white: "#D6D1CA",
        grey: "rgba(214, 209, 202, 0.7)",
      },
      fontFamily: {
        PlayFair: ["Playfair Display", "serif"],
        SourceSans: ["Source Sans 3", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
