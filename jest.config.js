module.exports = {
  moduleFileExtensions: [
      'js',
      'vue'
  ],
  transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
      'jest-serializer-vue'
  ],
  testMatch: ['**/tests/**/*.spec.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
}
