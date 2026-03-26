import {
  minLength,
  object,
  pipe,
  string,
  url,
} from "valibot";

export const serieSchema = object({
  titulo: pipe(
    string(),
    minLength(3, "El título debe tener al menos 3 caracteres"),
  ),
  genero: pipe(
    string(),
    minLength(3, "El género debe tener al menos 3 caracteres"),
  ),
  sinopsis: pipe(
    string(),
    minLength(10, "La sinopsis debe tener al menos 10 caracteres"),
  ),
  urlPortada: pipe(string(), url("La URL de la portada no es válida")),
});
