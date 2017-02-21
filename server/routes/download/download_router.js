const router = require('express').Router();
const middleware = require('./download_middleware');

router.route('/getFile')
  .get(middleware.getFile);

module.exports = router;
