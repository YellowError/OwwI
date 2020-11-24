const tailwindcssUI = require('@tailwindcss/ui')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [tailwindcssUI],
}
