import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#252e46",
        "ink-deep": "#161d31",
        gold: "#be9e5a",
        "gold-soft": "#ead9ad",
        cream: "#f8f2db",
        porcelain: "#fdfcfc",
        silver: "#b4b6be",
        smoke: "#575b69"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "ui-serif", "serif"],
        sans: ["Avenir Next", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 6px rgb(190 158 90 / 16%), 0 24px 80px rgb(22 29 49 / 22%)",
        card: "0 24px 70px rgb(22 29 49 / 14%)"
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at 12% 10%, rgb(190 158 90 / 26%), transparent 28rem), radial-gradient(circle at 88% 20%, rgb(180 182 190 / 20%), transparent 30rem), linear-gradient(135deg, #161d31, #252e46 48%, #121829)"
      }
    }
  },
  plugins: []
};

export default config;
