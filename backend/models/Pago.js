const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  taller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Taller',
    required: true,
  },
  convocatoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Convocatoria',
    required: true,
  },
  imagenComprobante: {
    type: String, // Ruta del archivo o URL
    required: false,
  },
  simulado: {
    type: Boolean,
    default: false,
  },
  aprobado: {
    type: Boolean,
    default: false,
  },
  fechaPago: {
    type: Date,
    default: Date.now,
  },
  tmst_creator: {
    type: Date,
    default: Date.now,
  },
  tmst_modifier: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Pago = mongoose.model('Pago', pagoSchema);

module.exports = Pago;
