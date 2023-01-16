module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-max-compound-selectors': 2,
    'color-named': 'never'
  }
}