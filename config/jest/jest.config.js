const resolve = path => `<rootDir>/${path}`

module.exports = {
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': resolve(`config/jest/mocks/fileMock.ts`),
    '\\.(css|less)$': resolve(`config/jest/mocks/styleMock.ts`),

    '^elements/(.*)$': resolve(`src/elements/$1`),
    '^public/(.*)$': resolve(`src/public/$1`),
  },
  rootDir: `../../`,
  setupFiles: [
    resolve(`config/jest/jest.polyfill.ts`),
    resolve(`config/jest/jest.setup.ts`),
  ],
  testRegex: `(/_specs/.*|\\.(spec))\\.(ts|tsx|js)$`,
  transform: {
    '.(ts|tsx)': resolve(`node_modules/ts-jest/preprocessor.js`),
  },
}
