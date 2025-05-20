const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 255,
    required: true,
    trim: true,
  },
  codigo: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => Number.isInteger(value) && value.toString().length === 9,
      message: 'El código debe ser un número entero de 9 dígitos',
    },
  },
  tel: {
    type: Number,
    validate: {
      validator: (value) => !value || value.toString().length === 10,
      message: 'El teléfono debe tener 10 dígitos',
    },
  },
  email: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Correo inválido'],
  },
  status: {
    type: Boolean,
    default: true,
  },
  tipo: {
    type: Number,
    enum: [0, 1, 2, 3], // Define según roles: 0=admin, 1=extensión, 2=instructor, 3=alumno (ejemplo)
    required: true,
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
  timestamps: true, // createdAt y updatedAt automáticos
});

const User = mongoose.model('User', userSchema);

module.exports = User;
