const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/leds/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('leds').findOne(details, (err, item) => {
      if (err) {
        res.status(404).send({ error: "Led not found."});
      } else {
        res.status(200).send(item);
      }
    })
  })

  app.post('/leds', (req, res) => {
    const led = { color: req.body.color };
    db.collection('leds').insert(led, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured.'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put('/leds/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const led = { color: req.body.color };
    db.collection('leds').update(details, led, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(led);
      }
    });
  });

  app.delete('/leds/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('leds').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Led ' + id + ' deleted!');
      }
    });
  });
};
