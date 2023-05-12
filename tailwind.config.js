/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        qr: "288px",
        card: "320px",
      },
      height: {
        qr: "288px",
        card: "497px",
      },
      borderRadius: {
        card: "20px",
        qr: "10px",
      },

      colors: {
        "bg-blue": "#2C7DFA",
        "shade-blue": "#3685FF",
        grey: "#7D889E",
        "dark-navy":"#1F314F",
        footer:"hsl(228, 45%, 44%)"
      },
      fontFamily:{
        outfit:['Outfit', 'sans-serif']
      },fontSize:{
        heading:["22px","28px"],
        p:["15px","19px"]
      }
    },
  },
  plugins: [],
};
