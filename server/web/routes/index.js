const router = require('express').Router();

router.use('/users', require('./user/user_router'));
router.use('/classes', require('./class/class_router'));
router.use('/repoFile', require('./repo_file/repo_router'));

module.exports = router;
