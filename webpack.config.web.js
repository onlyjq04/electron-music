const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const webpackConfig = merge.smart(baseConfig, {
  output: {
    path: __dirname + '/build',
    publicPath: 'http://localhost:8082/',
    filename: 'index_bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"web"'
      }
    })
  ],
  node: {
    fs: 'empty'
  },
  target: 'web'
});

module.exports = webpackConfig;