

  /* eslint-disable  */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundColor:{
        'bg-color': 'hsl(200, 13%, 9%)',
        'bg-second': 'hsl(197, 11%, 12%)',
        'star-second': 'hsl(198, 93%, 60%)',
        'input-card':'hsl(197, 11%, 12%)',
        'input-bg': 'hsl(200, 13%, 9%)',
        'input-focus': 'hsl(226, 100%, 66%)',
        'button-blue': 'hsl(226, 100%, 36%)',
        'card-color': 'hsl(216, 8%, 13%)',
        'section-color': 'hsl(216, 8%, 13%)',
        'card-second': 'hsl(216, 8%, 17%)',
        'card-dark': 'hsl(225, 8%, 10%)',
        'nav': 'hsl(240, 7%, 9%)',
        'explore-input': 'hsl(240, 1%, 20%)',
      },
      height: {
        'onehundred': '100%',
        'nintyFive': '95%',
        'ninty': '90%',
        'eighty': '80%',
        'seventy': '70%',
        'sixty': '60%',
        'fifty': '50%',
        'fortyFive': '45%',
        'forty': '40%',
        'thirty': '30%',
        'twenty': '20%',
      },
      width: {
        'onehundred': '100%',
        'ninty': '90%',
        'eighty': '80%',
        'seventy': '70%',
        'fifty': '50%',
        'forty': '40%',
        'thirty': '30%',
      },
      maxWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'eighty': '80%',
        'seventy': '70%',
        'fifty': '50%',
        'forty': '40%',
        'thirty': '30%',
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
