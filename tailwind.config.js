/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        purples: {
          100: "#dcd1fc",
          500: "#7651dc",
        },
        yellows: {
          100: "#faeee2",
          500: "#ffcc69",
        },
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        DmSans: ["Dm Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
