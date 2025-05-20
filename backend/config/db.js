const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config(); 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
    console.log('All gud');
    
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;