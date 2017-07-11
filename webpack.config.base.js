const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject:   'body'
});

module.exports = {
  devtool: 'source-map',
  entry:   path.join(__dirname, 'app', 'app.js'),
  module:  {
    loaders: [
      {
        test:    /\.js$/,
        loader:  'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test:    /\.jsx$/,
        loader:  'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test:    /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:    /\.scss$/,
        include: path.join(__dirname, 'app'),
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};