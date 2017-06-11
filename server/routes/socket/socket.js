const _ = require('lodash');
const SocketListeners = require('./socket_listeners.js');
const models = require('../../db/models');

const findAllVotes = (lessonId, userId) => (
  models.vote.findAll({
    where: {
      lessonId,
    },
    attributes: ['topic', 'id', 'numberOfVotes'],
    order: [['numberOfVotes', 'DESC']],
    include: [{
      model: models.user,
      attributes: ['username'],
      through: {
        where: {
          userId,
        },
      },
    }],
  })
);

module.exports = ((app, io) => {
  io.on('connection', (socket) => {
    socket.on('connection-name', (user) => {
      io.sockets.emit('new user', `${user.username} has joined.`);
    });

    socket.on('join-classroom', (classrooms) => {
      _.map(classrooms, (classroom) => {
        socket.join(classroom.enrollmentCode);
      });
      const rooms = Object.keys(io.sockets.adapter.sids[socket.id]);
      socket.emit('rooms-joined', rooms);
    });

    socket.on('create-vote', ({ topic, lessonId, userId }) => {
      models.vote.create({
        topic,
        lessonId,
      })
      .then(vote => vote.addUser(userId))
      .then(() => findAllVotes(lessonId, userId))
      .then((votes) => {
        io.emit('update-votes', { votes, lesson: lessonId });
      });
    });

    socket.on('increase-vote', ({ voteId, lessonId, lessonname }) => {
      models.vote.findById(voteId)
        .then(vote => vote.increment('numberOfVotes'))
        .then((vote) => {
          io.emit('vote-notification', {vote, lessonname });
        })
        .then(() => findAllVotes(lessonId))
        .then(votes => io.emit('update-votes', { votes, lesson: lessonId }));
    });

    socket.on('decrease-vote', ({ voteId, lessonId }) => {
      models.vote.findById(voteId)
      .then(vote => vote.decrement('numberOfVotes'))
      .then(() => findAllVotes(lessonId))
      .then(votes => io.emit('update-votes', { votes, lesson: lessonId }));
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
        }))
      .then((message) => {
        socket.emit('message-added', message);
      });
    });

    socket.on('start-lesson', ({ classCode, lessonId, lessonname, instructor }) => {
      console.log(classCode, "============");
      console.log(lessonId, "============");
      io.sockets.emit('lesson-started', { lessonId, lessonname, instructor, classCode });
    });

    const socketOn = new SocketListeners(socket);
    socketOn.disconnectSocket(socket);
  });
});
