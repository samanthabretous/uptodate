const expect = require('chai').expect;
const io = require('socket.io-client');
const debug = require('debug')('SOCKET');

const socketURL = 'http://localhost:2020';

const options = {
  transports: ['websocket'],
  'force new connection': true,
};

const user1 = { id: 1, email: 'vfrizzle@msb.com', username: 'vfrizzle', password: 'password1', position: 'Instructor' };

describe('Socket Test Server', () => {
  /* Test 1 - Connect  Single User */
  it('should broadcast new user once they connect', (done) => {
    // connect the user to the server
    const socket = io.connect(socketURL, options);
    // once a user is connected send over the infomation about the user we want to test
    socket.on('connect', () => {
      socket.emit('connection-name', user1);
    });

    socket.on('new user', (usersName) => {
      expect(usersName).be.a('string');
      expect(usersName).equal(`${user1.username} has joined.`);
      /* If this socket doesn't disconnect it will interfere with the next test */
      socket.disconnect();
      done();
    });
  });
  /* Test 2 - User is placed in a classroom */
  it('Socket has joined classroom', (done) => {
    const socket = io.connect(socketURL, options);

    socket.on('connect', () => {
      socket.emit('join-classroom', 'classroom1');
    });

    socket.on('rooms-joined', (rooms) => {
      expect(rooms.length).equal(2);
      socket.disconnect();
      done();
    });
  });
});
