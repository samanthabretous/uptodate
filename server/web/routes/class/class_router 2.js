const router = require('express').Router();
const middleware = require('./class_middleware');

router.route('/:enrollmentCode')
  .get(middleware.getClassByEnrollmentCode);

router.route('/titlebar/:currentClassEnrollmentCode/:userId')
  .get(middleware.getTitlebarInfo);

router.route('/info/:classId')
  .get(middleware.fetchClassInfo);

router.route('/newclass')
  .post(middleware.postNewClass);

module.exports = router;
