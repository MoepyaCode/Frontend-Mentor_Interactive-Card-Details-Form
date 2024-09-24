/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        violet: {
          deep: '#21092F'
        },
        grey: {
          purpulish: '#8F8694',
          grey: '#DFDEE0'
        },
        red: '#FF5050'
      }
    },
  },
  plugins: [],
}