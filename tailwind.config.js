/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,twig}"],
  theme: {
    extend: {
      fontFamily: {
        'manufaktur': ["Manufaktur", "sans-serif"],
        'futura': ["Futura", "sans-serif"],
      },
    },
  },
  plugins: [],
}

