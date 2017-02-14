const router = require('express').Router();
const middleware = require('./lesson_middleware');

router.route('/new_lesson')
  .post(middleware.createNewLesson);

router.route('/:lessonId')
  .get(middleware.fetchLesson)
  .put(middleware.updateLesson);

router.route('/byClass/:classId')
  .get(middleware.lessonByClassId);

module.exports = router;
