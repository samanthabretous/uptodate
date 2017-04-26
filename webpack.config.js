const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:2020/__webpack_hmr',
    './client/web_view/Entry.jsx',
  ],
  output: {
    path: path.join(__dirname, '/client/web_view/public/bundle'),
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
    publicPath: 'http://localhost:2020/client/web_view/bundle/',
  },
  watch: true,
  watchOptions: { ignored: [/node_modules/, /repo/] },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: [/\.scss$/, /\.css$/],
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url',
      },
      {
        test: /\.(ico|jpg|png|gif|otf|webp|woff|)(\?.*)?$/,
        loader: 'file',
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
