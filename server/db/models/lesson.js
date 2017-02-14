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
        allowNull: true,
        isUrl: true,
      },
      repo: {
        type: DataTypes.JSON,
        defaultValue: [],
        allowNull: true,
      },
    },
    {
      classMethods: {
        associate(models) {
          Lesson.belongsTo(models.class);
          Lesson.hasMany(models.assignment);
          Lesson.hasMany(models.discussion);
          Lesson.hasMany(models.vote);
        },
      },
    });
  return Lesson;
};
