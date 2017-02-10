process.env.NODE_ENV = 'test';

const models = require('../server/web/db/models/index');
const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../start.js');

describe('User tests', () => {
  it('"/api/users/registration" should respond with a new user', (done) => {
    const newUser = { firstName: 'Mickey', lastName: 'Mouse', email: 'mickey@disney.com', username: 'mickey', password: 'pass1', position: 'Instructor' };
    supertest(server)
    .post('/api/users/registration')
    .send(newUser)
    .end((err, res) => {
      expect(res.body).be.a('object');
      expect(res.body).to.have.property('firstName');
      expect(res.body).to.have.property('lastName');
      expect(res.body).to.have.property('email');
      expect(res.body).to.have.property('username');
      expect(res.body).to.have.property('position');
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
      expect(res.body.position).equal('Instructor');
      done();
    });
  });

  // clean up database after running test
  after(() => {
    models.user.destroy({
      where: {
        username: 'mickey',
      },
    });
  });
});
