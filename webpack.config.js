const path = require("path")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: "react-utl",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this"  // server side render
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
}
