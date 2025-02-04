/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../react-ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    require("../react-ui/tailwind.config.js")
  ]
} 