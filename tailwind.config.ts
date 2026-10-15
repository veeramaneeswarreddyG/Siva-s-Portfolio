import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFEFC",
          100: "#FDFBF7",
          200: "#FAF5EB",
          300: "#F3EBDD",
          400: "#E8DEC9",
          500: "#D6C7AD",
        },
        amberGold: {
          400: "#F5A623",
          500: "#E88913",
          600: "#D47806",
          700: "#B86202",
        },
        charcoal: {
          950: "#0F0F0E",
          900: "#181816",
          800: "#22211E",
          700: "#33312C",
          600: "#4D4A43",
          500: "#6B675E",
          400: "#8C877D",
        },
        soil: {
          900: "#140F0A",
          800: "#1F1812",
          700: "#2B221B",
          600: "#3D3126",
          500: "#5A493B",
        },
        gold: {
          300: "#F0DA9B",
          400: "#E5C378",
          500: "#C19A55",
          600: "#A37B34",
          700: "#7D5C22",
        },
        ivory: {
          50: "#FCFAF6",
          100: "#FAF6EE",
          200: "#F3EBDD",
          300: "#E5DCCB",
          400: "#CEBFAB",
          500: "#B4A38D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        telugu: ["var(--font-telugu-body)", "var(--font-noto-telugu)", "sans-serif"],
        "telugu-heading": ["var(--font-telugu-heading)", "var(--font-noto-telugu)", "serif"],
        "telugu-body": ["var(--font-telugu-body)", "var(--font-noto-telugu)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 5s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "orb-1": "orbOne 24s ease-in-out infinite alternate",
        "orb-2": "orbTwo 28s ease-in-out infinite alternate",
        "orb-3": "orbThree 22s ease-in-out infinite alternate",
        "pulse-glow": "pulseGlow 14s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translate3d(0%, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        orbOne: {
          "0%": { transform: "translate3d(0px, 0px, 0) scale(1)" },
          "50%": { transform: "translate3d(80px, 60px, 0) scale(1.12)" },
          "100%": { transform: "translate3d(-50px, 110px, 0) scale(0.95)" },
        },
        orbTwo: {
          "0%": { transform: "translate3d(0px, 0px, 0) scale(1)" },
          "50%": { transform: "translate3d(-100px, -80px, 0) scale(1.15)" },
          "100%": { transform: "translate3d(60px, -40px, 0) scale(0.92)" },
        },
        orbThree: {
          "0%": { transform: "translate3d(0px, 0px, 0) scale(1)" },
          "50%": { transform: "translate3d(70px, -90px, 0) scale(1.08)" },
          "100%": { transform: "translate3d(-40px, -50px, 0) scale(0.96)" },
        },
        pulseGlow: {
          "0%": { opacity: "0.6", transform: "translate3d(-50%, -50%, 0) scale(0.95)" },
          "100%": { opacity: "1", transform: "translate3d(-50%, -50%, 0) scale(1.08)" },
        },
      },
      backgroundImage: {
        "sunburst-radial": "radial-gradient(circle at 50% 60%, rgba(232, 137, 19, 0.18) 0%, rgba(250, 245, 235, 0) 70%)",
        "card-shimmer": "linear-gradient(120deg, transparent 20%, rgba(232, 137, 19, 0.08) 50%, transparent 80%)",
      },
    },
  },
  plugins: [],
};

export default config;
