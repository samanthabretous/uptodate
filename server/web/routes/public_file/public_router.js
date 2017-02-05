const router = require('express').Router();
const middleware = require('./public_middleware');

router.route('/')
  .post(middleware.rawData);

module.exports = router;
