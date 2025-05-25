/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-grey': '#E1E5E8',
        'base-light-grey': '#F0F0F0',
        'base-blue': '#7BC8FF',
        'base-light-blue': '#CFEBFF',
        'base-dark-blue': '#318AC9',
        'base-gradient-blue': '#242f72',
        'base-gradient-dark-blue': '#0c80b1',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.font-w100': { fontWeight: '100' },
          '.font-w200': { fontWeight: '200' },
          '.font-w300': { fontWeight: '300' },
          '.font-w400': { fontWeight: '400' },
          '.font-w500': { fontWeight: '500' },
          '.font-w600': { fontWeight: '600' },
          '.font-w700': { fontWeight: '700' },
          '.font-w800': { fontWeight: '800' },
          '.font-w900': { fontWeight: '900' },
        },
        ['responsive', 'hover'],
      )
    },
  ],
}
