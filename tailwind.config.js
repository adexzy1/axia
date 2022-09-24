/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          light: '#FEE0E1',
        },
        blue: {
          DEFAULT: '#0507D4',
          dark: '#040680',
          light: '#A2AAEB ',
          lighter: 'rgba(5, 7, 212,0.1)',
        },
        gray: {
          DEFAULT: 'rgb(237, 237, 237)',
          dark: '#979797',
        },
        black: {
          DEFAULT: '#29282F',
        },
        rgba: 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },

      boxShadow: {
        DEFAULT: '0px 4px 8px 0px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
