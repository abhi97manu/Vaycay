/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090b",
        veil: "#111114",
        bone: "#f4eee4",
        blood: "#891c29",
        ember: "#d4a373"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        ritual: "0 0 40px rgba(212, 163, 115, 0.18)"
      }
    }
  },
  plugins: []
};
