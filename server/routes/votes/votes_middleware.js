const models = require('../../db/models');

// /api/votes/lesson/${lessonId}/${userId}
const getVotesByLesson = (req, res) => {
  models.vote.findAll({
    where: {
      lessonId: req.params.lessonId,
    },
    attributes: ['topic', 'id', 'numberOfVotes'],
    order: [['numberOfVotes', 'DESC']],
    include: [{
      model: models.user,
      attributes: ['username'],
      through: {
        where: {
          userId: req.params.userId,
        },
      },
    }],
  })
  .then((votes) => {
    res.send(votes);
  });
};

module.exports = {
  getVotesByLesson,
};
