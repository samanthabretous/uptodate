const models = require('../db/models/index');
const userData = require('./user_seed');
const classData = require('./class_seed');
const lessonData = require('./lesson_seed');
const discussionData = require('./discussion_seed');
const assignmentData = require('./assignment_seed');
const workData = require('./work_seed');
const voteData = require('./vote_seed');

// add user and work associations
module.exports = () => {
  models.class.bulkCreate(classData)
    .then(() => models.user.create(userData[0]))
    .then((user) => {
      user.addClasses([1, 2, 3, 4]);
    })
    .then(() => models.user.create(userData[1]))
    .then((user) => {
      user.addClasses([1, 2, 3, 4]);
    })
    .then(() => models.user.create(userData[2]))
    .then((user) => {
      user.addClasses([1, 2, 3]);
    })
    .then(() => models.user.create(userData[3]))
    .then((user) => {
      user.addClasses([1, 2, 3]);
    })
    // create lesson assoications
    .then(() => {
      models.lesson.bulkCreate(lessonData);
    })
    .then(() => {
      models.assignment.bulkCreate(assignmentData);
    })
    .then(() => models.work.create(workData[0]))
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[1]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[2]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[3]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[4]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[5]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[6]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[7]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[8]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[9]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[10]);
    })
    .then((work) => {
      work.addUser(1);
      return models.work.create(workData[11]);
    })
    .then(() => models.discussion.bulkCreate(discussionData))
    .then(() => models.vote.bulkCreate(voteData))
    .catch((err) => {
      console.log('Error seeding: ', err);
    });
};

