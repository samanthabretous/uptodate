const app = require('./server/web');
const sequelizeConnection = require('./server/web/db/models').sequelize;
const environmentVariables = require('./server/web/env');
const seed = require('./server/web/seed');

sequelizeConnection
.authenticate()
.then(sequelizeConnection.sync())
.then(() => {
// this if statement will prevent our express server and test server
// (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
    app.listen(environmentVariables.PORT, () => console.log(`Listening on port ${environmentVariables.PORT}`));
  }
})
.catch(err => console.log('Unable to connect to the database:', err));
