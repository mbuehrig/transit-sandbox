module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/interface-name-prefix': 0,
    'no-new': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'props' }],
    'import/extensions': ['error', {
      ts: 'never',
      js: 'never',
      vue: 'always'
    }],
    "@typescript-eslint/no-explicit-any": "off",
  },
  globals: {
    M: true,
  },
};
