const router = require('express').Router();
const middleware = require('./discussion_middleware');

router.route('/lesson/:lessonId')
  .get(middleware.getDiscussionsByLesson);

module.exports = router;
