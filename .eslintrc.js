const path = require('path')

module.exports = {
  extends: "airbnb-base",
  // parser: 'babel-eslint',
  globals: {
    document: true,
    window: true,
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-named-as-default-member': 0,
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'no-restricted-imports': [2, { patterns: ['../*'] }],
    'no-underscore-dangle': ['error', {
      allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
    }],
  },
  settings: {
    'import/resolver': {
      node: {
          paths: [path.resolve(__dirname, 'cli')],
      },
    },
  },
}
