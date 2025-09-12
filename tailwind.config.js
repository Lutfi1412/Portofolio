/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu NSW ACT Foundation"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        sans: ['cursive'],
      },
      
    },
  },
  plugins: [],
}