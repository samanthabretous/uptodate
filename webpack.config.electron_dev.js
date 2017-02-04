const path = require('path');
const webpack = require('webpack');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './client/electron_view/entry.jsx',
  ],
  output: {
    path: path.join(__dirname, '/client/electron_view/build'),
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
    publicPath: 'http://localhost:9000/client/electron_view/build/',
  },
  module: {
    loaders: [
      { test: [/\.jsx?$/, /\.js?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};


module.exports = config;
