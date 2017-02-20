const router = require('express').Router();
const middleware = require('./work_middleware');

router.route('/getAssignment')
  .post(middleware.getFile);

module.exports = router;
