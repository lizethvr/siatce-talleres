const Convocatoria = require('../models/Convocatoria');

// Crear convocatoria
exports.crearConvocatoria = async (req, res) => {
  try {
    const nuevaConvocatoria = new Convocatoria(req.body);
    await nuevaConvocatoria.save();
    res.status(201).json(nuevaConvocatoria);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la convocatoria', error });
  }
};

// Obtener todas las convocatorias
exports.obtenerConvocatorias = async (req, res) => {
  try {
    const convocatorias = await Convocatoria.find().populate('talleres responsables');
    res.json(convocatorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener convocatorias', error });
  }
};

// Obtener una convocatoria por ID
exports.obtenerConvocatoriaPorId = async (req, res) => {
  try {
    const convocatoria = await Convocatoria.findById(req.params.id).populate('talleres responsables');
    if (!convocatoria) return res.status(404).json({ mensaje: 'Convocatoria no encontrada' });
    res.json(convocatoria);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la convocatoria', error });
  }
};

// Actualizar una convocatoria
exports.actualizarConvocatoria = async (req, res) => {
  try {
    const convocatoria = await Convocatoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(convocatoria);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la convocatoria', error });
  }
};

