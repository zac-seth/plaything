const webpack = require(`webpack`)
const util = require(`../util.js`)
const vendors = require(`./vendors.js`)

module.exports = {
  context: process.cwd(),
  entry: {
    vendors
  },
  output: {
    filename: `[name].js`,
    library: `[name]`,
    path: util.resolvePath(`dist`),
  },
  plugins: [
    new webpack.DllPlugin({
      name: `[name]`,
      path: util.resolvePath(`dist/manifest.json`),
    }),
  ],
}
