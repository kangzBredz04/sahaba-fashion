/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ["Kumbh Sans"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
