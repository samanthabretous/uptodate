const router = require('express').Router();
const middleware = require('../../index').userSocket;

router.route('/registration')
  .post(middleware.postNewUser);

router.route('/authentication')
  .post(middleware.getUserAuthentication);

router.route('/:userId/lastclass')
  .get(middleware.getLastClassViewed);

router.route('/:userId/lastclass/:classId')
  .put(middleware.updateLastClassViewed);

module.exports = router;