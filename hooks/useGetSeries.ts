"use client";

import { useEffect, useState } from "react";
import { GetSeriesResponse } from "../interfaces/get-series.interface";
import { getSeries } from "../services/get-series.service";

export function useGetSeries() {
  const [series, setSeries] = useState<GetSeriesResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Estado para manejar errores

  // Función para cargar las series desde la API
  const fetchSeries = async () => {
    setLoading(true);
    try {
      const data = await getSeries();
      setSeries(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false); // Aseguramos que el estado de carga se actualice al finalizar la petición
    }
  };

  useEffect(() => {
    fetchSeries(); // Cargamos las series al montar el componente
  }, []);

  return {
    series,
    loading,
    error,
    refetch: fetchSeries, // Función para recargar las series desde la API
  };
}
