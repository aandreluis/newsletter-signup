/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tomato: "#ff6257",
        orange: "#FF693A",
        pink: "#FF537A",
        grey: "#9294a0",
        "darkslate-grey": "#242742",
        "charcoal-grey": "#36384e",
      },

      fontFamily: {
        rotobo: ["Roboto", "sans-serif"],
      },

      backgroundImage: {
        "hero-mobile": "url('/illustration-sign-up-mobile.svg')",
        "hero-desktop": "url('/illustration-sign-up-desktop.svg')",
        "icon-list": "url('/icon-list.svg')",
        "icon-success": "url('/icon-success.svg')",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease",
      },
    },
  },
  plugins: [],
}
