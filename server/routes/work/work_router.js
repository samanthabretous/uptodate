const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'work/');
  },
  filename(req, file, cb) {
    cb(null, Date.now() + '.zip');
  },
});
const upload = multer({ storage });
const middleware = require('./work_middleware');

router.use(upload.any()).route('/')
  .post(middleware.postWork);

module.exports = router;
