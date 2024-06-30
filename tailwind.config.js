/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '3': '2px'
      },
      borderColor: {
        'custom-blue': '#0000ff'
      }
    },
  },
  plugins: [],
};
