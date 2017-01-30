'use strict';
module.exports = function(sequelize, DataTypes) {
  var Lesson = sequelize.define('Lesson', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lecture: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mdFileLink: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Lesson.belongsTo(models.Class);
        Lesson.hasMany(models.Assignment);
      }
    }
  });
  return Lesson;
};