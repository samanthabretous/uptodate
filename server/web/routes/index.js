const router = require('express').Router();
console.log("router==========")
router.use('/users', require('./user/user_router'));
router.use('/classes', require('./class/class_router'));
router.use('/repoFile', require('./repo_file/repo_router'));
router.use('/lessons', require('./lesson/lesson_router'));

module.exports = router;
