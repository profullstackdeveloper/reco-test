/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-background': '#061839',
        'light-grey': '#FAFAFA',
        'modal-blur-back': '#B4BDCBB2'
      },
      backgroundImage: {
        'header-button-active': 'linear-gradient(167.34deg, rgba(255, 255, 255, 0.4) -0.02%, rgba(238, 237, 237, 0.4) 113.26%);'
      }
    },
  },
  plugins: [],
}
