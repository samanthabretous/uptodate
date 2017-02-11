process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../start');

describe('Class API tests', () => {
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

  it('"/api/classes/titlebar/:currentClassEnrollmentCode/:userId" should respond all userinfo and currentClass info', (done) => {
    supertest(server)
    .get('/api/classes/titlebar/456/2')
    .end((err, res) => {
      expect(res.body).to.be.a('object');
      expect(res.body).to.have.property('classes').be.a('array');
      expect(res.body).to.have.property('currentClass').be.a('object');
      expect(res.body).to.have.deep.property('currentClass.users').be.a('array');

      done();
    });
  });
});
