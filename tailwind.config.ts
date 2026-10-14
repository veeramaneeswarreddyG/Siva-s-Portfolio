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
        soil: {
          900: "#140F0A",
          800: "#1F1812",
          700: "#2B221B",
          600: "#3D3126",
          500: "#5A493B",
          400: "#7E6A58",
        },
        forest: {
          950: "#0C1611",
          900: "#101F18",
          800: "#182A22",
          700: "#243A30",
          600: "#324E42",
          500: "#446456",
          400: "#5B8070",
        },
        charcoal: {
          950: "#111110",
          900: "#1A1A18",
          800: "#252522",
          700: "#33332E",
          600: "#474742",
          500: "#63635C",
        },
        midnight: {
          950: "#090E16",
          900: "#0E141D",
          800: "#141C28",
          700: "#202B3B",
          600: "#2E3C50",
          500: "#41546E",
        },
        gold: {
          300: "#F0DA9B",
          400: "#E5C378",
          500: "#C19A55",
          600: "#A37B34",
          700: "#7D5C22",
          800: "#573F14",
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
        serif: ["var(--font-cinzel)", "var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        telugu: ["var(--font-noto-telugu)", "var(--font-plus-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "vignette-radial": "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.85) 100%)",
        "parchment-radial": "radial-gradient(circle at 50% 30%, rgba(243, 235, 221, 0.08) 0%, transparent 70%)",
        "gold-shimmer": "linear-gradient(110deg, transparent 20%, rgba(193, 154, 85, 0.15) 50%, transparent 80%)",
      },
    },
  },
  plugins: [],
};

export default config;
