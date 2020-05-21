const mongoose = require('mongoose');

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb+srv://carol:!thiS0411@aircnc-qqzky.mongodb.net/aircnc?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });