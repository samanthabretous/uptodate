'use strict';
module.exports = function(sequelize, DataTypes) {
  var Work = sequelize.define('Work', {
    file: DataTypes.STRING,
    submitted: DataTypes.DATEONLY
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