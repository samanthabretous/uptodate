const Lesson = require('../../db/models/index').lesson;

// /api/lessons/new-lesson -- create new row in lesson table
const createNewLesson = (req, res) => {
  console.log("YOU'RE HITTING ME, IT WORKS. STOP IT")
  Lesson.create(req.body)
    .then((newLesson) => {
      console.log('NEW LESSON ========>', newLesson)
      res.send(newLesson);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

const fetchLesson = (req, res) => {
  Lesson.findById(req.params.lessonId, {
    include: [{ all: true }],
  })
  .then((lesson) => {
    res.send(lesson);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

const updateLesson = (req, res) => {
  Lesson.update({
    name: req.body.name,
    lecture: req.body.lecture,
  }, {
    where: { id: req.params.id },
  })
  .then((updatedLesson) => {
    res.send(updatedLesson);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

module.exports = {
  createNewLesson,
  fetchLesson,
  updateLesson,
};
