const express = require('express');
const mongoose = require('mongoose');
const csvRouter = require('./routes/csvRouter')

mongoose.connect('mongodb://0.0.0.0/csvuploader', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use('/', csvRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
