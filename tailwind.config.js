module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        js: {
          100: '#0b141a'
        }
      },
      minWidth: {
        '1/3': '33.3%',
      },
      minHeight: {
        '10': '10em',
      },
      transitionDuration: {
        '1500': '1500ms',
        '0': '0ms',
      },
    },
  },
  plugins: [],
}