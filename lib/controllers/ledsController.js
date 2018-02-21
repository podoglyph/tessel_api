const Led = require('../models/Led');
const express = require('express');
const request = require('request');
const router = express.Router();
const bodyParser = require('body-parser');

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
    if (req.body.toggle === true) {
      const index = req.body.index;
      if (process.env.NODE_ENV === "production") {
        const TesselBoard = `${process.env.IP}/leds`;
      } else {
        const TesselBoard = 'http://stark-tesselator.local:8888/leds';
      }
      request(`${TesselBoard}/${index}`, function(err, response, body) {
        if (err) return response.status(404).send("There was a problem updating the led.");
        Led.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, led) {
            if (err) return res.status(500).send("There was a problem updating the led.");
            res.status(200).send(led);
        });
      });
    }
});

module.exports = router;
