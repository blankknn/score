/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff8d07',
        lighter:'#ffff',
        primaryGreen:'#8fbc8f',
        primaryGray:'#EFEFF0',
        surface:'#212c47'

        
      },
      width:{
        w18 : '72px'
      }
    },
  },
  plugins: [],
}