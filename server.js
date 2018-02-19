require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./config/db');
const LedsController = require('./lib/controllers/ledsController');

app.use(express.static('client'));

app.use('/leds', LedsController);

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
