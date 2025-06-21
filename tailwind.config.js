/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-dynamic': 'calc(var(--vh, 1vh) * 100)',
      },
      colors: {
        'background': '#1a1a1a',
        'text': '#e0e0e0',
        'primary': '#c5a47e',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} 