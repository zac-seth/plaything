const webpack = require(`webpack`)
const util = require(`./util.js`)

module.exports = {
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: `awesome-typescript-loader`,
      },
      {
        enforce: `pre`,
        test: /\.js$/,
        loader: `source-map-loader`,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  resolve: {
    extensions: [
      `.ts`,
      `.tsx`,
      `.js`,
      `.json`,
    ],
    alias: {
      'elements': util.resolvePath(`src/elements`),
      'public': util.resolvePath(`src/public`),
    },
  },
}
