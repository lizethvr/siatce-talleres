const moongose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config(); // Variables de entorno del .ENV

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/talleres', { 
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // console.log(`MongoDB conectado: ${conn.connection.host}`);
    console.log('All gud');
    
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
