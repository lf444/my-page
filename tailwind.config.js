/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#86BBD8",
        primary: "#86BBD8",
        secondary: "white",
        tertiary: "black",
      },
    },
  },
  plugins: [],
};
