const express = require('express');

const app = express();
const path = require('path');
const applyExpressMiddleware = require('./middleware');

// socket
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('./routes/socket/socket')(app, io);
const UserSocketRoutes = require('./routes/user/user_middleware');

const userSocket = new UserSocketRoutes(io);
Promise.resolve(userSocket)
.then(() => {
  applyExpressMiddleware(app);
  const routes = require('./routes');
  app.use('/api', routes);

  // return our react app for all non-API routes
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client/web_view/index.html'));
  });
  return app;
});

module.exports = {
  server,
  userSocket,
};
