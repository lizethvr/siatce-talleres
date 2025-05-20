import Card from "../components/Card";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] p-6 font-sans">
      <div className="bg-white rounded-lg shadow p-6 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-white font-bold">
            P
          </div>
          <span className="text-gray-700 font-medium">Profile</span>
        </div>
      </div>

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