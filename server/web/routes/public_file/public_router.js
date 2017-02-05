const router = require('express').Router();
const middleware = require('./public_middleware');

router.route('/')
  .post(middleware.makeRepo);

module.exports = router;
