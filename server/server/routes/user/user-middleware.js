const models = require('../../../db/models/index');

// /api/users/registration -- user registration
const postNewUser = (req, res) => {
  models.user.findOrCreate({
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
  .catch(error => res.send(error))
}

// /api/users/authentication -- user authentication
const getUserAuthentication = (req, res) => {
  models.user.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  })
  .then(user => {
    if(!user) {
      res.send('User credentials not found.')
    }
    else {
      res.send(user)
    }
  })
  .catch(error => res.send(error))
}

module.exports = {
  postNewUser,
  getUserAuthentication
}