/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#039635",
        gray50: "#F5F5F5",
        gray100: "#E3E8E8",
        gray200: "#CCCCCC",
        gray400: "#9DA4AE",
        gray500: "#636D7E",
      },
    },
  },
  plugins: [],
};

