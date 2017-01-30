'use strict';
module.exports = function(sequelize, DataTypes) {
  var Assignment = sequelize.define('Assignment', {
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exercises: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    due: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      isDate: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Assignment.belongsTo(models.Class);
        Assignment.belongsTo(models.Lesson);
        Assignment.hasMany(models.Work);
      }
    }
  });
  return Assignment;
};