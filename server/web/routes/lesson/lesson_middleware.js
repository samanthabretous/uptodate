const Lesson = require('../../db/models/index').lesson;

// /api/lessons/new-lesson -- create new row in lesson table
const createNewLesson = (req, res) => {
  Lesson.create(req.body)
    .then((newLesson) => {
      res.send(newLesson);
    })
    .catch(err => res.status(500).send(err.message));
};

// /api/lessons/:lessonId
const fetchLesson = (req, res) => {
  Lesson.findById(req.params.lessonId, {
    include: [{ all: true }],
  })
  .then((lesson) => {
    res.send(lesson);
  })
  .catch(err => res.status(500).send(err.message));
};

// api/lessons/:lessonId
const updateLesson = (req, res) => {
  Lesson.update({
    name: req.body.name,
    lecture: req.body.lecture,
  }, {
    where: { id: req.params.lessonId },
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch(err => res.status(500).send(err.message));
};

// api/lessons/byClass/:classId
const lessonByClassId = (req, res) => {
  Lesson.findAll({
    where: {
      classId: req.params.classId,
    },
  })
  .then((data) => {
    res.send(data);
  })
  .catch(err => res.status(500).send(err.message));
};

module.exports = {
  createNewLesson,
  fetchLesson,
  lessonByClassId,
  updateLesson,
};
