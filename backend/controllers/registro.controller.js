// backend/controllers/registroController.js
const Registro = require('../models/Registro');
const Taller = require('../models/Taller');

const crearRegistro = async (req, res) => {
  try {
    const { alumno, taller, convocatoria } = req.body;

    // Verificar si ya está registrado
    const yaExiste = await Registro.findOne({ alumno, taller });
    if (yaExiste) return res.status(400).json({ message: 'Ya estás registrado en este taller' });

    // Validar cupo
    const tallerDoc = await Taller.findById(taller);
    const registrados = await Registro.countDocuments({ taller, status: { $in: ['preregistro', 'confirmado'] } });
    if (registrados >= tallerDoc.cupoMaximo) {
      return res.status(400).json({ message: 'Cupo lleno' });
    }

    const nuevoRegistro = new Registro({ alumno, taller, convocatoria });
    await nuevoRegistro.save();

    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar', error });
  }
};

const listarRegistros = async (req, res) => {
  try {
    const registros = await Registro.find()
      .populate('alumno', 'name email')
      .populate('taller', 'nombre')
      .populate('convocatoria', 'fecha');
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registros', error });
  }
};

const cambiarEstadoRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const registro = await Registro.findByIdAndUpdate(id, { status }, { new: true });
    res.json(registro);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estado', error });
  }
};

module.exports = {
  crearRegistro,
  listarRegistros,
  cambiarEstadoRegistro,
};
