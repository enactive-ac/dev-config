module.exports = {
  env: { es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/all',
    'prettier',
  ],
  ignorePatterns: ['build/', 'cdk.out/', 'coverage/', 'dist/', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    project: `${process.cwd()}/tsconfig.json`,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix', 'import'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-redeclare': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'import/no-unresolved': ['warn', { commonjs: true }],
    'import/order': [
      'warn',
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
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-lowercase-title': ['warn', { ignore: ['describe'] }],
    'no-console': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    jest: { version: 27 },
  },
};
