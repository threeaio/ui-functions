export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleNameMapper: {
    '^@threeaio/utils/(.*)$': '<rootDir>/../utils/dist/$1',
    '^@threeaio/utils$': '<rootDir>/../utils/dist/index.js'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }
}; 