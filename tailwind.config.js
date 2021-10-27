module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe','motion-reduce'],
      transitionTimingFunction: ['hover', 'focus'],
    },
  },
  plugins: [],
}
