/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container : {
      center: true,
      screens: {
        lg: '1200px',
        xl: '1200px',
        '2xl' : '1200px'
      },
    },
    // fontSize: {
    //   sp: ['14px', '20px'],
    // },
    extend: {
      colors: {
        'regal-blue': '#4c3398',
        'regal-yellow': '#ffd328'
      },
      backgroundColor: theme => ({
        'brand-color' : '#4c3398',
        'brand-hover-color' : '#6642c2'
      }),
      fontFamily: {
        ubuntu: ['Ubuntu','sans-serif'],
        openSans: ['Open Sans','sans-serif'],
        quiksand: ['Quicksand','sans-serif'],
      }
    },
  },
  plugins: [],
}
