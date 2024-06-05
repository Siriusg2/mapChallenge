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
          DEFAULT: '#01c2f4',
          400: '#ffed49',
          800: ''
        },
        background: '#1b2330',
        foreground: '#D4DEE0'
      }
    },
  },
  plugins: [],
};
export default config;
