/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'brown': '#854d27',
        'orange': '#dd7230',
        'yellow': '#f4c95d',
        'lightYellow': '#e6e2a1',
        'black':'#04030f',
      },
    },
  },
  plugins: [],
};
