/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        clifford: '#da373d',
        tranparent: 'transparent',
        white: '#ffffff',
        grey: '#969696',
        blue: '#0EC5D7',
        orange: '#E18700'
      }
    },
  },
  plugins: [],
}
