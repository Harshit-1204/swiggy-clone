/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Components/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    keyframes: {
      shade: {
        '0%': { background: 'linear-gradient(to right, #a9a9a9, #d3d3d3)' },
        '50%': { background: 'linear-gradient(to right, #d3d3d3, #a9a9a9)' },
        '100%': { background: 'linear-gradient(to right, #a9a9a9, #d3d3d3)' },
      },
    },
    animation: {
      shade: 'shade 3s infinite',
    },
  },
  plugins: [],
}

