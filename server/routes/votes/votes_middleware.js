const models = require('../../db/models');

// /api/votes/lesson/${lessonId}
const getVotesByLesson = (req, res) => {
  models.vote.findAll({
    where: {
      lessonId: req.params.lessonId,
    },
    attributes: ['topic', 'id', 'numberOfVotes'],
    order: [['numberOfVotes', 'DESC']],
  })
  .then((votes) => {
    res.send(votes);
  });
};

module.exports = {
  getVotesByLesson,
};
