export default function Card({ title, description, encargado, members }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow task w-full">
        <h3>{title}</h3>
        <div className="flex justify-between items-start mb-2">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">{encargado}</span>
        </div>

        <p className="text-gray-700 text-sm mb-4">
            {description}
        </p>

        <div className="text-xs text-gray-500 flex justify-between items-center">
            <div className="flex gap-3 items-center">
            
            </div>
            <div className="flex items-center gap-1">
            👤👤👤 <span>{members}</span>
            </div>
        </div>
    </div>
  );
}
