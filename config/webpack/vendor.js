const webpack = require(`webpack`)
const util = require(`./util.js`)

module.exports = {
  entry: {
    vendor: [
      'lodash',
      'redux',
      'react',
      'react-dom',
      `react-router`,
      'react-router-dom',
    ],
  },
  output: {
    library: `[name]`,
    libraryTarget: `var`,
    filename: `[name].js`,
    path: util.resolvePath(`dist`),
  },
  resolve: {
    extensions: [
      `js`,
      `jsx`,
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      path: util.resolvePath(`dist/manifest.json`),
      name: `[name]`,
    }),
  ],
}
