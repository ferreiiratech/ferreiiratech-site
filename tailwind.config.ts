import type { Config } from "tailwindcss"
import type { PluginAPI } from "tailwindcss/types/config"

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 9s linear infinite reverse",
        "scroll-left": "scroll-left-keyframe 40s linear infinite",
      },
      keyframes: {
        "scroll-left-keyframe": {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      screens: {
        xxxs: "320px",
        xxs: "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space-Grotesk", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)", // #EFEFEF (Branco)
        secondary: "var(--color-secondary)", // #06080A (Preto Suave)
        highlight: "var(--color-highlight)", // #9956F6 (Roxo Destaque)

        /* Tons de Cinza */
        gray: {
          100: "var(--gray-100)", // #BEBFC0 (Cinza Claro)
          200: "var(--gray-200)", // #A8A8A9 (Cinza Médio)
          300: "var(--gray-300)", // #899099 (30%)
          400: "var(--gray-400)", // #899099 (40%)
          500: "var(--gray-500)", // #899099 (50%)
          600: "var(--gray-600)", // #44443F (Cinza Muito Escuro)
        },

        /* Tons de Preto */
        black: {
          100: "var(--black-100)", // #121415 (Preto Puro)
          200: "var(--black-200)", // #12161B (Preto Variado)
          300: "var(--black-300)", // #06080A (Preto Suave)
          opacity: {
            90: "var(--black-opacity-90)", // Preto com Opacidade 80%
            80: "var(--black-opacity-80)", // Preto com Opacidade 80%
            40: "var(--black-opacity-40)", // Preto com Opacidade 60%
          },
        },

        /* Tons de Roxo */
        purple: {
          100: "var(--purple-100)", // #BC94F4 (Roxo Claro)
          150: "var(--purple-150)", // #9956F6 (Roxo Destaque 80%)
          200: "var(--purple-200)", // #9956F6 (Roxo Destaque 100%)
          300: "var(--purple-300)", // #594D6C (Roxo Escuro 10%)
        },
      },
    },
  },
  plugins: [
    (pluginApi: PluginAPI) => {
      pluginApi.addComponents({
        ".border-hover-highlight": {
          "@apply hover:border-[#899099]/40 transition-colors duration-300 ease-in-out": {},
        },
      })
    },
  ],
} satisfies Config
