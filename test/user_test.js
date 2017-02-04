process.env.NODE_ENV = 'test';

const models = require('../server/web/db/models/index');
const seed = require('../server/web/seed/index');
const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server/web');

describe('User tests', () => {
  before(() => {
    models.sequelize.sync({ force: true }).then(() => {
      seed();
    });
  });

  it('"/api/users/registration" should respond with a new user', (done) => {
    const newUser = { firstName: 'Mickey', lastName: 'Mouse', email: 'mickey@disney.com', username: 'mickey', password: 'pass1', type: 'Instructor' };
    supertest(server)
    .post('/api/users/registration')
    .send(newUser)
    .end((err, res) => {
      expect(res.body).be.a('array');
      expect(res.body[0]).be.a('object');
      expect(res.body[0]).to.have.property('firstName');
      expect(res.body[0]).to.have.property('lastName');
      expect(res.body[0]).to.have.property('email');
      expect(res.body[0]).to.have.property('username');
      expect(res.body[0]).to.have.property('password');
      expect(res.body[0]).to.have.property('type');
      expect(res.body).to.have.deep.property('[0].firstName', 'Mickey');
      expect(res.body[1]).to.equal(true);
      done();
    });
  });

  it('"/api/users/authentication" should respond with a user', (done) => {
    const user = { username: 'vfrizzle', password: 'pass1' };
    supertest(server)
    .post('/api/users/authentication')
    .send(user)
    .end((err, res) => {
      expect(res.body).be.a('object');
      expect(res.body.firstName).equal('Valerie');
      expect(res.body.lastName).equal('Frizzle');
      expect(res.body.email).equal('vfrizzle@msb.com');
      expect(res.body.username).equal('vfrizzle');
      expect(res.body.password).equal('pass1');
      expect(res.body.type).equal('Instructor');
      done();
    });
  });
});
