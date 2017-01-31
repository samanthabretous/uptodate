const router = require('express').Router();
const postNewUser = require('./user-middleware').postNewUser;
const getUserAuthentication = require('./user-middleware').getUserAuthentication;

router.route('/register')
  .post(postNewUser)

router.route('/authenticate')
  .post(getUserAuthentication)

module.exports = router;