require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const db = require('./config/db');
const LedsController = require('./lib/controllers/ledsController');
const TesselBoard = 'http://stark-tesselator.local:8888';

// app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.use('/leds', LedsController);

app.use('/camera', function(req, res, err) {
  res.redirect(`${TesselBoard}/camera`);
});

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
