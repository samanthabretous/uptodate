'use strict';
module.exports = function(sequelize, DataTypes) {
  var Work = sequelize.define('Work', {
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    submitted: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      isDate: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Work.belongsToMany(models.User);
        Work.belongsTo(models.Assignment);
      }
    }
  });
  return Work;
};