const path = require(`path`)

module.exports = {
  resolvePath: (relativePath) => path.resolve(__dirname, `../../`, relativePath)
}
