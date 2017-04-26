const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

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

  if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    // determine which config file to execute base on the node enviroment
    const config = process.env.NODE_ENV === 'electron'
     ? require('../../webpack.config.electron_dev')
     : require('../../webpack.config');
    const compiler = webpack(config);

    app.use(webpackHotMiddleware(compiler));
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true,
      },
      watchOptions: { ignored: /node_modules/ },
      noInfo: true,
    }));
  }
};

module.exports = applyExpressMiddleware;
