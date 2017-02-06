process.env.NODE_ENV = 'test';

const models = require('../server/web/db/models/index');
const seed = require('../server/web/seed/index').lesson;
const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server/web');

describe('Class API tests', () => {
  before((done) => {
    models.class.sync({ force: true }).then(() => {
      seed();
    });
    done();
  });

  // GET by id
  it('"/api/class/:classId" should respond with a specific class and all of it\'s associations', (done) => {
    supertest(server)
    .get('/api/class/2')
    .end((err, res) => {
      expect(res.body).to.be.a('object');
      expect(res.body.id).to.eql(2);
      expect(res.body.name).to.eql('Biology');
      expect(res.body.location).to.eql('Room 510');
      expect(res.body).to.have.keys(['assignments', 'lessons']);
      done();
    });
  });
});
