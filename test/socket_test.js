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
  /* Test 1 - A Single User */
  it('should broadcast new user once they connect', (done) => {
    // connect the user to the server
    const socket = io.connect(socketURL, options);
    // once a user is connected send over the infomation about the user we want to test
    socket.on('connect', () => {
      socket.emit('connection-name', user1);
    });

    socket.on('new user', (usersName) => {
      debug(usersName);
      expect(usersName).be.a('string');
      expect(usersName).equal(`${user1.username} has joined.`);
      /* If this socket doesn't disconnect it will interfere with the next test */
      socket.disconnect();
      done();
    });
  });

  /*
  * socket should receive messages in all the rooms they are in
  */
  // it('Emit message only to people in the room', (done) => {
  //   const message = 'hello to channel 1';
  //   const channels = ['channel1', 'channel2', 'channel3'];
  //   let socket1 = null;
  //   let socket2 = null;
  //   let socket3 = null;
  //   let messages = 0;

  //   const checkMessage = (client) => {
  //     // socket server emit: 
  //     client.on('received-message', (payload) => {
  //       expect(payload.msg).equal(message);
  //       expect(payload.ChatroomId).equal(1);
  //       messages += 1;
  //     });
  //   };


  //   socket1 = io.connect(socketURL, options);
  //   checkMessage(socket1);

  //   socket1.on('connect', () => {
  //     /* socket has been "logged in"
  //     * have them join all the channels that are determined in the "database"
  //     */
  //     socket1.emit('join-rooms', channels);

  //     // once socket has been connected. connect the next socket
  //     socket2 = io.connect(socketURL, options);
  //     checkMessage(socket2);

  //     socket2.on('connect', () => {
  //       socket2.emit('join-rooms', channels.slice(0, 1));

  //       // once socket has been connected. connect the next socket
  //       socket3 = io.connect(socketURL, options);
  //       checkMessage(socket3);

  //       socket3.on('connect', () => {
  //         socket3.emit('join-rooms', channels.slice(1));
  //         // send out messages to specific rooms
  //         socket1.emit('message', { room: channels[0], msg: message, userId: 1, chatroomId: 1 });

  //         // this listener is to make sure that the total amount of messages recieved in the room
  //         setTimeout(() => {
  //           expect(messages).equal(2);
  //           socket1.disconnect();
  //           socket2.disconnect();
  //           socket3.disconnect();
  //           done();
  //         }, 500);
  //       });

  //     });
  //   });
  // });
});
