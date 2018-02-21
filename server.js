require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./config/db');
const LedsController = require('./lib/controllers/ledsController');

app.use(express.static('client'));

app.use('/leds', LedsController);

app.use('/camera', function(req, res, err) {
  res.redirect('http://stark-tesselator.local:8888/camera');
});

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
