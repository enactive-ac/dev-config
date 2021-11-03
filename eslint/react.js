module.exports = {
  extends: ['react-app', 'react-app/jest', `${__dirname}/index.js`],
  rules: {
    'jest/require-hook': 'off',
    'react/jsx-handler-names': ['error'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/self-closing-comp': 'error',
  },
};
