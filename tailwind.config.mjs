/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#051931",
        "primary-light": "#0A315f",
        "primary-lighter": "#0f498d",
        highlight: "#EDFF00",
        "backdrop-white": "#cccccc",
        "backdrop-white-transparent": "#ffffff10",
        badge: "#134d49",
        footer: "#10182f",
      },
    },
  },
  plugins: [],
};
