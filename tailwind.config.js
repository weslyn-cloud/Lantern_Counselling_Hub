/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        lantern: {
          amber: '#D97706',
          gold: '#B45309',
          sage: '#4B5E4A',
          dark: '#111827',
          cream: '#FDFCF8',
          clay: '#7C2D12',
        }
      }
    },
  },
  plugins: [],
}
