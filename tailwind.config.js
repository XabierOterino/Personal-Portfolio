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
      "theme" : "#b91c1c",
      "black" :"black"
    },
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      "baby" : ["Oooh Baby" , "sans-serif"]
      
    },
    extend: {},
  },
  plugins: [],
}
