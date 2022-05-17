module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
          'xs': '374px',
          'phone': '375px',
          'laptop': '1100px', //equivilant to lg
          'desktop': '1440px',
        },
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'black': '#000000',
        'orange': {
          100:'#ED805B',
          200: '#FE6734',
          300: '#EE582B'
        },
        'blue': {
          100: '#2089F9',
          200: '#0656EB',
          300: '#015AFF',
          400: '#042E6C',
          500: '#040E2A',
        },
        'cyan': {
          100: '#36A8FA',
          200: '#00FFFF',
          300: '#0094FF',
          400: '#5AB2F1'
        },
        'green': {
          100: '#28CA42',
          200: '#3BB179',
          300: '#12F588'
        },
        'yellow': {
          100: '#FF8C19',
          200: '#FF8912',
          300: '#FFA51E',
          400: '#FFBD2E'
        },
        'purple':{
          100: '#D817F8',
          200: '#B41FB8'
        }
    },
  },

  plugins: [],
}
