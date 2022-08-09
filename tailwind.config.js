/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "rgb(1, 192, 244)",
        "dark-blue": "rgb(0, 118, 202)",
      },
    },
  },
  plugins: [],
};
