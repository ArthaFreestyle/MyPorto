import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        apple: {
          bg: "#f5f5f7",
          card: "#ffffff",
          text: "#1d1d1f",
          secondary: "#86868b",
          tertiary: "#a1a1a6",
          blue: "#0071e3",
          green: "#34c759",
          border: "#e8e8ed",
        },
      },
      borderRadius: {
        apple: "20px",
        "apple-sm": "12px",
      },
      boxShadow: {
        apple: "0 2px 12px rgba(0, 0, 0, 0.06)",
        "apple-hover": "0 4px 24px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
