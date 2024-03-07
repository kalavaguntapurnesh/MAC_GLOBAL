import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {},
      colors: {
        companyColor: "#ffc020",
        primaryColor: "#1a2b6d",
        footer: "#1d202c",
        inputColor: "#F8F8F8",
        bodyColor: "#e2e8f0",
        footerLinks: "#a6aab6",
        scrollToTop: "#e7473c",
        trackColor: "#002147",
        colorOne: "#C5221F",
        colorTwo: "#070346",
        colorThree: "#0b3052",
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
export default config;
