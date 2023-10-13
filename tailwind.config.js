/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'HomeBg':'#FFCC01',
        'HomeFontPrimary':'#000101',
        'HomeFontSecondary':'#FC6503',
        'CardapioBg':'#F8F8F8',
      }
    },
  },
  plugins: [],
}

