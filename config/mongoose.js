const mongoose = require('mongoose');





mongoose.connect('mongodb://0.0.0.0/csvUploads');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;