const router = require('express').Router();
const multer = require('multer');
const middleware = require('./assignment_middleware');

router.use(multer({ dest: './assignments' }).any()).route('/')
  .post(middleware.postNewAssignment);

router.route('/byClassId/:classId')
  .get(middleware.getAssignmentByClassId);

module.exports = router;

