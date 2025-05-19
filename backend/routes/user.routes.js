const express = require('express');
const userController = require('../controllers/user.controller') // Importa el controlador

const router = express.Router();

router.post('/register', userController.registerUser); //crear 
router.post('/login', userController.loginUser);

module.exports = router;