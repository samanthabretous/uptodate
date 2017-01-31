'use strict';
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define('class', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enrollmentCode: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Class.belongsToMany(models.user, {through: 'user_class'});
        Class.hasMany(models.lesson);
        Class.hasMany(models.assignment);
      }
    }
  });
  return Class;
};