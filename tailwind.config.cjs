/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkmode': '#111111',
        'lightmode': '#F2F2F2',
      },
    },
  },
  plugins: [],
}
