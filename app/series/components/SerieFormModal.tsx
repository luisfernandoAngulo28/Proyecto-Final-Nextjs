"use client";

import Dialog from "@/components/Dialog";
import { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { PostSerieRequest } from "@/interfaces/post-serie.interface";
import { usePostSerie } from "@/hooks/usePostSerie";
import { safeParse } from "valibot";
import { serieSchema } from "@/validations/serie.schema";
import { normalizeGenre } from "@/utils/normalize";

type Props = {
  trigger: React.ReactNode;
  serie?: any; // Usamos any o una interfaz de Serie completa si estuviera disponible
  onSuccess?: () => void;
};

const PREDEFINED_GENRES = [
  "Acción",
  "Aventuras",
  "Ciencia Ficción",
  "Comedia",
  "Crimen",
  "Documental",
  "Drama",
  "Fantasía",
  "Horror",
  "Misterio",
  "Romance",
  "Suspenso",
  "Terror",
  "Tragedia"
];

export default function SerieFormModal({
  trigger,
  serie,
  onSuccess,
}: Props) {
  const { createSerie, loading, error } = usePostSerie();
  const [isOpen, setIsOpen] = useState(false);
  
  const [titulo, setTitulo] = useState(serie?.titulo ?? "");
  const [sinopsis, setSinopsis] = useState(serie?.sinopsis ?? "");
  const [genero, setGenero] = useState(serie?.genero ?? "");
  const [urlPortada, setUrlPortada] = useState(serie?.urlPortada ?? "");
  const [estreno, setEstreno] = useState<number | string>(serie?.estreno ?? "");
  const [calificacion, setCalificacion] = useState<number | string>(serie?.calificacion ?? "");
  const [plataforma, setPlataforma] = useState(serie?.plataforma ?? "");
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset form when serie changes or modal opens
  useEffect(() => {
    if (serie) {
      setTitulo(serie.titulo || "");
      setSinopsis(serie.sinopsis || "");
      const firstGenre = serie.genero?.split(",")?.[0]?.trim() || "";
      setGenero(normalizeGenre(firstGenre));
      setUrlPortada(serie.urlPortada || "");
      setEstreno(serie.estreno ?? "");
      setCalificacion(serie.calificacion ?? "");
      setPlataforma(serie.plataforma || "");
    } else {
      setTitulo("");
      setSinopsis("");
      setGenero("");
      setUrlPortada("");
      setEstreno("");
      setCalificacion("");
      setPlataforma("");
    }
    setErrors({});
  }, [serie, isOpen]);

  const validateField = (fieldName: string, fieldValue: any) => {
    const updatedPayload: any = {
      titulo: fieldName === "titulo" ? fieldValue : titulo,
      sinopsis: fieldName === "sinopsis" ? fieldValue : sinopsis,
      genero: fieldName === "genero" ? fieldValue : genero,
      urlPortada: fieldName === "urlPortada" ? fieldValue : urlPortada,
      estreno: fieldName === "estreno" ? Number(fieldValue) : Number(estreno),
      calificacion: fieldName === "calificacion" ? Number(fieldValue) : Number(calificacion),
      plataforma: fieldName === "plataforma" ? fieldValue : plataforma,
    };

    const result = safeParse(serieSchema, updatedPayload);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key;
        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors((prev) => ({
        ...prev,
        [fieldName]: fieldErrors[fieldName] || "",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleSubmit = async () => {
    const payload: PostSerieRequest = {
      titulo,
      sinopsis,
      genero,
      urlPortada,
      estreno: Number(estreno),
      calificacion: Number(calificacion),
      plataforma,
    };

    const result = safeParse(serieSchema, payload);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key;
        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      await createSerie(payload);
      alert("Serie guardada exitosamente");
      setIsOpen(false);
      onSuccess?.();
    } catch (err: any) {
      console.error("Error API:", err);
      alert("Error al guardar la serie. Verifica los campos.");
    }
  };

  const inputStyle =
    "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder:text-gray-600";

  return (
    <Dialog
      trigger={trigger}
      title={serie ? "Editar Serie" : "Agregar Nueva Serie"}
      description="Completa la información de la serie para guardarla en NextFLIX."
      size="md"
      open={isOpen}
      onOpenChange={setIsOpen}
      footer={
        <div className="flex gap-3 justify-end">
          <DialogPrimitive.Close asChild>
            <button className="px-5 py-2 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all font-semibold text-sm">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-600/20 disabled:opacity-50 text-sm"
          >
            {loading ? "Guardando..." : "Guardar Serie"}
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-2">
        {/* TITULO */}
        <div className="md:col-span-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Título</label>
          <input
            className={inputStyle}
            placeholder="Ej: Stranger Things"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
              validateField("titulo", e.target.value);
            }}
          />
          {errors.titulo && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.titulo}</p>
          )}
        </div>

        {/* GENERO */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Género</label>
          <select
            className={inputStyle + " appearance-none cursor-pointer"}
            value={genero}
            onChange={(e) => {
              setGenero(e.target.value);
              validateField("genero", e.target.value);
            }}
          >
            <option value="" className="bg-[#161618]">Seleccionar género...</option>
            {PREDEFINED_GENRES.map((g: string) => (
              <option key={g} value={g} className="bg-[#161618]">
                {g}
              </option>
            ))}
          </select>
          {errors.genero && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.genero}</p>
          )}
        </div>

        {/* PLATAFORMA */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Plataforma</label>
          <input
            className={inputStyle}
            placeholder="Ej: Netflix"
            value={plataforma}
            onChange={(e) => {
              setPlataforma(e.target.value);
              validateField("plataforma", e.target.value);
            }}
          />
          {errors.plataforma && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.plataforma}</p>
          )}
        </div>

        {/* ESTRENO */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Año de Estreno</label>
          <input
            type="number"
            className={inputStyle}
            placeholder="Ej: 2024"
            value={estreno}
            onChange={(e) => {
              setEstreno(e.target.value);
              validateField("estreno", e.target.value);
            }}
          />
          {errors.estreno && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.estreno}</p>
          )}
        </div>

        {/* CALIFICACION */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Calificación (0-10)</label>
          <input
            type="number"
            step="0.1"
            className={inputStyle}
            placeholder="Ej: 8.5"
            value={calificacion}
            onChange={(e) => {
              setCalificacion(e.target.value);
              validateField("calificacion", e.target.value);
            }}
          />
          {errors.calificacion && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.calificacion}</p>
          )}
        </div>

        {/* SINOPSIS */}
        <div className="md:col-span-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">
            Sinopsis
          </label>
          <textarea
            className={inputStyle + " resize-none h-24"}
            placeholder="De qué trata la serie..."
            value={sinopsis}
            onChange={(e) => {
              setSinopsis(e.target.value);
              validateField("sinopsis", e.target.value);
            }}
          />
          {errors.sinopsis && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.sinopsis}</p>
          )}
        </div>

        {/* PORTADA */}
        <div className="md:col-span-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">
            URL de Portada
          </label>
          <input
            className={inputStyle}
            placeholder="https://..."
            value={urlPortada}
            onChange={(e) => {
              setUrlPortada(e.target.value);
              validateField("urlPortada", e.target.value);
            }}
          />
          {errors.urlPortada && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.urlPortada}</p>
          )}

          {/* VISTA PREVIA DE PORTADA */}
          {urlPortada && (
            <div className="mt-4 p-2 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center gap-2 animate-fade-in">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Vista Previa</span>
              <img 
                src={urlPortada} 
                alt="Vista previa" 
                className="max-h-48 rounded-lg shadow-2xl object-cover border border-white/10"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
