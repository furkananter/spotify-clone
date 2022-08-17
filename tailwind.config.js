/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/index.html'],
  theme: {
    extend: {
      colors:{
        backdrop: '#121212',
        primary: '#1db954',
        active: '#333',
        podcast: '#056952',
        podcastIcon: '#1ed760',
        link: '#b3b3b3',
        footer: '#181818',
        scroll: '#4D4D4D',
        scrollHover: '#808080',
        firstGradient: '#450af5',
        secondGradient: '#8e8ee5',
      },
      fontSize: {
        s: '0.813rem',
      },
      boxShadow: {
        spotify: '0px 2px 4px 0 rgb(0 0 0 / 20%)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
