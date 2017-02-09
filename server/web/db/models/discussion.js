module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('discussion',
    {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate(models) {
          Discussion.belongsTo(models.discussion, { as: 'responseTo' });
          Discussion.belongsTo(models.user);
          Discussion.belongsTo(models.lesson);
        },
      },
    });
  return Discussion;
};
