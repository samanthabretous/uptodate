import io from 'socket.io-client';

export const socket = io.connect('http://localhost:2020');

export default () => {
  socket.on('connect', () => {

  });
  socket.on('vote-notification', ({ vote, lessonname }) => {
    console.log(lessonname)
    new Notification(
      lessonname,
    {
      title: lessonname,
      body: vote.topic,
    });
  });
};
