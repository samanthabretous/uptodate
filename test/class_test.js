process.env.NODE_ENV = 'test';

const Class = require('../server/web/db/models/index').class;
const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../start');

describe('Class API tests', () => {
   // fake data we'll be using for the tests
  const classes = [
    {
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
    },
  ];

  before(() => Class.sync({ force: true })
      .then(() => Class.bulkCreate(classes))
      .catch(err => console.log('DB Err!', err)));

  // GET by id
  it('"/api/classes/info/:classId" should respond with a specific class and all of it\'s associations', (done) => {
    supertest(server)
    .get('/api/classes/info/2')
    .end((err, res) => {
      expect(res.body).to.be.a('object');
      expect(res.body.id).to.eql(2);
      expect(res.body.name).to.eql('Biology');
      expect(res.body.location).to.eql('Room 510');
      done();
    });
  });
});
