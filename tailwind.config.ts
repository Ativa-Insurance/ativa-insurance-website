import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        personal: {
          DEFAULT: "#1B3A6B",
          dark:    "#0F2347",
          mid:     "#2451A0",
          light:   "#EEF2FF",
          border:  "#C7D7FD",
          accent:  "#4A90E2",
        },
        commercial: {
          DEFAULT:    "#1A1A1A",
          dark:       "#0A0A0A",
          mid:        "#2C2C2C",
          gold:       "#F5C400",
          "gold-dark":"#D4A800",
          "gold-light":"#FFF9D6",
        },
        // 2027 palette (mirrors the CSS variables in globals.css)
        a27: {
          midnight:   "#002941",
          "midnight-2": "#0A3F5C",
          slate:      "#45626F",
          soft:       "#B6DFED",
          "soft-50":  "#EEF7FA",
          "soft-100": "#DDEFF5",
          muted:      "#8FBFD0",
          orange:     "#FF9900",
          whatsapp:   "#25D366",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        head: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "var(--r)",
      },
      boxShadow: {
        card: "0 2px 12px rgba(27,58,107,0.08)",
        "card-hover": "0 10px 40px rgba(27,58,107,0.15)",
        "card-dark": "0 2px 16px rgba(0,0,0,0.4)",
        "card-dark-hover": "0 12px 48px rgba(0,0,0,0.6)",
        modal: "0 24px 80px rgba(0,0,0,0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
