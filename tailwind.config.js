/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#8F0028",
          dark: "#5E001B",
          light: "#A81038",
        },
        cream: {
          DEFAULT: "#F2E5D1",
          light: "#FAF4EB",
          dark: "#E4D2B8",
        },
        offwhite: "#FCF8F2",
        coral: "#D64F63",
        accent: "#D64F63",
        dark: "#5E001B",
        text: "#1F1F1F",
        primary: {
          DEFAULT: "#8F0028",
          dark: "#5E001B",
          light: "#A81038",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tightest: '-0.07em',
      },
    },
  },
  plugins: [],
}
