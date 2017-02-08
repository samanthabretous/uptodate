const models = require('../../db/models/index');

// /api/users/registration -- user registration
const postNewUser = (req, res) => {
  models.user.findOrCreate({
    where: {
      $or: [{
        email: req.body.email,
      }, {
        username: req.body.username,
      }],
    },
    defaults: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      type: req.body.type,
    },
  })
  .spread((user, created) => {
    if (created) {
      res.send(user);
    }
    throw new Error('Invalid registration info.');
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

// /api/users/authentication -- user authentication
const getUserAuthentication = (req, res) => {
  models.user.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'password'],
    },
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
  models.class.find({
    where: {
      id: req.params.classId,
    },
  })
  .then((findClass) => {
    if (findClass) {
      models.user.update({
        lastClassViewed: req.params.classId,
      }, {
        where: {
          id: req.params.userId,
        },
      })
      .then((update) => {
        res.send(update);
      });
    } else {
      res.status(500).send('Class not found.');
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
