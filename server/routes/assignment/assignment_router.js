const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assignments/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.zip')
  },
});
const upload = multer({ storage });
const middleware = require('./assignment_middleware');

router.use(upload.any()).route('/')
  .post(middleware.postNewAssignment);

router.route('/byClassId/:classId')
  .get(middleware.getAssignmentByClassId);

module.exports = router;

