const router = require('express').Router();
const middleware = require('../../index').repoSocket;

router.route('/updateFile')
  .post(middleware.rawData);

router.route('/addDir')
  .post(middleware.addDir)
  .delete(middleware.deleteDir);

router.route('/addFile')
  .post(middleware.addFile)
  .delete(middleware.deleteFile);

router.route('/getFile')
  .get(middleware.getFile);

router.route('/updateFileWatched')
  .post(middleware.updatFile);

router.route('/:id')
  .get(middleware.getObject);

module.exports = router;
