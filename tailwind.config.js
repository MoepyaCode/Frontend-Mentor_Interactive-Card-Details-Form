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
          light: '#DFDEE0'
        },
        red: '#FF5050'
      },
      backgroundImage: {
        'main-mobile': "url('src/assets/images/bg-main-mobile.png')",
        'main-desktop': "url('src/assets/images/bg-main-desktop.png')",
        'card-back': "url('src/assets/images/bg-card-back.png')",
        'card-front': "url('src/assets/images/bg-card-front.png')",
      }
    },
  },
  plugins: [],
}