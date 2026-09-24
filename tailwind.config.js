/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
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
          600: '#e87c50',
        },
        lavender: {
          100: '#f8f5ff',
          200: '#ede5ff',
          300: '#ddd0ff',
          400: '#c4b0f4',
          500: '#a890e0',
          600: '#8b6fd0',
        },
        mint: {
          100: '#f0fdf9',
          200: '#d9faf0',
          300: '#b5f2e0',
          400: '#85e5c9',
          500: '#56d4ae',
          600: '#34b892',
        },
        cream: {
          50: '#fffaf8',
          100: '#fff5ed',
          200: '#ffedd9',
        },
        // Warm neutrals that sit well next to the pastel palette
        ink: {
          100: '#f2edf0',
          200: '#e3dadf',
          300: '#bfb3ba',
          400: '#9c8d95',
          500: '#7a6a72',
          600: '#5f4f58',
          700: '#4a3a43',
          800: '#3a2a33',
          900: '#2b1d24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(122, 45, 82, 0.15)',
        card: '0 1px 2px rgba(43, 29, 36, 0.04), 0 14px 36px -18px rgba(43, 29, 36, 0.2)',
        glow: '0 20px 50px -20px rgba(236, 96, 133, 0.5)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        blob: 'blob 14s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 45s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
}
