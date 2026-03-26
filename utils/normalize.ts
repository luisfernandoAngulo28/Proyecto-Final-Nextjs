export function normalizeGenre(genre: string): string {
  if (!genre) return "Otros";
  
  const mapping: Record<string, string> = {
    "action": "Acción",
    "accion": "Acción",
    "acción": "Acción",
    "adventure": "Aventuras",
    "aventuras": "Aventuras",
    "crimen": "Crimen",
    "trajedia": "Tragedia",
    "ficcion": "Ficción",
    "ficción": "Ficción",
    "dramas": "Drama",
    "drama": "Drama",
    "comedia": "Comedia",
    "serie": "Serie",
    "fantasía": "Fantasía",
    "fantasia": "Fantasía",
  };

  const clean = genre.toLowerCase().trim();
  return mapping[clean] || genre.charAt(0).toUpperCase() + genre.slice(1);
}
