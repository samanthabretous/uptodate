const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:2020/__webpack_hmr',
    './client/electron_view/entry.jsx',
  ],
  output: {
    path: path.join(__dirname, '/client/electron_view/build'),
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
    publicPath: 'http://localhost:2020/client/electron_view/build/',
  },
  watch: true,
  watchOptions: { ignored: [/node_modules/, /repo/] },
  module: {
    noParse: ['ws'],
    loaders: [
      { test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: [/\.scss$/, /\.css$/],
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  externals: ['ws'],
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  target: 'electron-renderer',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
