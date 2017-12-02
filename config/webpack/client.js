const config = require(`./webpack.config.js`)
const util = require(`./util.js`)

module.exports = {
  entry: `./src/client.tsx`,
  output: {
    filename: `client.js`,
    path: util.resolvePath(`dist`),
  },
  externals: {
    react: `React`,
    'react-dom': `ReactDOM`,
  },
  ...config,
}
