const SocketListeners = require('./socket_listeners.js');
const models = require('../../db/models');

module.exports = ((app, io) => {
  io.on('connection', (socket) => {
    socket.on('connection-name', (user) => {
      io.sockets.emit('new user', `${user.username} has joined.`);
    });

    socket.on('join-classroom', (classroom) => {
      socket.join(classroom);
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      socket.emit('rooms-joined', rooms);
    });

    socket.on('add-vote', ({ comment, lessonId }) => {
      models.vote.create({
        lessonId,
        comment,
      })
      .then((vote) => {
        console.log(vote);
      });
    });

    const socketOn = new SocketListeners(socket);
    socketOn.disconnectSocket(socket);
  });
});
