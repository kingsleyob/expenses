// module.exports = {
//     setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
//   };

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',  // Transform TypeScript files
    '^.+\\.(js|jsx)$': 'babel-jest',  // Transform JavaScript files
    '^.+\\.(mjs|js)$': 'babel-jest',  // Transform .mjs files as well (important for ESM)
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)',  // Make sure axios gets transformed by Babel
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Ensure all file extensions are handled
};
