/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ['Barlow Condensed', 'sans-serif'],
        "monts": ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

