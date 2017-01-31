const app = require('./server/server');
const sequelizeConnection = require('./server/db/models');
const environmentVariables = require('./server/env');

sequelizeConnection.sequelize
.authenticate()
.then(() => {
// this if statement will prevent our express server and test server (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
    app.listen(environmentVariables.PORT, () => console.log(`Listening on port ${environmentVariables.PORT}`));
  }
})
.catch(err => console.log('Unable to connect to the database:', err));
