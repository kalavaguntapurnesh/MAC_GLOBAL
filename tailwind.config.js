/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        // slidein500: "slidein 1s ease 500ms forwards",
        // slidein700: "slidein 1s ease 700ms forwards",
      },
      container: {},
      colors: {
        companyColor: "#ffc020",
        primaryColor: "#1a2b6d",
        footer: "#1d202c",
        inputColor: "#F8F8F8",
        bodyColor: "#e2e8f0",
        footerLinks: "#0b3052",
        scrollToTop: "#e7473c",
        trackColor: "#002147",
        colorOne: "#06adef",
        colorTwo: "#0b3052",
        colorThree: "#0b3052",
        colorFour: "#ff3259",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 50s infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: { transform: "translateX(-200%)" },
        },
      },
      // fontFamily:{
      //   sans:['Inter', ...defaultTheme.fontFamily.sans]
      // },
    },
  },
  plugins: [],
};
