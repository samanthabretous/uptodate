const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = process.env.NODE_ENV === 'electron'
 ? require('../../webpack.config.electron_dev')
 : require('../../webpack.config');
 
 console.log(process.env.NODE_ENV)

const compiler = webpack(config);
console.log(config.output.publicPath);

// add all middleware to the following function:
const applyExpressMiddleware = (app) => {
/*
  body-parser middleware adds .body property to req
  (if we make a POST AJAX request with some data attached,
  that data will be accessible as req.body)
*/
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../', '/client/web_view/public')));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
    watchOptions: { ignored: /node_modules/ },
    noInfo: true,
  }));

  app.use(webpackHotMiddleware(compiler));
};

module.exports = applyExpressMiddleware;
