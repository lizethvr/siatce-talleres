const mongoose = require('mongoose')

const registroSchema = new mongoose.Schema({
  alumno: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  taller: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Taller', 
    required: true 
  },
  convocatoria: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Convocatoria', 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['preregistro', 'confirmado', 'cancelado', 'reubicado'], 
    default: 'preregistro' 
  },
  tmst_registro: { 
    type: Date, 
    default: Date.now 
  },
});

const Registro = mongoose.model('Registro', registroSchema);

module.exports = Registro
