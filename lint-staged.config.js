module.exports = {
  '**/*.{js,jsx,ts,tsx,mdx,md}': ['eslint --fix -f table', 'prettier --write'],
  '**/*.css': ['stylelint --fix', 'prettier --write'],
  '**/*.scss': ['stylelint --syntax=scss --fix', 'prettier --write'],
  '**/*.less': ['stylelint --syntax=less --fix', 'prettier --write']
}
