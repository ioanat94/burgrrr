/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#854d27',
        'orange': '#dd7230',
        'yellow': '#f4c95d',
        'lightYellow': '#e7e393',
        'black':'#04030f',
      },
    },
  },
  plugins: [],
};
