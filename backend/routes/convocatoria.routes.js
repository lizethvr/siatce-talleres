const express = require('express');
const router = express.Router();
const convocatoriaController = require('../controllers/convocatoria.controller');

// Rutas CRUD para convocatoria
router.post('/', convocatoriaController.crearConvocatoria);
router.get('/', convocatoriaController.obtenerConvocatorias);
router.get('/:id', convocatoriaController.obtenerConvocatoriaPorId);
router.put('/:id', convocatoriaController.actualizarConvocatoria);
router.delete('/:id', convocatoriaController.eliminarConvocatoria);

module.exports = router;
