/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        192: "42rem", // 1rem = 4px, so 24rem = 6rem
      },
    },
  },
  plugins: [],
};
