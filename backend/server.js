// backend/server.js
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js'; // Importamos la configuración de la base de datos
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB  = require('./config/db')
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas de ejemplo
app.get("/", (req, res) => {
  res.send("¡API de Talleres en funcionamiento!");
});

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
