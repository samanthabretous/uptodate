const models = require('../../db/models/index');

const seedFunction = () => {
  models.user.bulkCreate([{
    firstName: 'Valerie',
    lastName: 'Frizzle',
    email: 'vfrizzle@msb.com',
    username: 'vfrizzle',
    password: 'pass1',
    type: 'Instructor',
  }, {
    firstName: 'Keesha',
    lastName: 'Franklin',
    email: 'kfranklin@msb.com',
    username: 'kfranklin',
    password: 'pass2',
    type: 'Student',
  }, {
    firstName: 'Phoebe',
    lastName: 'Terese',
    email: 'pterese@msb.com',
    username: 'pterese',
    password: 'pass3',
    type: 'Student',
  }, {
    firstName: 'Ralphi',
    lastName: 'Tennelli',
    email: 'rtennelli@msb.com',
    username: 'rtennelli',
    password: 'pass4',
    type: 'Student',
  }])
    .then(() => models.class.bulkCreate([{
      name: 'Chemistry',
      description: 'Chemistry is Sodium fun!',
      schedule: 'Tuesdays, 3pm',
      location: 'Room 110B',
      enrollmentCode: '123',
    }, {
      name: 'Biology',
      description: 'I find this humerus.',
      schedule: 'Wednesdays, 3pm',
      location: 'Room 510',
      enrollmentCode: '456',
    }, {
      name: 'Physics',
      description: 'Physics is phun!',
      schedule: 'Thursdays, 3pm',
      location: 'Room 510',
      enrollmentCode: '789',
    }, {
      name: 'Math',
      description: 'Don\'t be late for taking the rhombus!',
      schedule: 'Thursdays, 3pm',
      location: 'Room 510',
      enrollmentCode: '101',
    }]));
};

seedFunction();

module.exports = seedFunction;

