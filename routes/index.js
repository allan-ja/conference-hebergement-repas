const registrations = require('./registrations');

module.exports = function (app, db) {
    registrations(app, db);
    // Other route groups could go here, in the future
};