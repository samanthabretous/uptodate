const SocketListeners = require('./socket_listeners.js');
const models = require('../../db/models');

const findAllVotes = lessonId => (
  models.vote.findAll({
    where: {
      lessonId,
    },
    attributes: ['topic', 'id', 'numberOfVotes'],
    order: [['numberOfVotes', 'DESC']],
  })
);

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

    socket.on('create-vote', ({ topic, lessonId }) => {
      models.vote.create({
        topic,
        lessonId,
      })
      .then(() => findAllVotes(lessonId))
      .then((votes) => {
        io.emit('update-votes', votes);
      });
    });

    socket.on('increase-vote', ({ voteId, lessonId }) => {
      models.vote.findById(voteId)
        .then(vote => vote.increment('numberOfVotes'))
        .then(() => findAllVotes(lessonId))
        .then(votes => io.emit('update-votes', { votes, lesson: lessonId }));
    });
    
    socket.on('decrease-vote', ({ voteId, lessonId }) => {
      models.vote.findById(voteId)
      .then(vote => vote.decrement('numberOfVotes'))
      .then(() => findAllVotes(lessonId))
      .then(votes => io.emit('update-votes', { votes, lesson: lessonId }));
    });


    const socketOn = new SocketListeners(socket);
    socketOn.disconnectSocket(socket);
  });
});
