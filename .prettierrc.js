module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
