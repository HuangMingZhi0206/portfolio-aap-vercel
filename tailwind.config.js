/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel Pink Theme
        pink: {
          50: '#fef7f7',
          100: '#fdeef0',
          200: '#fbd5dc',
          300: '#f8b4c2',
          400: '#f48aa3',
          500: '#ec6085',
          600: '#d93d66',
          700: '#b62d52',
          800: '#972848',
          900: '#7e2541',
        },
        peach: {
          100: '#fff5f0',
          200: '#ffe8dc',
          300: '#ffd4bf',
          400: '#ffb899',
          500: '#ff9a70',
        },
        lavender: {
          100: '#f8f5ff',
          200: '#ede5ff',
          300: '#ddd0ff',
          400: '#c4b0f4',
          500: '#a890e0',
        },
        mint: {
          100: '#f0fdf9',
          200: '#d9faf0',
          300: '#b5f2e0',
          400: '#85e5c9',
          500: '#56d4ae',
        },
        cream: {
          50: '#fffbf7',
          100: '#fff5ed',
          200: '#ffedd9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
