'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
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
      isIn: [['Instructor', 'Student', 'Mentor', 'T.A.']]
    },
    lastClassViewed: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(models.class, {through: 'user_class'});
        User.belongsToMany(models.work, {through: 'student_work'});
      }
    }
  });
  return User;
};