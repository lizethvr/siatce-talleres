// backend/controllers/notificacionController.js
const Notificacion = require('../models/Notificacion');

const crearNotificacion = async (req, res) => {
  try {
    const { usuario, mensaje } = req.body;

    const notificacion = new Notificacion({ usuario, mensaje });
    await notificacion.save();

    res.status(201).json(notificacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear notificación', error });
  }
};

const listarNotificaciones = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const notificaciones = await Notificacion.find({ usuario: usuarioId }).sort({ fecha: -1 });
    res.json(notificaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener notificaciones', error });
  }
};

const marcarComoLeida = async (req, res) => {
  try {
    const { id } = req.params;

    const notificacion = await Notificacion.findByIdAndUpdate(id, { leido: true }, { new: true });
    res.json(notificacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al marcar como leída', error });
  }
};

module.exports = {
  crearNotificacion,
  listarNotificaciones,
  marcarComoLeida,
};
