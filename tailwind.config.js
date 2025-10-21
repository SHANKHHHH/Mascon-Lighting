/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mascon-blue": "#1e40af",
        "mascon-teal": "#0ea5e9",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          from: {
            opacity: "0.6",
            transform: "scale(1)",
          },
          to: {
            opacity: "0.9",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
