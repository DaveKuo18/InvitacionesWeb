import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F7FAFC] px-5 text-center text-[#172033]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2F80ED]">Invitaciones Web</p>
        <h1 className="mt-4 font-serif text-5xl">Invitacion no encontrada</h1>
        <p className="mt-4 text-[#667085]">Revisa la URL o volve a las demos disponibles.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#173B72] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Volver al inicio</Link>
      </div>
    </main>
  );
}
