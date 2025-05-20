const mongoose = require('mongoose')

const horarioSchema = new mongoose.Schema({
  dia: {
    //ej. 'Lunes', 'Martes', etc.
    type: String, 
    required: true,
  },
  horaInicio: {
    // 'HH:MM' 
    type: String, 
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
}, { _id: false }); 

const tallerSchema = new mongoose.Schema({
  convocatoriaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Convocatoria',
    required: true,
  },
  nombre: {
    type: String,
    maxLength: 255,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    maxLength: 500,
    trim: true,
  },
  responsable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cupoMinimo: {
    type: Number,
    required: true,
  },
  cupoMaximo: {
    type: Number,
    required: true,
  },
  horarios: [horarioSchema], 
  inscritos: {
    type: Number,
    default: 0,
  },

  status: {
    type: Boolean,
    default: true,
  },
  ranking: {
    type: Number,
    min: 1,
    max: 5,
    default: 3,
  },

  fechaInicio: {
    type: Date,
    default: Date.now, // Se asigna cuando se crea el registro
  },
  fechaFin: {
    type: Date,
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

module.exports=tallerSchema