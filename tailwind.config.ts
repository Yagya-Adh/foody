import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1905px",
        "screen-4xl": "28080px",
      },
      fontSize: {
        big: "172px",
      },
      backgroundImage: {
        foodyBackground: "url('/assets/background.svg')",
      },
      fontFamily: {
        urbanist: "var(--font-urbanist)",
        oswald: "var(--font-oswald)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        foody: {
          transparent: { 10: "#ddd" },
          black: { 10: "#333" },
          white: { 10: "#ffffff" },
          purple: { 10: "#7628a7" },
          orange: { 10: "#fd7d1a" },
          green: { 10: "#f9fbf2" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
