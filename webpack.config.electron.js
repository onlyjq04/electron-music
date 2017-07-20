const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const webpackConfig = merge.smart(baseConfig, {
  output: {
    path: path.join(__dirname, 'build'),
    // public URL address of the output files when referenced in a browser <src> tag for example
    // hacky warning: '/' solves can't find bundled woff files
    publicPath: path.join(__dirname, 'build', '/'), 
    filename: 'index_bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"electron"'
      }
    })
  ],
  target: 'electron'
});

module.exports = webpackConfig;
