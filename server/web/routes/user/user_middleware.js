const models = require('../../db/models/index');

// /api/users/registration -- user registration
const postNewUser = (req, res) => {
// Check db to see if that username OR email is already taken
  models.user.find({
    where: {
      $or: [{
        email: req.body.email,
      }, {
        username: req.body.username,
      }],
    },
  })
// if neither username nor email is taken create and send new user
  .then((user) => {
    if (!user) {
      models.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
      })
      .then(newUser => res.send(newUser));
// else send error
    } else {
      res.status(500).send('Invalid registration info.');
    }
  })
  .catch(() => res.sendStatus(500));
};

// /api/users/authentication -- user authentication
const getUserAuthentication = (req, res) => {
  models.user.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
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
  models.user.update({
    lastClassViewed: req.params.classId,
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
