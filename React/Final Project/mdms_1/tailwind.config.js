/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // important!
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this matches your file structure
  ],
  theme: {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
}
,
  plugins: [],
}


