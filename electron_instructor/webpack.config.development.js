const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const config = {
  context: path.join(__dirname, '/client/src'),
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './entry.jsx',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/build'),
    publicPath: 'http://localhost:9000/client/build/',
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
