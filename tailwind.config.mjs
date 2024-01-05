/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bgCol: "#FFF5ED",
				text: "#0B0602",
				primary: "#FF8B32",
				secondary: "#D0FD6A"
			},
			fontFamily: {
				sans: ['Poppins', "sans-serif"],
			},
			height: {
				screen: "100svh"
			}
		},
	},
	plugins: [],
}
