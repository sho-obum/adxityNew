import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibrand: ["Ibrand", "sans-serif"],
      },
      container: {
        padding: "1rem",
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
