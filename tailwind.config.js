/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        commissionerBold: ["commissioner-bold"],
        commissionerRegular: ["commissioner-regular"],
      },
      screens: {
        sm: '300px'
      },
      colors: {
        'newsletter-dark-slate-grey': '#ff0000',
        'newsletter-charcoal-grey': '#36384e',
        'newsletter-grey': '#9294a0',
        'newsletter-white': '#ffffff',
        'newsletter-tomato': '#ff6257',
        'moderate-cyan': '#3cb4ac',
        'dark-cyan': '#147b74',
        'dark-gray': '#7a7a7a',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

