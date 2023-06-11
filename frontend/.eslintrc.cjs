module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-trailing-spaces': 2,
    'quotes': [2, 'single'],
    'no-undef': 0,
    'eol-last': 2,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'object-curly-spacing': [2, 'always'],
    'semi': [2, 'always'],
    'eqeqeq': 2,
    'spaced-comment': 2,
    'key-spacing': 2,
    'no-multi-spaces': 2,
    'space-in-parens': 2,
    'react/prop-types': 0
  },
};
