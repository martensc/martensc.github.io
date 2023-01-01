/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/html.js",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        // sm: '768px',
        // md: '1024px',
        lg: '1280px',
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
