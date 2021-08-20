module.exports = {
  env: { es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/all',
    'prettier',
  ],
  ignorePatterns: ['build/', 'coverage/', 'dist/', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    project: `${process.cwd()}/tsconfig.json`,
    sourceType: 'module',
  },
  plugins: ['deprecation', 'sort-keys-fix', 'import'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'deprecation/deprecation': ['error'],
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: ['builtin', 'external', ['sibling', 'parent'], 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'jest/lowercase-name': ['error', { ignore: ['describe'] }],
    'no-console': 'warn',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  settings: {
    jest: { version: 27 },
  },
};
