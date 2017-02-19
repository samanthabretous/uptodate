const models = require('../../db/models/index');
const bcrypt = require('bcrypt-nodejs');

class SocketConnection {
  constructor(io) {
    this.io = io;
    this.postNewUser = this.postNewUser.bind(this);
    this.getUserAuthentication = this.getUserAuthentication.bind(this);
    this.getLastClassViewed = this.getLastClassViewed.bind(this);
    this.updateLastClassViewed = this.updateLastClassViewed.bind(this);
  }
  // /api/users/registration -- user registration
  postNewUser(req, res) {
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
        position: req.body.position,
      },
    })
    .spread((user, created) => {
      if (created) {
        res.send(user);
      } else {
        throw new Error('Invalid registration info.');
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
  }
  // /api/users/authentication -- user authentication
  getUserAuthentication(req, res) {
    models.user.findOne({
      where: {
        username: req.body.username,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'lastClassViewed'],
      },
      include: [{
        model: models.class,
        as: 'currentClass',
        attributes: ['enrollmentCode'],
      }],
    })
    .then((user) => {
      if (user) {
        // if password matches send over user info
        const isPasswordMatch = bcrypt.compareSync(req.body.password, user.get('password'));
        if (isPasswordMatch){
          user.password = null;
          res.send(user);
          this.io.sockets.emit('test');
        }
      } else {
        throw new Error('Invalid login info.');
      }
    })
    .catch(err => res.status(500).send(err.message));
  }

  // /api/users/:userId/lastclass
  getLastClassViewed(req, res) {
    models.user.findById(req.params.userId)
    .then((user) => {
      if (user) {
        return models.class.findOne({
          where: {
            id: user.dataValues.lastClassViewed,
          },
        });
      }
      throw new Error('User not found.');
    })
    .then((singleClass) => {
      if (singleClass) {
        res.send(singleClass);
      } else {
        throw new Error('Class not found.');
      }
    })
    .catch(err => res.status(500).send(err.message));
  }

  // /api/users/:userId/lastclass/:classId
  updateLastClassViewed(req, res) {
    models.class.find({
      where: {
        id: req.params.classId,
      },
    })
    .then((findClass) => {
      if (findClass) {
        return models.user.update({
          lastClassViewed: req.params.classId,
        }, {
          where: {
            id: req.params.userId,
          },
        });
      }
      throw new Error('Class not found.');
    })
    .then(update => res.send(update))
    .catch(err => res.status(500).send(err.message));
  }
}

module.exports = SocketConnection;
