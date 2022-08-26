/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/src/assets/bg-main-mobile.png')",
        "desktop-bg": "url('/src/assets/bg-main-desktop.png')",
        "card-front": "url('/src/assets/bg-card-front.png')",
        "card-back": "url('/src/assets/bg-card-back.png')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
