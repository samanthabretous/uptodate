import io from 'socket.io-client';

export const socket = io.connect();

export default () => {
  socket.on('connect', () => {
  });
};
