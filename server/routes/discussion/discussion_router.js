const router = require('express').Router();
const middleware = require('./discussion_middleware');

router.route('/lesson/:lessonId')
  .get(middleware.getDiscussionsByLesson);

router.router('/student/:commentId')
  .get(middleware.fetchResponsesToComment);

module.exports = router;
