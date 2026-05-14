/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a0e1a",
        cream: "#f5f3ed",
        gold: "#b88a4a",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "drift": "drift 18s ease-in-out infinite",
        "drift-reverse": "drift-reverse 18s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
        "fade-out-up": "fadeOutUp 0.3s ease-out forwards",
        "pop": "pop 0.5s ease-out forwards",
        "blink": "blink 1.06s step-end infinite",
      },
    },
  },
  plugins: [],
};
