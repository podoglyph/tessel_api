const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds235778.mlab.com:35778/tessel_board_api`)
