/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#4c00b0",
				background: "#220d3e",
			},
		},
	},
	plugins: [],
};
