/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      "blue-100": "#ecf0f3",
      "blue-500": "#1a4266",
      "blue-600": "#10385c",
      "blue-700": "#0f3258",
      "gray-100": "#f5f5f5",
      "gray-200": "#e5e5e5",
      "gray-300": "#d4d4d4",
      "gray-400": "#a3a3a3",
      "gray-500": "#737373",
      "gray-600": "#525252",
    },
    extend: {
      gridTemplateColumns: {
        "layout-xl": "400px 100%",
        "layout-lg": "300px 100%",
        "layout-md": "200px 100%",
        "layout-sm": "0px 100%",
      },
      animation: {
        enter: "enter 1s ease-in-out",
      },
      keyframes: {
        enter: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
