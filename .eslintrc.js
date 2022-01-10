module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-undef': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'no-useless-catch': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
  },
};
