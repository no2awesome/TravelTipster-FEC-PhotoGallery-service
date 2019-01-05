var path = require('path');
var combineLoaders = require('webpack-combine-loaders');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.m?jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]-[local]',
          },
        },
      ])
    }
  ]
}
};