import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				/* main-blue */
				primary: '#08415C',
				/* orange */
				secondary: '#FF8C42',
				/* white-smoke */
				neutral: '#F5F5F5',
			},
		},
	},
	plugins: [],
};
export default config;
