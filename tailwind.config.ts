import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",

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
						80: "var(--black-opacity-80)", // Preto com Opacidade 80%
						60: "var(--black-opacity-60)", // Preto com Opacidade 60%
					},
				},

				/* Tons de Roxo */
				purple: {
					100: "var(--purple-100)", // #BC94F4 (Roxo Claro)
					200: "var(--purple-200)", // #9956F6 (Roxo Destaque 100%)
					300: "var(--purple-300)", // #594D6C (Roxo Escuro 10%)
					400: "var(--purple-400)", // #9956F6 (Roxo Destaque 60%)
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
