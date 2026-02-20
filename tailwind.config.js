import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f6fc',
          100: '#d1edf9',
          200: '#a3dbf3',
          300: '#75c9ed',
          400: '#5eb3d6',
          500: '#4a9ac4',
          600: '#3d7fa3',
          700: '#2f6482',
          800: '#224a61',
          900: '#142f40',
        },
        secondary: {
          50: '#fef4ed',
          100: '#fde9db',
          200: '#fbd3b7',
          300: '#f9bd93',
          400: '#f7a76f',
          500: '#e07847',
          600: '#c86639',
          700: '#a0522e',
          800: '#783e22',
          900: '#502917',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
