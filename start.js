const server = require('./server/web').server;
const sequelizeConnection = require('./server/web/db/models').sequelize;
const environmentVariables = require('./server/web/env');

sequelizeConnection
.authenticate()
.then(sequelizeConnection.sync())
.then(() => {
// this if statement will prevent our express server and test server
// (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
    server.listen(environmentVariables.PORT, () => console.log(`Listening on port ${environmentVariables.PORT}`));
  }
})
.catch(err => console.log('Unable to connect to the database:', err));

module.exports = server;
