// Login.jsx
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

        <div className="form-box">
            <form className="form">
                <span class="title">Inicio de Sesión</span>
                <span class="subtitle">Ingresa tu código y contraseña.</span>
                <div class="form-container">
                        <input type="text" class="input" placeholder="Código de estudiante"/>
                        <input type="password" class="input" placeholder="Contraseña"/>
                </div>

                <button>Iniciar sesión</button>
            </form>
        </div>
        
    </div>
  );
}