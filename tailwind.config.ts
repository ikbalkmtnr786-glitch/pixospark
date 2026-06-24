import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#2563EB",
        accent: "#06B6D4",
        highlight: "#F97316",
        surface: "#F8FAFC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB, #06B6D4)",
        "hero-gradient": "linear-gradient(135deg, #0F172A, #1e3a5f, #0F172A)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
        "marquee": "marquee 22s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "badge-pulse": "badgePulse 2s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        badgePulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        brand: "0 8px 32px rgba(37, 99, 235, 0.25)",
        "brand-lg": "0 16px 48px rgba(37, 99, 235, 0.3)",
        glass: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
