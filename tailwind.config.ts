import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary : {
          100 : "#4801ff",
          200 : "#000"
        }
      },
      fontFamily: {
        "freeman" : ["Freeman", "sans-serif"]
      },
      fontSize: {
        "7xl" : "5rem",
        "8xl" : "6rem",
        "9xl" : "7rem",
        "10xl" : "8rem",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
  ],
};
export default config;
