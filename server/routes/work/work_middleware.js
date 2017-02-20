const models = require('../../db/models/index');

const Work = models.work;

const workCreator = (req) => {
  const { assignmentId } = req.body;
  const zipFile = req.files[0].path;
  return {
    assignmentId,
    zipFile,
  };
};

const postWork = (req, res) => {
  const { userId } = req.body;
  const newWork = workCreator(req);
  Work.create(newWork)
  .then(work => work.addUser(userId))
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
};

module.exports = {
  postWork,
};
