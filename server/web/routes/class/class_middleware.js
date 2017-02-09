const models = require('../../db/models/index');

// /api/classes/newclass
const postNewClass = (req, res) => {
  models.class.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      schedule: req.body.schedule,
      location: req.body.location,
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

// /api/classes/titlebar/:currentClassEnrollmentCode/:userId
const getTitlebarInfo = (req, res) => {
  models.user.findById(req.params.userId, {
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'lastClassViewed', 'password', 'description', 'location', 'schedule'],
    },
    include: [
      // information about the current class
      {
        model: models.class,
        as: 'currentClass',
        include: [
          {
            model: models.user,
            attributes: ['position'],
            // remove all joins table attributes
            through: {
              attributes: [],
            },
          },
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      // infomation about all classes the user is in
      {
        model: models.class,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    ],
  })
  .then(titlebarInfo => res.send(titlebarInfo))
  .catch(() => res.sendStatus(500));
};

module.exports = {
  postNewClass,
  getClassByEnrollmentCode,
  getTitlebarInfo,
};
