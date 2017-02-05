const router = require('express').Router();
const middleware = require('./public_middleware');

router.route('/')
  .post(middleware.rawData);

router.route('/addDir')
  .post(middleware.addDir);

module.exports = router;
