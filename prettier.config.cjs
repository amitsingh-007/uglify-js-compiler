const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

module.exports = {
  endOfLine: 'auto',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: [prettierPluginTailwindcss],
};
