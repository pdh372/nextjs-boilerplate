/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // custom according to project
      tiny: '0.5rem',
      small: '0.625rem',
      p: '0.875rem',
      h6: '0.75rem',
      h5: '0.875rem',
      h4: '1rem',
      h3: '1.125rem',
      h2: '1.5rem',
      h1: '2rem',
    },
    extend: {
      colors: {
        purple: {
          5: '#f8f7ff',
          10: '#f2efff',
          20: '#e5dfff',
          40: '#cac0ff',
          60: '#b0a0ff',
          80: '#9581ff',
          100: '#7b61ff',
        },
        blue: {
          5: '#f5fbfd',
          10: '#eaf7fb',
          20: '#d6eff7',
          40: '#84d0e7',
          60: '#84d0e7',
          80: '#5bc0df',
          100: '#31b0d8',
        },
        gray: {
          5: '#fbfbfc',
          10: '#f8f8f9',
          20: '#f1f0f3',
          40: '#e3e1e7',
          60: '#d4d3db',
          80: '#c6c4cf',
          100: '#b8b5c3',
        },
        ['dark-gray']: {
          5: '#f4f4f4',
          10: '#e8e8e9',
          20: '#d2d2d3',
          40: '#a4a4a8',
          60: '#77777c',
          80: '#494951',
          100: '#1c1c25',
        },
        eigengrau: {
          5: '#f4f4f5',
          10: '#e9e9eb',
          20: '#d4d4d6',
          40: '#a9a9ad',
          60: '#7d7d85',
          80: '#52525c',
          100: '#272733',
        },
        black: {
          5: '#fbfbfc',
          10: '#f8f8f9',
          20: '#f1f0f3',
          40: '#e3e1e7',
          60: '#d4d3db',
          80: '#c6c4cf',
          100: '#b8b5c3',
        },
        ['deep-black']: {
          5: '#f3f3f3',
          10: '#e7e7e8',
          20: '#cfcfd0',
          40: '#9f9fa1',
          60: '#707073',
          80: '#404044',
          100: '#101015',
        },
        success: {
          100: '#58dd8f',
        },
        warning: {
          100: '#ffcb4d',
        },
        danger: {
          100: '#ee7c7c',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Display', 'sans-serif'],
      },
      fontWeight: {
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      spacing: {
        ['3.5']: '3.5rem', // 56px
        ['2.5']: '2.5rem', // 40px
        ['2']: '2rem', // 32px
        ['1.5']: '1.5rem', // 24px
        ['1']: '1rem', // 16px
        ['0.75']: '0.75rem', // 12px
        ['0.5']: '0.5rem', // 8px
      },
      height: {
        ['15']: '3.75rem',
      },
    },
  },
  plugins: [],
};
