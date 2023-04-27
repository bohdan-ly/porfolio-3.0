/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'editor-dark': '#1e1e1e',
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-out 0.7s 1 forwards',
      },
      keyframes: {
        'fade-in-hero': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
