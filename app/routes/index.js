const ledRoutes = require('./ledRoutes');

module.exports = function(app, db) {
  ledRoutes(app, db);
}
