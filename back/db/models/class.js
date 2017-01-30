'use strict';
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define('Class', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Class.belongsToMany(models.User);
        Class.hasMany(models.Lesson);
        Class.hasMany(models.Assignment);
      }
    }
  });
  return Class;
};