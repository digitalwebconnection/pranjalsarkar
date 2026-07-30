/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  transform: {},
  extensionsToTreatAsEsm: [],
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/config/**',
  ],
  coverageDirectory: 'coverage',
};
