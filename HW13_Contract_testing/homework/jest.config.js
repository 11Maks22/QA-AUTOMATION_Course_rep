module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: true,
  silent: false,  // Дозволяє виводити консолі
  forceExit: true,
  testTimeout: 15000,
};
