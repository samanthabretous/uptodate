
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
    },
  }, {
    classMethods: {
      associate(models) {
        Class.belongsToMany(models.user, { through: 'user_class' });
        Class.hasMany(models.lesson);
        Class.hasMany(models.assignment);
      },
    },
  });

  /*
   * add a unique enrollment code before creating model
   * enrollment code allows users to have access to the class
   */
  Class.beforeCreate((model, options, fn) => {
    console.log("-=======================")
    console.log(options)
    console.log("-=======================")
    const code = model.name + Math.floor(Math.random() * 4555);
    model.enrollmentCode = code;
    fn(null, options);
  });

  return Class;
};
