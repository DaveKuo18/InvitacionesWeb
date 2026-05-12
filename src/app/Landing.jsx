import { Link } from "react-router-dom";
import { demoInvitations } from "../data/demos/index.js";

export function Landing() {
  return (
    <main className="min-h-screen bg-[#F7FAFC] text-[#172033]">
      <section className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#2F80ED]">Invitaciones Web</p>
          <h1 className="font-serif text-5xl leading-tight sm:text-7xl">Invitaciones digitales listas para vender y escalar</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
            Una sola app con plantillas reutilizables, demos configurables, clientes reales por slug y RSVP por WhatsApp o formulario conectado a Google Sheets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo/quince-glam" className="rounded-full bg-[#173B72] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg">Ver demo</Link>
            <Link to="/i/valentina-15" className="rounded-full border border-[#CBD5E1] bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#173B72] shadow-sm">Ver cliente</Link>
          </div>
        </div>
        <div className="grid gap-4">
          {demoInvitations.map((demo) => (
            <Link key={demo.template} to={`/demo/${demo.template}`} className="group grid grid-cols-[96px_1fr] gap-4 rounded-lg border border-[#E2E8F0] bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <img src={demo.images.hero} alt="" className="h-24 w-24 rounded-md object-cover" />
              <span className="self-center">
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">{demo.eyebrow}</span>
                <span className="mt-1 block font-serif text-2xl text-[#172033]">{demo.title}</span>
                <span className="mt-2 block text-sm text-[#667085] group-hover:text-[#2F80ED]">/demo/{demo.template}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
