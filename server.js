const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const db = require('./config/db');

MongoClient.connect(db.url, (err, client) => {
  if (err) return console.log(err)
  const db = client.db('tessel_api');
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})

app.use(bodyParser.urlencoded({ extended: true }));
