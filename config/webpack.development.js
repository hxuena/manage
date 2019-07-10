const { join } = require("path");
module.exports = {
  mode: 'development',
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '../dist'),
    hot: true
  }
}