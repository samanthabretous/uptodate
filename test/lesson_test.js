process.env.NODE_ENV = 'test';

const models = require('../server/web/db/models/index');
const seed = require('../server/web/seed/index').lesson;
const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server/web');

describe('Lesson API tests', () => {
  before((done) => {
    models.lesson.sync({ force: true }).then(() => {
      seed();
    });
    done();
  });

  // POST request
  it('"/api/lessons/new-lesson" should create a new lesson in our DB', (done) => {
    const newLesson = {
      name: 'Trigonometry and why you\'ll never use it again',
      lecture: 'Nam mauris turpis, laoreet non bibendum in, eleifend sit amet dui. Suspendisse blandit maximus ex non bibendum. Proin turpis quam, ullamcorper quis fermentum sed, iaculis id dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eu elit metus. Etiam fringilla molestie leo, vel vestibulum nibh tincidunt ut. Fusce dictum rutrum massa vel dignissim. Curabitur imperdiet, ipsum ac rutrum sollicitudin, orci sem semper dui, eget rutrum justo massa vel ex. Quisque nisl ex, mattis vel convallis vitae, imperdiet nec tellus. Praesent venenatis sit amet ante eu porttitor. Curabitur accumsan augue fringilla, pellentesque sem ultrices, posuere diam. Integer vulputate porta cursus. Fusce eu tincidunt nisi, in pulvinar diam. Maecenas tincidunt magna vel hendrerit pretium. Aenean fringilla, diam porttitor interdum pretium, purus nisl interdum velit, ut vestibulum magna lacus at nisi.',
      link: null,
      classId: 4,
    };
    supertest(server)
    .post('/api/lessons/new-lesson')
    .send(newLesson)
    .end((err, res) => {
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
