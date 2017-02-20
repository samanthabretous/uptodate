const router = require('express').Router();

router.use('/users', require('./user/user_router'));
router.use('/classes', require('./class/class_router'));
router.use('/discussion', require('./discussion/discussion_router'));
router.use('/repoFile', require('./repo_file/repo_router'));
router.use('/lessons', require('./lesson/lesson_router'));
router.use('/assignments', require('./assignment/assignment_router'));
router.use('/votes', require('./votes/votes_router'));
router.use('/download', require('./download/download_router'));

module.exports = router;
