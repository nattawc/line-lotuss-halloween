module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        green: { 900: "#090538" },
        blue: {
          500: "#00bcb4",
          700: "#00bcb4",
          800: "#00bcb4",
          900: "#00dcd3",
        },
        yellow: {
          200: "#f9f3e8",
          300: "#eae4d5",
          500: "#c2b99e",
          700: "#fff0c5",
          800: "#f8c32c",
          900: "#cb9b00",
        },
        pink: {
          500: "#EC008C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
