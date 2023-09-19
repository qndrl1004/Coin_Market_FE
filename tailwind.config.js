/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        themegold: "#efda7a",
        themesub: "#38bdf8",
      },
      screens: {
        xlg: "1400px",
        lg: "1000px",
        md: "768px",
        sm: "415px",
      },
    },
  },
  plugins: [],
};
