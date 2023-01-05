/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      "blue-500": "#1a4266",
      "blue-600": "#183a59",
      "blue-700": "#0f3258",
    },
    extend: {
      gridTemplateColumns: {
        "layout-xl": "400px 100%",
        "layout-lg": "300px 100%",
        "layout-md": "200px 100%",
        "layout-sm": "0px 100%",
      },
    },
  },
  plugins: [],
};
