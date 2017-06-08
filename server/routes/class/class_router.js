const router = require('express').Router();
const middleware = require('./class_middleware');

router.route('/:enrollmentCode')
  .get(middleware.getClassByEnrollmentCode);

router.route('/titlebar/:currentClassEnrollmentCode/:userId')
  .get(middleware.getTitlebarInfo)
  .put(middleware.updateUserCurrentClass);

router.route('/info/:classId')
  .get(middleware.fetchClassInfo);

router.route('/allClasses/:userId')
  .get(middleware.getAllUserClasses);

router.route('/newclass')
  .post(middleware.postNewClass);

router.route('/addUserToClass')
  .post(middleware.addUserToClass);

module.exports = router;
