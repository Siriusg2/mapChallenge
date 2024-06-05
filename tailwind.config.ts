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
          400: '',
          800: ''
        },
        secondary: {
          DEFAULT: '',
          400: '',
          800: ''
        },
        background: '#1b2330',
        foreground: '#e6f0f3'
      }
    },
  },
  plugins: [],
};
export default config;
