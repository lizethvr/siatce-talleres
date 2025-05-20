const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB  = require('./config/db')
dotenv.config();
const userRoutes = require('./routes/user.routes')
const ayudaRoute = require('./routes/ayuda.route')
const convocatoriaRoute = require('./routes/convocatoria.routes')
const talleresRoutes = require('./routes/taller.routes')
const notificacionRoute = require('./routes/notificacion.routes')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.get("/", (req, res) => {
  res.send("¡API de Talleres en funcionamiento!");
});

app.use('/api/users', userRoutes);{}
app.use('/api/ayuda', ayudaRoute);
app.use('/api/convocatorias', convocatoriaRoute)
app.use('/api/talleres', talleresRoutes);
app.use('/api/notificacion', notificacionRoute)

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
