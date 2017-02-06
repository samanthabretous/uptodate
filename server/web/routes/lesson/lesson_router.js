const router = require('express').Router();
const middleware = require('./lesson_middleware');

router.route('/new-lesson')
  .post(middleware.createNewLesson);

router.route('/:lessonId')
  .get(middleware.fetchLesson)
  .put(middleware.updateLesson);

module.exports = router;
