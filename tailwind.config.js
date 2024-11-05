module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        customGreen: "hsl(159, 69%, 38%)",
        customRed: "hsl(14, 86%, 42%)",
        lightest: "hsl(20, 50%, 98%)",
        lighter: "hsl(13, 31%, 94%)",
        light: "hsl(14, 25%, 72%)",
        medium: "hsl(7, 20%, 60%)",
        dark: "hsl(12, 20%, 44%)",
        darkest: "hsl(14, 65%, 9%)",
      },
      fontFamily: {
        redHat: ['"Red Hat Text"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
