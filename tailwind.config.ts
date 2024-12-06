import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: "var(--font-urbanist)",
        oswald: "var(--font-oswald)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        foody: {
          black: { "10": "#333" },
          white: { "10": "#ffffff" },
          purple: { "10": "#7628a7" },
          orange: { "10": "#fd7d1a" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
