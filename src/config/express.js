const logger = require('morgan');
const { json, urlencoded } = require('body-parser');

function expressConfig(app) {
  // HTTP request logger
  app.use(logger('dev'));

  // Parses json, A new body object containing the parsed data is populated on
  // the request object after the middleware
  app.use(json());
  app.use(urlencoded({ extended: true }));
}

module.exports = expressConfig;
