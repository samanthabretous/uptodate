const models = require('../../db/models/index');

// /api/discussion/lesson/:lessonId
const getDiscussionsByLesson = (req, res) => {
  models.discussion.findAll({
    where: {
      lessonId: req.params.lessonId,
    },
    attributes: {
      exclude: ['updatedAt', 'userId'],
    },
    include: [{
      model: models.user,
      attributes: ['username', 'id'],
    }],
  })
  .then((data) => {
    res.send(data);
  })
  .catch(err => res.status(500).send(err.message));
};

// /api/discussion/student/:commentId
const fetchResponsesToComment = (req, res) => {
  models.discussion.findAll({
    where: {
      responseToId: req.params.commentId,
      order: ['createdAt', 'DESC'],
    },
  })
  .then(responses => res.send(responses))
  .catch(err => res.status(500).send(err.message));
};

module.exports = {
  getDiscussionsByLesson,
  fetchResponsesToComment,
};
