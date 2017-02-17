const router = require('express').Router();
const middleware = require('./lesson_middleware');

router.route('/new_lesson')
  .post(middleware.createNewLesson);

router.route('/:lessonId')
  .get(middleware.fetchLesson)
  .put(middleware.updateLesson);

router.route('/byClass/web/:classCode')
  .get(middleware.lessonByClassCode);

router.route('/byClass/web/:classId')
  .get(middleware.lessonByClassId);

router.route('/byClass/electron/:classId')
  .get(middleware.lessonByClassIdElectron);

module.exports = router;
