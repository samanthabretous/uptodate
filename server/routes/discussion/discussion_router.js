const router = require('express').Router();
const middleware = require('./discussion_middleware');

router.route('/lesson/:lessonId')
  .get(middleware.getDiscussionsByLesson);

router.route('/student/:commentId')
  .get(middleware.fetchResponsesToComment);

module.exports = router;
