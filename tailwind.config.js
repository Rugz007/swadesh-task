module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/3":"33%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    fontFamily: {
      custom: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
