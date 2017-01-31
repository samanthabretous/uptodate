const user = require('../../../db/models/index').user;

// user registration
const postNewUser = (req, res) => {
  user.findOrCreate({
    where: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      type: req.body.type
    }
  })
  .then(user => res.send(user))
}

// user authentication
const getUserAuthentication = (req, res) => {
  user.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  })
  .then(user => res.send(user))
}

module.exports = {
  postNewUser,
  getUserAuthentication
}