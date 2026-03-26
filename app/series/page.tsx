"use client";

import SerieCard from "@/components/SerieCard";
import { useGetSeries } from "@/hooks/useGetSeries";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Pencil, Trash2, Plus } from "lucide-react";
import SerieFormModal from "./components/SerieFormModal";
import DeleteSerieModal from "./components/DeleteSerieModal";
import CategoryFilter from "./components/CategoryFilter";
import SkeletonCard from "@/components/SkeletonCard";
import { normalizeGenre } from "@/utils/normalize";

function SerieList() {
  const { series, loading, error, refetch } = useGetSeries();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const categories = [
    "all",
    ...new Set(
      series
        .flatMap((s) => s.genero.split(",").map((g) => normalizeGenre(g)))
        .sort((a, b) => a.localeCompare(b))
    ),
  ];

  const filteredSeries = series.filter((serie) => {
    const matchesCategory =
      selectedCategory === "all" ||
      serie.genero
        .split(",")
        .some((g) => normalizeGenre(g) === selectedCategory);

    const matchesSearch =
      !query ||
      serie.titulo.toLowerCase().includes(query) ||
      serie.sinopsis.toLowerCase().includes(query) ||
      serie.genero.toLowerCase().includes(query) ||
      serie.plataforma.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0a0a0b] min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-white tracking-tight">Series</h1>

        <SerieFormModal
          trigger={
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/20 mb-10 flex items-center gap-2">
              <Plus size={20} />
              Agregar Serie
            </button>
          }
          onSuccess={refetch}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
          {loading ? (
            Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          ) : error ? (
            <p className="text-red-500 font-bold">Error al cargar las series</p>
          ) : (
            filteredSeries.map((serie, index) => (
              <div 
                key={serie.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SerieCard
                  title={serie.titulo}
                  description={serie.sinopsis}
                  image={serie.urlPortada}
                  category={normalizeGenre(serie.genero.split(",")[0])}
                  estreno={serie.estreno}
                  calificacion={serie.calificacion}
                  plataforma={serie.plataforma}
                  actions={
                    <>
                      <SerieFormModal
                        serie={serie}
                        trigger={
                          <button className="text-blue-400 hover:text-white flex items-center gap-1 text-sm bg-white/5 p-1.5 rounded transition-colors">
                            <Pencil size={16} />
                          </button>
                        }
                        onSuccess={refetch}
                      />

                      <DeleteSerieModal
                        serieId={serie.id}
                        onDelete={(id) => console.log("delete", id)}
                        trigger={
                          <button className="text-red-400 hover:text-white flex items-center gap-1 text-sm bg-white/5 p-1.5 rounded transition-colors">
                            <Trash2 size={16} />
                          </button>
                        }
                        onSuccess={refetch}
                      />
                    </>
                  }
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function SeriePage() {
  return (
    <Suspense fallback={<div className="bg-[#0a0a0b] min-h-screen pt-20 text-center text-white font-bold">Cargando NextFLIX...</div>}>
      <SerieList />
    </Suspense>
  );
}
