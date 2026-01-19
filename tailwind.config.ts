import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Directs Tailwind to your registration/login pages
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding Daniel.inc brand colors
        brandGreen: "#34D399", 
        brutalistGrey: "#f4f4f4",
      },
    },
  },
  plugins: [],
};
export default config;