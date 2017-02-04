module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('lesson',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lecture: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      link: { // name not final, REMEMBER TO CHANGE!!!
        type: DataTypes.STRING,
        allowNull: false,
        isUrl: true,
      },
    },
    {
      classMethods: {
        associate(models) {
          Lesson.belongsTo(models.class);
          Lesson.hasMany(models.assignment);
          Lesson.hasMany(models.discussion);
        },
      },
    });
  return Lesson;
};
