/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: '300px'
      },
      colors: {
        'newsletter-dark-slate-grey': '#ff0000',
        'newsletter-charcoal-grey': '#36384e',
        'newsletter-grey': '#9294a0',
        'newsletter-white': '#ffffff',
        'newsletter-tomato': '#ff6257'
      },
    },
  },
  plugins: [],
}

