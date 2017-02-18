'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  globals: {
    process: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'script',
  },
  plugins: [
    'flowtype',
    'react',
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
  },
};
