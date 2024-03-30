import animate from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				cascadia: ["Cascadia Code", "sans-serif"]
			},
			textColor: {
				"secondaryGreen": "#b9fd4b",
			}
		},
	},
	plugins: [animate,
		function ({
			addVariant
		}) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		}],
}
