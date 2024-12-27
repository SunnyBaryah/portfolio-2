/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        popUp: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "gradient-slow": "gradient 8s ease infinite",
        popUp: "popUp 0.8s ease-in-out forwards",
        popUpLate: "popUp 1.2s ease-in-out forwards",
        popUpLater: "popUp 1.4s ease-in-out forwards",
        popUpLater2: "popUp 1.6s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
