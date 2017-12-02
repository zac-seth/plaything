const config = require(`./webpack.config.js`)
const util = require(`./util.js`)

module.exports = {
  entry: `./src/server.tsx`,
  output: {
    filename: `server.js`,
    path: util.resolvePath(`dist`),
  },
  target: `node`,
  ...config,
}
