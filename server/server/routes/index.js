const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));
router.use('/users', require('./user/user_router'));
router.use('/classes', require('./class/class_router'));


module.exports = router;
