
module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define('work', {
    zipFile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    submitted: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate(models) {
        Work.belongsToMany(models.user, { through: 'student_work' });
        Work.belongsTo(models.assignment);
      },
    },
  });
  return Work;
};
