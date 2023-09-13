/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themegold: "#efda7a",
        themesub: "#38bdf8",
      },
    },
  },
  plugins: [],
};
