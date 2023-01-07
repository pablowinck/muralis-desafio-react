/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      success: "#6fad48",
      alert: "#ffc003",
      "success-hover": "#00b300",
      "alert-hover": "#ff9900",
      "blue-100": "#ecf0f3",
      "blue-200": "#4473c5",
      "blue-400": "#143c60",
      "blue-500": "#1a4266",
      "blue-600": "#10385c",
      "blue-700": "#0f3258",
      "gray-100": "#f5f5f5",
      "gray-200": "#e5e5e5",
      "gray-300": "#d4d4d4",
      "gray-400": "#a3a3a3",
      "gray-500": "#737373",
      "gray-600": "#525252",
      "red-100": "#f8d7da",
      "red-200": "#f5c2c7",
      "red-300": "#f0a8b0",
      "red-400": "#e88e99",
      "red-500": "#e37482",
      "red-600": "#dc5a6b",
      "red-700": "#d64054",
      "red-800": "#d02b3e",
      "red-900": "#c91a2d",
      "green-100": "#d4edda",
      "green-200": "#c3e6cb",
      "green-300": "#a9dba3",
      "green-400": "#7fc47f",
      "green-500": "#58b957",
      "green-600": "#419d40",
      "green-700": "#2e832e",
      "green-800": "#1d6a1d",
      "green-900": "#0e550e",
    },
    extend: {
      gridTemplateColumns: {
        "layout-xl": "350px 100%",
        "layout-lg": "300px 100%",
        "layout-md": "200px 100%",
        "layout-sm": "0px 100%",
      },
      dropShadow: {
        "3xl": "0 3px 12px rgb(0 0 0 / 0.4)",
      },
      animation: {
        enter: "enter 1s ease-in-out",
        "enter-down": "enter-down 1s ease-in-out",
      },
      keyframes: {
        enter: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "enter-down": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
