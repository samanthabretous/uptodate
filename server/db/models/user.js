
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      len: [1, 25],
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      len: [1, 40],
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      unique: true,
      len: [1, 35],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [6, 100],
    },
    position: {
    // this is to differentiate between which views to serve up depending on type of user.
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [['Instructor', 'Student', 'Mentor', 'T.A.']],
    },
  }, {
    classMethods: {
      associate(models) {
        // this column is for which class info should be displayed on the User's profile page.
        User.belongsTo(models.class, { as: 'currentClass', foreignKey: 'lastClassViewed' });
        User.belongsToMany(models.class, { through: 'user_class' });
        User.belongsToMany(models.work, { through: 'student_work' });
        User.hasMany(models.discussion);
      },
    },
  });
  return User;
};
