 const mongoose = require('mongoose')

const notificacionSchema = new mongoose.Schema({
  usuario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  mensaje: String,
  leido: { 
    type: Boolean, 
    default: false 
  },
  fecha: { 
    type: Date, 
    default: Date.now 
  },
});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

module.exports = Notificacion