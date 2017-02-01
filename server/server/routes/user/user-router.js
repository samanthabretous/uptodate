const router = require('express').Router();
const middleware = require('./user-middleware');

router.route('/registration')
  .post(middleware.postNewUser);

router.route('/authentication')
  .post(middleware.getUserAuthentication);

module.exports = router;
