/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        sage: {
          50: "#FBFDFA",
          100: "#F4F8F1",
          200: "#D5E6CF",
          300: "#A9C69D",
          400: "#8DAE7D",
          500: "#759B62",
          600: "#5F8151",
          700: "#4D6841",
          800: "#3D5233",
          900: "#304128",
        },
        lavender: {
          50: "#FDFBFF",
          100: "#F7F4FF",
          200: "#E4DEFF",
          300: "#C9C2FF",
          400: "#AD9BFF",
          500: "#9480FF",
          600: "#7A64FF",
          700: "#644BFF",
          800: "#5035E0",
          900: "#4029C0",
        },
        peach: {
          50: "#FFFBF9",
          100: "#FFF4ED",
          200: "#FFD9C2",
          300: "#FFB899",
          400: "#FF946E",
          500: "#FF7043",
          600: "#E05A31",
          700: "#BF4724",
          800: "#A1391C",
          900: "#852F15",
        },
      },
    },
  },
  plugins: [],
};
