import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0b] py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-white">
            EXPLORA LAS <br/> <span className="text-blue-600">MEJORES SERIES</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Descubre nuestra colección curada de series con la mejor calidad y
            disfruta de historias que te atraparán.
          </p>
          <Link
            href="/series"
            className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-blue-600/20 inline-block"
          >
            Ver Catálogo
          </Link>
        </div>
        <div>
          <img
            src="/banner.png"
            alt="NextFLIX Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
