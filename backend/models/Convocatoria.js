const mongoose = require('mongoose')

const convocatoriaSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
    match: /^\d{4}[AB]$/, // Ejemplo: 2025A o 2025B
  },
  responsable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  talleres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Taller',
  }],
  status: {
    type: Number,
    enum: [0, 1], // 0 = cerrada, 1 = activa
    default: 1,
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

const Convocatoria = mongoose.model('Convocatoria', convocatoriaSchema);

export default Convocatoria;
