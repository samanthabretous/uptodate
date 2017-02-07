const router = require('express').Router();
const middleware = require('./repo_middleware');

router.route('/updateFile')
  .post(middleware.rawData);

router.route('/addDir')
  .post(middleware.addDir);

module.exports = router;
