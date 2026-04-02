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
        wisteria: "#758ECD",
        periwinkle: "#C1CEFE",
        "pearl-beige": "#EFDBBD",
        "deep-navy": "#415A96",
        "off-white": "#F5F5F7",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      borderColor: {
        blueprint: "rgba(65, 90, 150, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
