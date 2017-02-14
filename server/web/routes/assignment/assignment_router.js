const router = require('express').Router();
const multer = require('multer');
const middleware = require('./assignment_middleware');

router.use(multer({ dest: './assignments' }).any()).route('/')
  .post(middleware.postNewAssignment);

module.exports = router;

