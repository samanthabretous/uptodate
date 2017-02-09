const models = require('../../db/models/index');

// /api/classes/newclass
const postNewClass = (req, res) => {
  models.class.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      schedule: req.body.schedule,
      location: req.body.location,
      enrollmentCode: req.body.enrollmentCode,
    },
  })
  .then(singleClass => res.send(singleClass))
  .catch(() => res.sendStatus(500));
};

// /api/classes/:enrollmentCode
const getClassByEnrollmentCode = (req, res) => {
  models.class.findOne({
    where: {
      enrollmentCode: req.params.enrollmentCode,
    },
  })
  .then((singleClass) => {
    if (singleClass) {
      res.send(singleClass);
    } else {
      throw new Error();
    }
  })
  .catch(() => res.sendStatus(500));
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
