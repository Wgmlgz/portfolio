module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "0px",
      lg: "1300px",
    },
    extend: {
      colors: {
        red: "#ff5555",
        primary: "#bd93f9",
        secondary: "#50fa7b",
        paper: "#44475a",
        textPrimary: "#fff",
        textSecondary: "#181a1f",
      },
    },
    filter: {
      primary: "#bd93f9",
    },
  },
  plugins: [],
};
