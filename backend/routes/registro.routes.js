const express = require('express')
const router = express.Router()
const  {
  crearRegistro,
  listarRegistros,
  cambiarEstadoRegistro,
} = require('../controllers/registro.controller')

router.post('/', crearRegistro)
router.get('/', listarRegistros)
router.put('/:id', cambiarEstadoRegistro)