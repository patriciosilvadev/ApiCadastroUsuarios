const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testedb', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;