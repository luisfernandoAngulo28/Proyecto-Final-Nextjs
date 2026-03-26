"use client";
import Banner from "@/components/Banner";
import SerieCard from "@/components/SerieCard";
import CategoriesSection from "@/components/CategoriesSection";
import { useGetSeries } from "@/hooks/useGetSeries";
import SkeletonCard from "@/components/SkeletonCard";
import { normalizeGenre } from "@/utils/normalize";

export default function Home() {
  const { series, loading, error } = useGetSeries();

  const categories = [
    ...new Set(
      series
        .flatMap((serie) => serie.genero.split(",").map((g) => normalizeGenre(g)))
        .sort((a, b) => a.localeCompare(b))
    ),
  ];

  return (
    <div className="bg-[#0a0a0b] min-h-screen">
      <Banner />
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <section className="px-6 py-14">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>
        ) : error ? (
          <section className="px-6 py-14 text-center text-red-500 font-bold">
            Error al cargar las categorías
          </section>
        ) : (
            <div className="animate-fade-in space-y-16 pb-20">
              <CategoriesSection categories={categories} />
              
              {/* SECCION MAS VALORADAS */}
              {series.some((s) => Number(s.calificacion) >= 8.5) && (
                <section className="px-6 max-w-7xl mx-auto">
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Más Valoradas</h2>
                      <p className="text-gray-500 text-sm mt-2">Las joyas de NextFLIX que no puedes perderte</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {series
                      .filter((s) => Number(s.calificacion) >= 8.5)
                      .slice(0, 5)
                      .map((serie, index) => (
                        <div 
                          key={serie.id}
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <SerieCard
                            title={serie.titulo}
                            description={serie.sinopsis}
                            image={serie.urlPortada}
                            category={normalizeGenre(serie.genero.split(",")[0])}
                            estreno={serie.estreno}
                            calificacion={serie.calificacion}
                            plataforma={serie.plataforma}
                          />
                        </div>
                      ))}
                  </div>
                </section>
              )}
            </div>
        )}
      </div>
    </div>
  );
}
