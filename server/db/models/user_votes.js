module.exports = (sequelize, DataTypes) => {
  const UserVotes = sequelize.define('user_votes', {
    upVote: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    downVote: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return UserVotes;
};
