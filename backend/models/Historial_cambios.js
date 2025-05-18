const mongoose = require('mongoose')

const historialSchema = new mongoose.Schema({
  modelo: String, // 'Taller', 'Pago', etc.
  referencia: mongoose.Schema.Types.ObjectId,
  usuario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  cambio: String,
  fecha: { 
    type: Date, 
    default: Date.now 
  },
});

const historial_cambios = mongoose.model('historial_cambios', historialSchema);

module.exports = historial_cambios