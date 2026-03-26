import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">
            NEXT<span className="text-blue-600">FLIX</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Tu plataforma definitiva para descubrir, gestionar y explorar las mejores series del mundo cinematográfico. Creado con tecnología de vanguardia.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest">Navegación</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-blue-500 transition-colors">Inicio</Link></li>
            <li><Link href="/series" className="hover:text-blue-500 transition-colors">Series</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition-colors">Acerca de</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest">Contacto</h4>
          <p className="text-sm">fernando.fa671@gmail.com</p>
          <p className="text-sm mt-1 text-gray-500 italic">Desarrollado en Next.js por Luis Fernando Angulo Heredia</p>
        </div>
      </div>

      <div className="border-t border-white/5 text-center text-[10px] py-8 text-gray-600 uppercase tracking-widest">
        © {new Date().getFullYear()} NextFLIX — Todos los derechos reservados
      </div>
    </footer>
  );
}
