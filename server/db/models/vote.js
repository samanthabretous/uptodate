module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('vote',
    {
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfVotes: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: true,
        validate: {
          isInt: true,
        },
      },
    },
    {
      classMethods: {
        associate(models) {
          Vote.belongsToMany(models.user, { through: 'user_votes' });
        },
      },
    });
  return Vote;
};
