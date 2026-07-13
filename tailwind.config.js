/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'serif'],
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translate3d(0,0,0)',
          },
          to: {
            transform: 'translate3d(-50%,0,0)',
          },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
