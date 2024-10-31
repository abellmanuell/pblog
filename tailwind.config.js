/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "sans": ['"Playfair Display Variable"']
    },
    extend: {
      gridTemplateColumns: {
        "blog-column": '3fr 1fr',
      },
    },
  },
  plugins: [],
}

