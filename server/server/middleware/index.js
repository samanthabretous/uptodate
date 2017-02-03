const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../../../webpack.config');

const compiler = webpack(config);

// add all middleware to the following function:
const applyExpressMiddleware = (app) => {
/*
  body-parser middleware adds .body property to req
  (if we make a POST AJAX request with some data attached,
  that data will be accessible as req.body)
*/
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../../', '/client/bundle')));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
  }));

  app.use(webpackHotMiddleware(compiler));
};

module.exports = applyExpressMiddleware;
