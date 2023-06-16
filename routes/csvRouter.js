const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

const csvController = require('../controllers/csvController');

router.post('/upload', upload.single('csv'), csvController.uploadCSV);

module.exports = router;
