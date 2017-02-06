const models = require('../../db/models/index');

// /api/classes/newclass
const postNewClass = (req, res) => {
// Check db to see if that enrollment code exists OR if schedule AND location are taken
  models.class.find({
    where: {
      $or: [{
        enrollmentCode: req.body.enrollmentCode 
      }, {
        schedule: req.body.schedule,
        location: req.body.location,
      }],
    },
  })
// if that class doesn't exist create and send
  .then((findClass) => {
    if (!findClass) {
      models.class.create({
        name: req.body.name,
        description: req.body.description,
        schedule: req.body.schedule,
        location: req.body.location,
        enrollmentCode: req.body.enrollmentCode,
      })
      .then(newClass => res.send(newClass));
// else send error
    } else {
      res.status(500).send('Invalid class info.');
    }
  })
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

module.exports = {
  postNewClass,
  getClassByEnrollmentCode,
};
