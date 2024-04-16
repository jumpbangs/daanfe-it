/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        'lightning-yellow': {
          50: '#fff9eb',
          100: '#feefc7',
          200: '#fddd8a',
          300: '#fccb4d',
          400: '#fbbf24',
          500: '#f5b40b',
          600: '#d99e06',
          700: '#b48409',
          800: '#926d0e',
          900: '#785b0f',
          950: '#453303',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
};
