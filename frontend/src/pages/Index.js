import Card from "../components/Card";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] p-6 font-sans">
      <div className="bg-white rounded-lg shadow p-6 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input type="checkbox" className="hidden peer" />
            <div
              className="burger w-8 h-6 flex flex-col justify-between items-center cursor-pointer"
              tabIndex="0"
            >
              <div className="flex items-center gap-2" style={{ marginRight: "50px" }}>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-white font-bold">
                  P
                </div>
                <span className="text-gray-700 font-medium">Perfil</span>
              </div>
            </div>
            <nav className="popup-window absolute right-0 mt-2 w-48 bg-white rounded shadow  p-4 hidden peer-checked:block z-50">
              <p className="text-sm font-semibold text-gray-600 mb-2">Acciones</p>
              <ul className="space-y-2">
                <li className="border-t pt-2 mt-2">
                  <button 
                    className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800"
                    style={{ 
                      backgroundColor: "white",
                      border: "2px solid "
                     }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y2="18" x2="6" y1="6" x1="18"></line>
                      <line y2="18" x2="18" y1="6" x1="6"></line>
                    </svg>
                    <span>Cerrar sesión</span>
                  </button>
                </li>
              </ul>
            </nav>
          </label>
          
        </div>
      </div>

      {/* Grid layout for cards */}
      <div className="bg-white rounded-lg shadow p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {Array(9).fill(0).map((_, index) => (
          <Card
            key={index}
            title="Ejemplaxo"
            description="Lorem ipsum as dolor is miet"
            encargado="pepe aguilar"
            members={12}
          />
        ))}
      </div>
    </div>
  );
}
