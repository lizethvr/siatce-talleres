const { uploadFileToDrive } = require('../config/googleDrive');
const Pago = require('../models/Pago');
const fs = require('fs');

const FOLDER_ID = 'TU_ID_DE_CARPETA_COMPARTIDA'; // OBTENIDO DE DRIVE

const subirComprobante = async (req, res) => {
  try {
    const { usuario, taller, convocatoria } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'Archivo no enviado' });

    const url = await uploadFileToDrive(file.path, file.originalname, FOLDER_ID);

    const nuevoPago = new Pago({
      usuario,
      taller,
      convocatoria,
      imagenComprobante: url,
      simulado: false,
      aprobado: false,
    });

    await nuevoPago.save();
    fs.unlinkSync(file.path); // elimina el archivo local

    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al subir comprobante' });
  }
};

module.exports = { subirComprobante };
