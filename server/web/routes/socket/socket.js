const _ = require('lodash');

module.exports = ((app, io) => {
  io.on('connection', (socket) => {
    socket.on('connection-name', (user) => {
      io.sockets.emit('new user', `${user.username} has joined.`);
    });

    socket.on('join-rooms', (userChannels) => {
      _.map(userChannels, (channel) => {
        socket.join(channel);
      });
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      socket.emit('rooms-joined', rooms);
    });

    socket.on('disconnect', () => {
      socket.leave();
    });
  });
});
