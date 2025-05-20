const express = require('express');
const router = express.Router();
const {
  crearTaller,
  obtenerTalleres,
  obtenerTallerPorId,
  actualizarTaller,
  desactivarTaller
} = require('../controllers/talleres.controller');

router.post('/', crearTaller);
router.get('/', obtenerTalleres);
router.get('/:id', obtenerTallerPorId);
router.put('/:id', actualizarTaller);
router.delete('/:id', desactivarTaller);

module.exports = router;