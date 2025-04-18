/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9bc60", // Pineapple yellow
        secondary: "#004643", // Deep green for leaves
        accent: "#f25042", // Red accent color
        funky: "#ff3cac", // Hot pink
        teal: "#2ed8c3", // Teal
        background: "var(--background)",
        foreground: "var(--foreground)",
        info: "#3b82f6",
        warning: "#f59e42",
        success: "#10b981",
        error: "#ef4444",
      },
      fontFamily: {
        funky: ["'Fredoka One'", 'cursive'],
      },
      boxShadow: {
        funky: '0 4px 20px 0 rgba(255,60,172,0.15), 0 1.5px 4px 0 rgba(46,216,195,0.10)'
      },
      rotate: {
        15: '15deg',
        '-15': '-15deg',
      }
    },
  },
  plugins: [],
}; 