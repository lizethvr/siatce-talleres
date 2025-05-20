const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Importa el modelo User
const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_jwt';

if (!JWT_SECRET) {
    console.error('ERROR: JWT_SECRET no está definido.  La aplicación no funcionará correctamente.');
}

const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id, name: user.name, tipo: user.tipo, email: user.email, codigo: user.codigo }, // Include codigo
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};

const userController = {
    registerUser: async (req, res) => {
        try {
            const { name, codigo, tel, email, tipo } = req.body;

            if (!name || !codigo || !email || !tipo) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' });
            }

            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: 'Correo electrónico no válido' });
            }

            const existingUser = await User.findOne({ $or: [{ codigo }, { email }] });
            if (existingUser) {
                return res.status(400).json({ message: 'Código o correo electrónico ya existen' });
            }

            const newUser = new User({ name, codigo, tel, email, tipo });
            const savedUser = await newUser.save();

            const token = generateToken(savedUser);

            res.status(201).json({
                message: 'Usuario registrado exitosamente',
                user: {
                    _id: savedUser._id,
                    name: savedUser.name,
                    email: savedUser.email,
                    tipo: savedUser.tipo,
                    codigo: savedUser.codigo
                },
                token
            });
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { codigo, email } = req.body;

            if (!codigo || !email) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' });
            }

            const user = await User.findOne({ codigo, email });
            if (!user) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const token = generateToken(user);

            res.status(200).json({
                message: 'Inicio de sesión exitoso',
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    tipo: user.tipo,
                    codigo: user.codigo
                },
                token
            });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
};

module.exports = userController;