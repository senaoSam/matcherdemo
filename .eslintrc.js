module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    semi: ['error', 'always'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/'],
};
