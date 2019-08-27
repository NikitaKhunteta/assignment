const express = require('express');
const { resolve } = require('path');
const logger = require('./util//logger');
const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');
const fetchHotels = require('./controllers');

const app = express();
app.get('/api/getHotelsList', fetchHotels);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  return logger.appStarted(port, prettyHost);
});
