const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'app', 'app.js'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'app')],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
