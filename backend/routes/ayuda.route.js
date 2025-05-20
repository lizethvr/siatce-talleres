const express = require('express')
const ayudaController = require('../controllers/ayuda.controller')

const router = express.Router();

router.post('/help', ayudaController)

module.exports = router