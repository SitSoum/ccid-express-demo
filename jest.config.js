export default {
  testEnvironment: 'node',
  transform: {},
  testMatch: ['**/*.test.js'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
