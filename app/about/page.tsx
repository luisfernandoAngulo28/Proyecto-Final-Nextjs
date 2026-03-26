import React from "react";
import { Monitor, Zap, ShieldCheck, Database, Globe, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0b] min-h-screen text-white pb-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full -top-24 -left-24 w-96 h-96" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            SOBRE <span className="text-blue-600">NOSOTROS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            NextFLIX no es solo una base de datos; es una experiencia cinematográfica diseñada con las últimas tecnologías web para los amantes del séptimo arte.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-24">
        {/* Qué es NextFLIX */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight uppercase">¿Qué es NextFLIX?</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Desarrollada como un proyecto de vanguardia, NextFLIX permite a los usuarios gestionar su catálogo de series de forma profesional. Desde la integración con APIs externas hasta un sistema de filtrado avanzado, cada detalle ha sido pulido para ofrecer una interfaz premium.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex-1">
                <span className="text-blue-500 font-black text-2xl">50+</span>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Series Listadas</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex-1">
                <span className="text-blue-500 font-black text-2xl">100%</span>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Responsivo</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-1 rounded-3xl">
            <div className="bg-[#0a0a0b] rounded-[22px] p-8 border border-white/10">
              <img src="/banner.png" alt="NextFLIX App" className="rounded-xl shadow-2xl border border-white/10" />
            </div>
          </div>
        </div>

        {/* Tecnologías */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight uppercase">Tecnologías de Vanguardia</h2>
            <p className="text-gray-500 mt-2">Construido con el stack más moderno del ecosistema web</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Globe, name: "Next.js", desc: "Framework React" },
              { icon: Zap, name: "Tailwind", desc: "Diseño Atómico" },
              { icon: ShieldCheck, name: "Valibot", desc: "Validación" },
              { icon: Database, name: "API REST", desc: "Consumo Async" },
              { icon: Monitor, name: "Radix UI", desc: "Componentes" },
              { icon: Star, name: "Lucide", desc: "Iconografía" },
            ].map((tech) => (
              <div key={tech.name} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:bg-blue-600/10 hover:border-blue-500/50 transition-all duration-300">
                <tech.icon className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-sm tracking-tight">{tech.name}</h3>
                <p className="text-[10px] text-gray-600 uppercase mt-1 tracking-widest font-black">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Info */}
        <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] text-center">
          <h2 className="text-2xl font-black mb-4">DESARROLLADO POR</h2>
          <p className="text-blue-500 font-mono text-xl tracking-tighter">Luis Fernando Angulo Heredia</p>
          <div className="mt-8 flex justify-center gap-6">
            <span className="text-gray-600 text-sm uppercase tracking-widest font-bold">Next.js Advanced</span>
            <span className="text-gray-800 tracking-widest px-2">|</span>
            <span className="text-gray-600 text-sm uppercase tracking-widest font-bold">2026 Edition</span>
          </div>
        </div>
      </div>
    </div>
  );
}
