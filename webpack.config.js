const webpack = require('webpack');
const path = require('path');
const args = require('yargs-parser')(process.argv.slice(2))
const mode = args.mode || 'development'
const merge = require('webpack-merge')
const __merge = require(`./config/webpack.${mode}.js`)
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

let webpackConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, 
        exclude: /node_modules/,
        loader: "ts-loader" },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
        // use: [
        //   {
        //     loader: 'style-loader',
        //   },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       importLoaders: 1,
        //     }
        //   },
        //   {
        //     loader: 'postcss-loader'
        //   }
        // ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
  ],
}
module.exports = merge(webpackConfig, __merge)