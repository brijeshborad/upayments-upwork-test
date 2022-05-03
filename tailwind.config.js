const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto-Regular', 'sans-serif'],
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#413EF0',
      mainbg: '#FBFCFE',
      primary10: '#E3E2FD',
      blue: '#43AFF0',
      orange: '#F07743',
      placeholder: '#DFDEFF'
    },
  },
  plugins: [],
}
