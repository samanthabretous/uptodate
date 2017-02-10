const router = require('express').Router();
const middleware = require('./repo_middleware');

router.route('/updateFile')
  .post(middleware.rawData);

router.route('/addDir')
  .post(middleware.addDir)
  .delete(middleware.deleteDir);

router.route('/addFile')
  .post(middleware.addFile)
  .delete(middleware.deleteFile);

module.exports = router;