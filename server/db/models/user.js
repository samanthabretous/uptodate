const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [1, 35],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 150],
      },
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    position: {
    // this is to differentiate between which views to serve up depending on type of user.
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [['teacher', 'student', 'mentor', 'ta']],
    },
    usedDesktopBefore: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate(models) {
        // this column is for which class info should be displayed on the User's profile page.
        User.belongsTo(models.class, { as: 'currentClass', foreignKey: 'lastClassViewed', targetKey: 'enrollmentCode' });
        User.belongsToMany(models.vote, { through: 'user_votes' });
        User.belongsToMany(models.class, { through: 'user_class' });
        User.belongsToMany(models.work, { through: 'student_work' });
        User.hasMany(models.discussion);
      },
    },
  });
  // change the password user has enter into an encrypted password before entering into database
  User.hook('beforeCreate', (user, fn) => {
    const newSalt = bcrypt.genSalt(12, (err, salt) => salt);
    user.password = bcrypt.hashSync(user.password, newSalt);
    return fn;
  });

  return User;
};
