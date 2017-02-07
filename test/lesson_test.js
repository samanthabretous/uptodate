process.env.NODE_ENV = 'test';

const models = require('../server/web/db/models/index');
const seed = require('../server/web/seed/index').lesson;
const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../start.js');

describe('Lesson API tests', () => {
  // fake data we'll be using for the tests

  before((done) => {
    models.lesson.sync({ force: true })
      .then(() => {
        seed();
      })
      .then(() => done());
  });

  // POST request
  it('"/api/lessons/new-lesson" should create a new lesson in our DB', (done) => {
    const newLesson = {
      name: 'Trigonometry and why you\'ll never use it again',
      lecture: 'Nam mauris turpis,',
      link: null,
      classId: 4,
    };
    supertest(server)
    .post('/api/lessons/new-lesson')
    .send(newLesson)
    .end((err, res) => {
      console.log("ITS RIGHT HERE =======>", res.body)
      expect(res.body).to.be.a('object');
      expect(res.body.name).to.eql(newLesson.name);
      expect(res.body.lecture).to.eql(newLesson.lecture);
      expect(res.body.link).to.eql(newLesson.link);
      expect(res.body.classId).to.eql(newLesson.classId);
      done();
    });
  });

  // GET by id
  it('"/api/lessons/:lessonId" should respond with a the single lesson that includes both all it\'s associated votes and discussions', (done) => {
    supertest(server)
    .get('/api/lessons/3')
    .end((err, res) => {
      expect(res.body).to.be.a('object');
      expect(res.body.id).to.eql(3);
      expect(res.body.name).to.eql('Gravity and why Yo Momma has her own pull');
      expect(res.body).to.have.keys(['assignments', 'discussions', 'votes']);
      done();
    });
  });

  // PUT by id
  it('"/api/lessons/:lessonId" should update a lesson in our DB and respond with a 200 status', (done) => {
    supertest(server)
    .put('/api/lessons/5')
    .send({ name: 'Trigonometry and why it\'s is incredibly useful', lecture: 'test test test' })
    .end((err, res) => {
      expect(res.body.name).equal('Trigonometry and why it\'s is incredibly useful');
      done();
    });
  });
});
