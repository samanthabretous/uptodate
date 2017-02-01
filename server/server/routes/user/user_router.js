const router = require('express').Router();
const middleware = require('./user_middleware');

router.route('/registration')
  .post(middleware.postNewUser);

router.route('/authentication')
  .post(middleware.getUserAuthentication);

module.exports = router;
