import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F0F0F0",
      },
      screens: {
        desktop: "1440px",
        mobile: "390px",
      },
      fontFamily : {
        integral: "Integral"
      }
    },
  },
  plugins: [],
};
export default config;
