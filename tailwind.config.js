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
        InterRegular: ["Inter-Regular"],
        InterLight: ["Inter-Light"],
        InterSemiBold: ["Inter-SemiBold"],
        PoppinsRegular: ["Poppins-Regular"],
        SpaceMonoRegular: ["SpaceMono-Regular"],
        SpaceMonoBold: ["SpaceMono-Bold"],
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
        'card-home': '#f4ebf01c'
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

