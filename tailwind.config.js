module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reflex: {
          50: "#fdfcfa",
          100: "#fbf0ea",
          200: "#f7d1d3",
          300: "#eda4ab",
          400: "#e9747f",
          500: "#db505c",
          600: "#e12826",
          700: "#9b292f",
          800: "#6f1c1f",
          900: "#441211",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
