const models = require('../../../db/models/index');

// /api/classes/newclass
const postNewClass = (req, res) => {
  models.class.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      schedule: req.body.schedule,
      location: req.body.location,
      enrollmentCode: req.body.enrollmentCode
    }
  })
  .then(singleClass => res.send(singleClass))
  .catch(error => res.send(error))
}

// /api/classes/:enrollmentCode
const getClassByEnrollmentCode = (req, res) => {
  models.class.findOne({
    where: {
      enrollmentCode: req.params.enrollmentCode
    }
  })
  .then(singleClass => {
    console.log(singleClass);
    if(!singleClass) {
      res.send('Class not found')
    }
    else {
      res.send(singleClass)
    }
  })
  .catch(error => res.send(error))
}

module.exports = {
  postNewClass,
  getClassByEnrollmentCode
}