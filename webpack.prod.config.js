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
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loaders: [
          'babel-loader?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$|\.eot$|^(?!.*\.inline\.svg$).*\.svg$/,
        loaders: ['url-loader', 'file-loader'],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};
