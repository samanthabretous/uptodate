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

    socket.on('add-message', ({ comment, userId, lessonId }) => {
      // use find or create in order to include associations
      models.discussion.create({
        comment, userId, lessonId,
      })
      .then(newMessage =>
        models.discussion.findById(newMessage.id, {
          include: [{
            model: models.user,
            attributes: ['username', 'id'],
          }],
        })
      )
      .then((message) => {
        socket.emit('message-added', message);
      });
    });

    const socketOn = new SocketListeners(socket);
    socketOn.disconnectSocket(socket);
  });
});
