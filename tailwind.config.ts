import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      base: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        headline: '96px',
        bigTitle: '64px',
        title: '36px',
        subtitle: '30px',
        body: '20px',
        small: '16px'
      },
      boxShadow: {
        blur: '0 0px 40px 3px #082BAA'
      },
      textShadow: {
        'cyan-line': '10px 3px 38px rgba(14, 165, 233, 0.8)',
      },
      colors: {
        base: {
          DEFAULT: '#FFFFFF'
        },
        warning:{
          DEFAULT: '#FFC888',
          dark: '#8A4B01'
        },
        gray: {
          DEFAULT: '#202020',
          opaque: '#252525',
          light: '#2E2E2E',
          super: '#585353',
          placeholder: '#434343'
        },
        green: {
          DEFAULT: '#16B166',
          light: '#0FDA78'
        },
        blue: {
          light: '#9FD1FF'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
