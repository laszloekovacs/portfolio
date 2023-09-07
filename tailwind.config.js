/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#6FCF97',
        'theme-secondary': '#219653',
        'theme-light': '#F2F2F2',
        'theme-dark': '#333333',
        'theme-bg': '#AAAAAA',
        'theme-hover': '#4F4F4F',
      },
    },
  },
  plugins: [],
}
