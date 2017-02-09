const models = require('../../db/models/index');

// /api/users/registration -- user registration
const postNewUser = (req, res) => {
  models.user.findOrCreate({
    where: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      position: req.body.position,
    },
  })
  .then(user => res.send(user))
  .catch(() => res.sendStatus(500));
};

// /api/users/authentication -- user authentication
const getUserAuthentication = (req, res) => {
  models.user.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'password', 'lastClassViewed'],
    },
    include: [{
      model: models.class,
      as: 'currentClass',
      attributes: ['enrollmentCode'],
    }],
  })
  .then((user) => {
    if (user) {
      res.send(user);
    } else {
      throw new Error();
    }
  })
  .catch(() => res.sendStatus(500));
};

// /api/users/:userId/lastclass
const getLastClassViewed = (req, res) => {
  models.user.findById(req.params.userId)
  .then((user) => {
    if (user) {
      return models.class.findOne({
        where: {
          id: user.dataValues.lastClassViewed,
        },
      });
    }
    throw new Error();
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

// /api/users/:userId/lastclass/:classId
const updateLastClassViewed = (req, res) => {
  models.user.update({
    lastClassViewedId: req.params.classId,
  }, {
    where: {
      id: req.params.userId,
    },
  })
  .then((user) => {
    if (user[0]) {
      res.send(user);
    } else {
      throw new Error();
    }
  })
  .catch(() => res.sendStatus(500));
};

module.exports = {
  postNewUser,
  getUserAuthentication,
  getLastClassViewed,
  updateLastClassViewed,
};
