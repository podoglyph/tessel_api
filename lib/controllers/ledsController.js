const Led = require('../models/Led');
const express = require('express');
const request = require('request');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const externalAddress = process.env.IP
const internalAddress = 'https://stark-tesselator.local:8888'

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    Led.create({
        color: req.body.color,
        index: req.body.index,
        isOn: req.body.isOn
    },
    function (err, led) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");

        res.status(200).send(led);
    });
});

router.get('/', function (req, res) {
    Led.find({}, function (err, leds) {
        if (err) return res.status(500).send("There was a problem finding the leds.");
        res.status(200).send(leds);
    });
});

router.get('/:id', function (req, res) {
    Led.findById(req.params.id, function (err, led) {
        if (err) return res.status(500).send("There was a problem finding the led.");
        if (!led) return res.status(404).send("No led found.");
        res.status(200).send(led);
    });
});

router.delete('/:id', function (req, res) {
    Led.findByIdAndRemove(req.params.id, function (err, led) {
        if (err) return res.status(500).send("There was a problem deleting the led.");
        res.status(200).send("Led "+ led.color +" was deleted.");
    });
});

router.put('/:id', function (req, res) {

    const index = req.body.index;

    function address() {
      if (process.env.NODE_ENV === 'production') {
        return externalAddress
      } else {
        return internalAddress;
      }
    }

    const url = `${address()}/leds/${index}`;

    const options = {
      url: url,
      headers: {
        'User-Agent': 'request'
      },
      agentOptions: {
        rejectUnauthorized: false
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        Led.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, led) {
            if (err) return res.status(500).send("There was a problem updating the led.");
            res.status(200).send(led);
        });
      } else {
        return response.status(404).send("There was a problem updating the led.");
      }
    }

    request(options, callback);

});

module.exports = router;
