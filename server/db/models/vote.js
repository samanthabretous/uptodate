module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('vote',
    {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      vote: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        isInt: true,
      },
    },
    {
      classMethods: {
        associate(models) {
          Vote.belongsTo(models.lesson);
        },
      },
    });
  return Vote;
};
