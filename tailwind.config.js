/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "sans": ['"Playfair Display Variable"', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      gridTemplateColumns: {
        "blog-column": '3fr 1fr',
      },
    },
  },
  plugins: [],
}

