module.exports = {
  testPathIgnorePatterns: ['/config/', '/dist/', '/node_modules/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
