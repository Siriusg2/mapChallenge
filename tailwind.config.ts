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
        primary: {
          DEFAULT: '#1dbd8d',
          800: '',
          400: ''
        },
        secondary: {
          DEFAULT: '#1c819c',
          800: '#ffed49',
          400: ''
        },
        background: '#1b2330',
        foreground: '#D4DEE0'
      }
    },
    screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "430px" },
		},
  },
  plugins: [],
};
export default config;
