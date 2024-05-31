module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // 'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
