const models = require('../../db/models/index');

const Lesson = models.lesson;

// /api/lessons/new_lesson -- create new row in lesson table
const createNewLesson = (req, res) => {
  // req.body = name, classId, lecture(can be null), link(can be null)
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

// api/lessons/byClassCode/web/:classCode
const lessonByClassCode = (req, res) => {
  models.class.findOne({
    where: { enrollmentCode: req.params.classCode },
    include: [{
      model: Lesson,
      attributes: ['name', 'lecture', 'id'],
    }],
  })
  .then((currentClass) => {
    res.send(currentClass);
  })
  .catch(err => res.status(500).send(err.message));
};

// api/lessons/byClass/web/:classId
const lessonByClassId = (req, res) => {
  Lesson.findAll({
    where: {
      classId: req.params.classId,
    },
    include: [{
      model: models.class,
      attributes: ['name', 'enrollmentCode'],
    }],
  })
  .then((data) => {
    res.send(data);
  })
  .catch(err => res.status(500).send(err.message));
};

// api/lessons/byClass/electron/:classId
const lessonByClassIdElectron = (req, res) => {
  Lesson.findAll({
    where: {
      classId: req.params.classId,
    },
    attributes: ['id', 'name', 'repo'],
    include: [{
      model: models.class,
      attributes: ['name', 'enrollmentCode'],
    }],
  })
  .then((lessonInfo) => {
    res.send(lessonInfo);
  })
  .catch(err => res.status(500).send(err.message));
};

module.exports = {
  createNewLesson,
  fetchLesson,
  lessonByClassCode,
  lessonByClassId,
  lessonByClassIdElectron,
  updateLesson,
};
