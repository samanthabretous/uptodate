const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));
router.use('/users', require('./user/user-router'));



module.exports = router;
