const models = require('../../db/models/index');

const Assignment = models.assignment;

const lessonIdExist = lessonId =>
 lessonId !== 'null' && lessonId !== 'General Class Assignment';


const fileExist = file =>
  file[0];

const assignmentCreator = (req) => {
  const { classId, due, instructions, exercises, lessonId } = req.body;
  const file = req.files;
  const assignment = {
    classId,
    due,
    instructions,
    exercises,
  };
  if (lessonIdExist(lessonId)) {
    assignment.lessonId = lessonId;
  }
  if (fileExist(file)) {
    assignment.file = file[0].path;
  }
  return assignment;
};

// /api/assignment/
// ~post lesson and store assignments if any in rootdirectory/assignments
const postNewAssignment = (req, res) => {
  const assignment = assignmentCreator(req);
  Assignment.create(assignment)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.sendStatus(500).send(err);
  });
};

module.exports = {
  postNewAssignment,
};
