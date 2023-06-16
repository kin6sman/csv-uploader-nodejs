const csv = require('csv-parser');
const fs = require('fs');
const CSV = require('../models/csvModel');

exports.uploadCSV = (req, res) => {
  const results = [];
  
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      CSV.insertMany(results, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.send('File uploaded and data stored successfully!');
        }
      });
    });
};
