const express = require('express');

const app = express();
const path = require('path');
const applyExpressMiddleware = require('./middleware');
const routes = require('./routes');

// socket
const server = require('http').Server(app);
const io = require('socket.io')(server);

applyExpressMiddleware(app);
app.use('/api', routes);

// return our react app for all non-API routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'client/web_view/index.html'));
});

require('./routes/socket/socket')(app, io);

module.exports = server;
