// frontend/src/App.jsx
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  // Petición al backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setMessage(response.data);
    } catch (error) {
      console.error("Error al obtener datos del backend:", error);
    }
  };

  return (
    <div className="App">
      <h1>Bienvenido al Sistema de Gestión de Talleres</h1>
      <button onClick={fetchData}>Obtener mensaje del servidor</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
