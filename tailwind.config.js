/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#003da6',
          DEFAULT: '#003da6',
          dark: '#002d7a',
        },
        background: '#ffffff',
      },
      keyframes: {
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(2%, 2%) rotate(1deg)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-2%, -1%) rotate(-1deg)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(1%, -2%) rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        'float-1': 'float-1 20s infinite ease-in-out',
        'float-2': 'float-2 25s infinite ease-in-out',
        'float-3': 'float-3 30s infinite ease-in-out',
        'float': 'float 3s infinite ease-in-out',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};