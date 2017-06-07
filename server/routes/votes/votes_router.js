const router = require('express').Router();
const middleware = require('./votes_middleware');

router.route('/lesson/:lessonId/:userId')
  .get(middleware.getVotesByLesson);

module.exports = router;
