/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        paper: "#FAF9F7",
        ink: "#1C1917",
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
        warm: {
          50: "#FDF8F6",
          100: "#FAF0EB",
          200: "#F5DED3",
          300: "#EBC4B2",
          400: "#DEA082",
          500: "#D0815C",
          600: "#C26942",
          700: "#A25136",
          800: "#824430",
          900: "#6A3A2D",
        },
        accent: "#8B5E3C",
        "accent-light": "#A67B5B",
        "accent-dark": "#6B4423",
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'SimSun', 'serif'],
        sans: ['"LXGW WenKai"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        display: ['"Noto Serif SC"', 'serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(28, 25, 23, 0.08)",
        glow: "0 0 40px -10px rgba(139, 94, 60, 0.2)",
      },
    },
  },
  plugins: [],
};
