'use strict';
module.exports = function(sequelize, DataTypes) {
  var Work = sequelize.define('work', {
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    submitted: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      isDate: true
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Work.belongsToMany(models.user, {through: 'student_work'});
        Work.belongsTo(models.assignment);
      }
    }
  });
  return Work;
};