/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        customlg: "1125px",
      },
      fontFamily: {
        logo: ["Agustina", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#2A9D8F",
        secondary: "#FFFFF0",
        accent: "#E9C46A",
        background: "#FAF3E0",
        text: "#264653",
        button: "#0A100D",
      },
    },
  },
  plugins: [],
};
