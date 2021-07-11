const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Mulish': ['Mulish', 'serif'] 
      },
      colors:{
        cyanP:{
          500: '#06B6D4',
          700: '#0E7490',
          100: '#CFFAFE',
          200: '#A5F3FC',
        },
        skyP:{
          600: '#0284C7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
