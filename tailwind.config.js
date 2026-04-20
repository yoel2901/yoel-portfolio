/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // <--- C'est cette ligne qui débloque tout !
  theme: {
    extend: {},
  },
  plugins: [],
}