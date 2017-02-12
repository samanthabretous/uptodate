
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('class', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enrollmentCode: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    classMethods: {
      associate(models) {
        Class.belongsToMany(models.user, { through: 'user_class' });
        Class.belongsTo(models.user, { as: 'owner' });
        Class.hasMany(models.lesson);
        Class.hasMany(models.assignment);
      },
    },
  });

  /*
   * add a unique enrollment code before creating model
   * enrollment code allows users to have access to the class
   */
  Class.beforeCreate((classModel, options, fn) => {
    const code = classModel.name + Math.floor(Math.random() * 4555);
    classModel.enrollmentCode = code;
    fn(null, options);
  });

  return Class;
};
