/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[theme-mode="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"'],
      },
    },
  },
  plugins: [],
}
