/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.625rem', '0.875rem']
      },
      animation: {
        'spin-reverse': 'spin 2s linear infinite reverse',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      scale: {
        '200': '2',
        '250': '2.5',
        '300': '3',
        '400': '4',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      green: colors.green,
      blue: colors.blue,
      indigo: {
        DEFAULT: '#0EA5E9',
        50: '#F5FBFE',
        100: '#DBF2FD',
        200: '#A6E0FA',
        300: '#71CDF6',
        400: '#3CBAF3',
        500: '#0EA5E9',
        600: '#0C8DC7',
        700: '#0A75A6',
        800: '#085D84',
        900: '#064662'
      },
      red: colors.red,
      yellow: colors.amber,
      orange: colors.orange,
      rose: colors.rose,
      purple: colors.purple,
      pink: colors.pink
    }
  },
  plugins: [],
}
