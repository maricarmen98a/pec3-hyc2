module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {

      'tablet': {'min': '768px', 'max': '1199px'},
      'laptop': '1200px'
    },
    extend: {
      backgroundImage: {
        'grid-bg': "url('/src/assets/images/bg1.webp')",
      }
    },
  },
  plugins: [],
}
