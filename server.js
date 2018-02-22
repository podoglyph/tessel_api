require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const db = require('./config/db');
const LedsController = require('./lib/controllers/ledsController');
if (process.env.NODE_ENV === "production") {
  const tesselBoard = process.env.IP;
} else {
  const tesselBoard = 'https://stark-tesselator.local:8888';
}


app.use('/static', express.static(`${__dirname}/client/build`));

app.use('/leds', LedsController);

app.use('/camera', function(req, res, err, tesselBoard) {
  res.redirect(tesselBoard + '/camera');
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
