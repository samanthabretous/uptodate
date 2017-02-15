const SocketListeners = require('./socket_listeners.js');

module.exports = ((app, io) => {
  io.on('connection', (socket) => {
    console.log('============socket')
    socket.on('connection-name', (user) => {
      io.sockets.emit('new user', `${user.username} has joined.`);
    });

    socket.on('join-classroom', (classroom) => {
      socket.join(classroom);
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      socket.emit('rooms-joined', rooms);
    });

    const socketOn = new SocketListeners(socket);
    socketOn.disconnectSocket(socket);
  });
});
