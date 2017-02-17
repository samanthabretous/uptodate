module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('vote',
    {
      topic: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
        },
      },
      numberOfVotes: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          allowNull: false,
          isInt: true,
        },
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
