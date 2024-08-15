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
        accent: "#4B4B4B",
        primary: "#0289F5",
      },
      fontFamily: {
        sans: ['var(--font-tommy)', 'sans-serif'],
        mono: ['var(--font-regular)', 'monospace'],
      },
    },
  },
  plugins: [],
};
