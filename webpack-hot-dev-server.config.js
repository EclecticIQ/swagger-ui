const path = require("path")

const rules = []

module.exports = require("./make-webpack-config")(rules, {
  _special: {
    separateStylesheets: false,
  },
	devtool: "eval-source-map",
  entry: {
    "swagger-ui-bundle": [
      "./src/polyfills",
      "./src/core/index.js"
    ],
    "swagger-ui-standalone-preset": [
      "./src/style/main.scss",
      "./src/polyfills",
      "./src/standalone/index.js",
    ]
  },
  output: {
    pathinfo: true,
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    chunkFilename: "[id].js"
  },
  devServer: {
    port: 3200,
    contentBase: path.join(__dirname, "dev-helpers"),
    publicPath: "/",
    noInfo: true,
    hot: true,
    stats: {
      colors: true
    },
  },
})
