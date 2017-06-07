// run this line to seed the test database.
// comment it out to seed the development database
// process.env.NODE_ENV = 'test';

const models = require('../db/models/index');
const userData = require('./user_seed');
const classData = require('./class_seed');
const lessonData = require('./lesson_seed');

// add user and work associations
const seedFunction = () => {
  let enrollmentCode;
  models.sequelize.sync({ force: true })
  .then(() => {
    const lastClass = models.class.create(classData[0]);
    models.class.create(classData[1]);
    models.class.create(classData[2]);
    models.class.create(classData[3]);
    return lastClass;
  })
  .then((classOne) => {
    enrollmentCode = classOne.get('enrollmentCode');
  })
  .then(() => models.user.create(Object.assign(userData[0], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3, 4]);
  })
  .then(() => models.user.create(Object.assign(userData[1], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3, 4]);
  })
  .then(() => models.user.create(Object.assign(userData[2], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[3], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[4], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[5], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2]);
  })
  .then(() => models.user.create(Object.assign(userData[6], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1]);
  })
  .then(() => models.user.create(Object.assign(userData[7], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1]);
  })
  .then(() => models.user.create(Object.assign(userData[8], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[9], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[10], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2]);
  })
  .then(() => models.user.create(Object.assign(userData[11], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2]);
  })
  .then(() => models.user.create(Object.assign(userData[12], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1]);
  })
  .then(() => models.user.create(Object.assign(userData[13], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
    .then(() => models.user.create(Object.assign(userData[14], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[15], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[16], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[17], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[18], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  // create lesson assoications
  .then(() => {
    models.lesson.bulkCreate(lessonData);
  })
};

seedFunction();
module.exports = seedFunction;
