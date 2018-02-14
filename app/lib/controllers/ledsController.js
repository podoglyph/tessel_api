const Led = require('../models/Led');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    console.log(req.body);
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
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(leds);
    });
});

module.exports = router;
