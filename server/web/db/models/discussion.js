module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('discussion',
    {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      response: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      classMethods: {
        associate(models) {
          Discussion.belongsTo(models.user);
          Discussion.belongsTo(models.lesson);
        },
      },
    });
  return Discussion;
};
