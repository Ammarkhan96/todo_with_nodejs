//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
       mono: ['Source Code Pro','ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
    extend: {
      colors: {
        'accent': '#5db9fc',
        'bg': '#051929',
        'card': '#092942',
        'manlyFont': '#E6DAC7',
      },
    },
  },
  plugins: [],
}