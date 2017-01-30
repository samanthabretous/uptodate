'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      len: [1, 25]
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      len: [1, 40]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      len: [1, 35]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [6, 100]
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [['Intructor', 'Student', 'Mentor', 'T.A.']]
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      isUUID: 4
    },
    lastClassViewed: {
      type: DataTypes.STRING,
      allowNull: true,

    }
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(models.Class);
        User.belongsToMany(models.Work);
      }
    }
  });
  return User;
};