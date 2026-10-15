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
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
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
