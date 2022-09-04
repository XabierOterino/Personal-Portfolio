/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors:{
      "body":"#111827",
      "secondary" : "#f8fafc",
      "theme" : "#b91c1c"
    },
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins: [],
}
