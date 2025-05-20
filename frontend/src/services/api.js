import axios from 'axios';

// Configura la URL base de la API.  Esto debería estar en un archivo de configuración.
const API_BASE_URL = 'http://localhost:5000/api'; // Cambiar a la URL del servidor

// Configura los encabezados por defecto.  Esto es útil para enviar el token JWT.
const defaultHeaders = () => {
    const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
    if (token) {
        return {
            Authorization: `Bearer ${token}`,
        };
    }
    return {};
};

const api = {
    // Función para registrar un usuario.
    register: async (userData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
            return response.data;
        } catch (error) {
            // Manejar errores de registro (por ejemplo, mostrar un mensaje al usuario)
            console.error("Error en registro:", error.response?.data || error);
            throw error.response?.data || error; // Re-lanzar para que el componente pueda manejarlo
        }
    },

    // Función para iniciar sesión.
    login: async (credentials) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
            return response.data;
        } catch (error) {
            // Manejar errores de inicio de sesión (por ejemplo, mostrar un mensaje de error)
            console.error("Error en login:", error.response?.data || error);
            throw error.response?.data || error;
        }
    },

    // Función para obtener el perfil del usuario.  Esta función requiere autenticación.
    getProfile: async () => {
        try {
            const headers = defaultHeaders(); // Obtener los encabezados con el token
            const response = await axios.get(`${API_BASE_URL}/users/profile`, { headers });
            return response.data;
        } catch (error) {
            // Manejar errores de autenticación (por ejemplo, redirigir al inicio de sesión)
            console.error("Error en perfil:", error.response?.data || error);
            throw error.response?.data || error;
        }
    },
      // Función para obtener todos los usuarios.  Esta función requiere autenticación y rol de administrador.
      getAllUsers: async () => {
        try {
            const headers = defaultHeaders();
            const response = await axios.get(`${API_BASE_URL}/users`, { headers }); // Asegúrate de que tu ruta en el backend sea /api/users
            return response.data;
        } catch (error) {
            console.error("Error al obtener usuarios:", error.response?.data || error);
            throw error.response?.data || error;
        }
    },

    // Función genérica para hacer otras peticiones
    request: async (method, url, data = {}, headers = {}) => {
      try {
        const allHeaders = { ...defaultHeaders(), ...headers };
        const response = await axios({
          method,
          url: `${API_BASE_URL}${url}`,
          data,
          headers: allHeaders,
        });
        return response.data;
      } catch (error) {
        console.error(`Error en la petición ${method} ${url}:`, error.response?.data || error);
        throw error.response?.data || error;
      }
    }
};

export default api;