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
        primary_color: "#3a3768",
        secondary_color: "#e1dfff",
        tertiary_color: "#5e5b83",
      },
    },
  },
  plugins: [],
};
export default config;
