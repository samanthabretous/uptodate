const router = require('express').Router();

router.use('/users', require('./user/user_router'));
router.use('/classes', require('./class/class_router'));
router.use('/public_file', require('./public_file/public_router'));

module.exports = router;
