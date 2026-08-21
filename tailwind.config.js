/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // "civic ledger" palette — official-document navy + brass seal + paper
        ink: {
          DEFAULT: "#10192E",
          light: "#1B2A4A",
          soft: "#28395C",
        },
        paper: {
          DEFAULT: "#EDEAE0",
          dim: "#E2DDCE",
          card: "#F6F4EC",
        },
        gold: {
          DEFAULT: "#B8863A",
          bright: "#D4A24C",
          dim: "#8C6A2E",
        },
        ballot: {
          red: "#7A1F2B",
          green: "#2F6B4F",
        },
        slate: {
          soft: "#5B6472",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(16, 25, 46, 0.45)",
      },
    },
  },
  plugins: [],
}
