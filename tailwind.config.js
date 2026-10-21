/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        // 农业绿 + 麦穗金 + 米白
        seed: {
          50: "#f5f8f4",
          100: "#e6efe4",
          200: "#cddfc9",
          300: "#a7c7a1",
          400: "#7aa873",
          500: "#548a4d",
          600: "#3f6f3a",
          700: "#33582f",
          800: "#2b4728",
          900: "#243c22",
          950: "#122112",
        },
        wheat: {
          50: "#fbf7ea",
          100: "#f5ecd0",
          200: "#ead7a0",
          300: "#debc69",
          400: "#d3a343",
          500: "#c28c2f",
          600: "#a56d25",
          700: "#845120",
          800: "#6d4220",
          900: "#5c381e",
        },
        cream: "#f8f6ef",
        ink: "#1d2a20",
        line: "#e2e0d5",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(29, 42, 32, 0.35)",
        card: "0 1px 2px rgba(29, 42, 32, 0.05), 0 10px 28px -14px rgba(29, 42, 32, 0.16)",
        lift: "0 4px 10px rgba(29, 42, 32, 0.06), 0 24px 48px -18px rgba(29, 42, 32, 0.30)",
      },
    },
  },
  plugins: [],
};
