export default function Registro() {
  return (
    <div className="p-6 space-y-4">
      <input type="text" placeholder="Nombre" className="border px-4 py-2 rounded w-full" />
      <input type="text" placeholder="Taller" className="border px-4 py-2 rounded w-full" />
      <textarea placeholder="Comentario" className="border px-4 py-2 rounded w-full"></textarea>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
    </div>
  );
}