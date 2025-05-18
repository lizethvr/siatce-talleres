const express = require('express');
const multer = require('multer');
const { subirComprobante } = require('../controllers/pagosController');

const router = express.Router();

// Configura multer
const upload = multer({ dest: 'uploads/' }); // carpeta temporal

router.post('/subir', upload.single('comprobante'), subirComprobante);

module.exports = router;
