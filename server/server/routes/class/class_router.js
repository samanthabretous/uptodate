const router = require('express').Router();
const middleware = require('./class_middleware');

router.route('/:enrollmentCode')
  .get(middleware.getClassByEnrollmentCode);

router.route('/newclass')
  .post(middleware.postNewClass);

module.exports = router;
