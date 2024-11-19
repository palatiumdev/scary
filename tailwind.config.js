/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        BGaccent: "#0A0909",
        accent: "#232323",
        primary: "#8E3D5D",
      },
      fontFamily: {
        sans: ['var(--font-tommy)', 'sans-serif'],
        mono: ['var(--font-regular)', 'monospace'],
      },
    },
  },
  plugins: [],
};
