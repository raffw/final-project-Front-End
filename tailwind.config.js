/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hijau" : '#00897B', 
        "hijau-muda" : '#44C2AC',
        "grey" : '#D9D9D9', 
        "stroke" : '#DBEEEC',
        "abu" : '#A5A5A5',
        darkGreen: '#00897B',
        midGreen: '#44C2AC',
  }
    },
  },
  plugins: [],
};
