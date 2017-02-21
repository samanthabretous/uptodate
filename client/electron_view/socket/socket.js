import io from 'socket.io-client';

export const socket = io.connect('http://localhost:2020');

export default () => {
  socket.on('connect', () => {

  });
};
