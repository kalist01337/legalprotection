import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      colors: {
        ink: "#0b0b0b",
        graphite: "#141414",
        gold: "#b89a62",
        goldSoft: "#d2c09d",
        ivory: "#f6f2e8",
      },
      boxShadow: {
        premium: "0 14px 40px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, rgba(184,154,98,0) 0%, rgba(184,154,98,0.55) 50%, rgba(184,154,98,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
