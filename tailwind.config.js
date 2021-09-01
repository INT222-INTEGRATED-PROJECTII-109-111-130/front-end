const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#F4F4F4',
        gray: '#A3A3A3',
        primary: '#2FDBBC',
        primarydark: '#1EAE94',
        secondary: '#F99928',
        dark: '#2D2D2D',
        error: '#F77272'
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
