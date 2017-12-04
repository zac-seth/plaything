const path = require(`path`)

const resolvePath = (absolutePath) => path.join(process.cwd(), absolutePath)

module.exports = {
  resolvePath
}
