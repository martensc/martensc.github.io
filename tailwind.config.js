/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/html.js",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '728px',
        md: '984px',
        ld: '1200px',
      },
    },
    fontWeight: {
      light: 350,
      normal: 400,
      bold: 750,
    },
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', 'cursive'],
      },
    },
  },
  plugins: [],
}
