
module.exports = (sequelize, DataTypes) => {
  const UserClass = sequelize.define('user_class', {
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [['Owner', 'Instructor', 'Student', 'Mentor', 'T.A.']],
    },
  });
  return UserClass;
};
