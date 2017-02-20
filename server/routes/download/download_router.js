const router = require('express').Router();
const middleware = require('./download_middleware');

router.route('/getAssignment')
  .get(middleware.getFile);

module.exports = router;
