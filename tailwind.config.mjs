/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite'
      }
    },
	},
	plugins: [],
}
