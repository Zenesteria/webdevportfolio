/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,css,ts,tsx,js,jsx}",
    "./Components/**/*.{html,css,ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 5s ease-in infinite",
        blobslower: "blob 10s ease-in infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
