/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        m: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px"
      },
      colors: {
        primary: "#8A74F9",
        secondary: "#E7EAED",
        text: "#1C1C28",
        primaryHover: "#F5F5F5"
      },
      fontFamily: {
        arabic: ['Neo Sans Arabic', 'sans-serif'],
        english: [ "Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}

