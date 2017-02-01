const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));
router.use('/users', require('./user/user-router'));
router.use('/classes', require('./class/class-router'));


module.exports = router;
