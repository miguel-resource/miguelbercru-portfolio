module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      cutive: ['Cutive Mono'],
      roboto: ['Roboto Mono']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
