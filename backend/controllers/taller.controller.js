const Taller = require('../models/Taller');

// Crear nuevo taller
const crearTaller = async (req, res) => {
  try {
    const nuevoTaller = new Taller(req.body);
    const tallerGuardado = await nuevoTaller.save();
    res.status(201).json(tallerGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el taller', error });
  }
};

// Obtener todos los talleres
const obtenerTalleres = async (req, res) => {
  try {
    const talleres = await Taller.find().populate('responsable convocatoriaID');
    res.status(200).json(talleres);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener talleres', error });
  }
};

// Obtener un taller por ID
const obtenerTallerPorId = async (req, res) => {
  try {
    const taller = await Taller.findById(req.params.id).populate('responsable convocatoriaID');
    if (!taller) return res.status(404).json({ mensaje: 'Taller no encontrado' });
    res.status(200).json(taller);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el taller', error });
  }
};

// Actualizar un taller
const actualizarTaller = async (req, res) => {
  try {
    const tallerActualizado = await Taller.findByIdAndUpdate(
      req.params.id,
      { ...req.body, tmst_modifier: new Date() },
      { new: true }
    );
    if (!tallerActualizado) return res.status(404).json({ mensaje: 'Taller no encontrado' });
    res.status(200).json(tallerActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el taller', error });
  }
};

// Eliminar (desactivar) un taller
const desactivarTaller = async (req, res) => {
  try {
    const taller = await Taller.findByIdAndUpdate(
      req.params.id,
      { status: false, fechaFin: new Date(), tmst_modifier: new Date() },
      { new: true }
    );
    if (!taller) return res.status(404).json({ mensaje: 'Taller no encontrado' });
    res.status(200).json({ mensaje: 'Taller desactivado con éxito', taller });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al desactivar el taller', error });
  }
};

module.exports = {
  crearTaller,
  obtenerTalleres,
  obtenerTallerPorId,
  actualizarTaller,
  desactivarTaller
};
