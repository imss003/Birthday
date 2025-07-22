/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'rotate-x': {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(-360deg)' },
        },
      },
      animation: {
        'rotate-x': 'rotate-x 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 normal both',
      },
    },
  },
  plugins: [],
}