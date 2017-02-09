const models = require('../../db/models/index');

// /api/classes/newclass
const postNewClass = (req, res) => {
  models.class.findOrCreate({
    where: {
      schedule: req.body.schedule,
      location: req.body.location,
    },
    defaults: {
      name: req.body.name,
      description: req.body.description,
      schedule: req.body.schedule,
      location: req.body.location,
    },
  })
  .spread((newClass, created) => {
    if (created) {
      res.send(newClass);
    } else {
      throw new Error('Invalid class info.');
    }
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

// /api/classes/:enrollmentCode
const getClassByEnrollmentCode = (req, res) => {
  models.class.findOne({
    where: {
      enrollmentCode: req.params.enrollmentCode,
    },
  })
  .then((findClass) => {
    if (findClass) {
      res.send(findClass);
    } else {
      throw new Error('Class not found.');
    }
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

// /api/classes/info/:classId
const fetchClassInfo = (req, res) => {
  models.class.findById(req.params.classId, {
    include: [{ all: true }],
  })
  .then((classInfo) => {
    res.send(classInfo);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

module.exports = {
  postNewClass,
  getClassByEnrollmentCode,
  fetchClassInfo,
};
