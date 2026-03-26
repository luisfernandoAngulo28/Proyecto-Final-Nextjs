
# Evaluación Práctica: Proyecto "NextFLIX"

Bienvenidos a la evaluación final. El objetivo es construir NextFLIX, una plataforma de
gestión de series. Deberán aplicar los conceptos aprendidos en clase, validación de
formularios, hooks, services, interfaces y consumo de APIs, adaptando la lógica de
"Productos" al nuevo contexto de "Series".

**API A UTILIZAR:**
*   Listar Series (GET): `https://nestflix.onrender.com/series`
*   Crear Serie (POST): `https://nestflix.onrender.com/series`
*   Eliminar Serie (DELETE): `https://nestflix.onrender.com/series/(id-eliminar)`

**REGLA DE IMÁGENES:** Para evitar conflictos de configuración en `next.config.js`, queda estrictamente prohibido el uso del componente `<Image />` de Next.js. Deben utilizar la etiqueta estándar de HTML `<img>` para renderizar las portadas de las series.

**REQUISITOS TÉCNICOS:**
1.  **Framework:** Uso obligatorio de Next.js
2.  **Arquitectura y Estructura del proyecto:** El proyecto debe estar organizado de forma profesional siguiendo la jerarquía utilizada en clase:
    *   `/components`
    *   `/hooks`
    *   `/services`
    *   `/interfaces`
3.  **Consumo de API:**
    *   **Listar:** Mostrar todas las series en una tarjeta (Card) atractiva.
    *   **Crear:** Formulario para añadir nuevas series (Título, Género, Sinopsis, URL Portada, etc.).
    *   **Eliminar:** Opción para borrar una serie de la base de datos.
4.  **Componentes Radix UI:** Uso de componentes reutilizables de RadixUI.
5.  **Layout de la aplicación:** Debe incluir:
    *   Navbar
    *   Footer
    *   Banner o sección principal
6.  **Enrutamiento (Routing):**
    *   Uso de rutas con Next.js
    *   Al menos:
        *   Página principal
        *   Página de gestión de series
7.  **Validaciones:** Implementar validaciones en formularios con el uso de Valibot.
8.  **Despliegue:**
    *   Subir el proyecto a GitHub
    *   Desplegar en Vercel

**ENTREGABLES:**
Deberán subir en la plataforma:
*   URL del repositorio en GitHub
*   URL de la aplicación desplegada (Vercel)

---

# Preguntas y Respuestas de la Evaluación

### Pregunta 1: Valibot
**¿Cuál es el principal beneficio de usar una librería como Valibot para validaciones?**
*   **Respuesta correcta:** c. Permite definir validaciones de forma centralizada y reutilizable.
*   **Justificación:** El principal beneficio de usar una librería como Valibot (o Zod, Yup, etc.) es que te permite definir esquemas de validación en un solo lugar. Luego, puedes reutilizar esos mismos esquemas tanto en el frontend (para validar formularios) como en el backend (para validar los datos que llegan a tu API), asegurando que las reglas sean consistentes y evitando duplicar código.

### Pregunta 2: Componentes Reutilizables
**¿Cuál es el principal beneficio de usar componentes reutilizables en una aplicación con Next.js?**
*   **Respuesta correcta:** a. Reutilizar lógica y mantener el código organizado.
*   **Justificación:** El principal beneficio de la arquitectura basada en componentes es poder reutilizar lógica y mantener el código organizado. Creas un componente una vez (por ejemplo, un `Button` o un `ProductCard`) y lo puedes usar en múltiples partes de tu aplicación. Esto evita la duplicación de código, facilita el mantenimiento y asegura una apariencia y comportamiento consistentes.

### Pregunta 3: Enrutamiento
**En Next.js, ¿qué permite el sistema de enrutamiento basado en archivos?**
*   **Respuesta correcta:** a. Generar rutas automáticamente a partir de la estructura de carpetas.
*   **Justificación:** El sistema de enrutamiento basado en archivos de Next.js permite generar rutas automáticamente a partir de la estructura de carpetas. Por ejemplo, si creas un archivo en `app/dashboard/page.tsx`, Next.js automáticamente creará la ruta `/dashboard`.

### Pregunta 4: Consumo de APIs
**¿Cuál es la mejor práctica al consumir APIs en una aplicación frontend?**
*   **Respuesta correcta:** b. Centralizar las llamadas en hooks o servicios reutilizables.
*   **Justificación:** Centralizar las llamadas a API en hooks o servicios dedicados permite reutilizar la lógica, facilita el mantenimiento (si la API cambia, solo se modifica un lugar), mantiene los componentes limpios y simplifica las pruebas.

### Pregunta 5: Seguridad en Frontend
**Ocultar botones en el frontend es suficiente para garantizar la seguridad de una aplicación.**
*   **Respuesta correcta:** Falso.
*   **Justificación:** Ocultar elementos en la UI es una medida de experiencia de usuario, no de seguridad. Un usuario puede manipular el código del frontend o llamar a la API directamente. La seguridad real debe implementarse en el backend, validando cada petición para asegurar que el usuario tiene los permisos necesarios.

### Pregunta 6: Conceptos de Seguridad
**Relaciona cada concepto con su definición:**
*   **Autenticación:** Identifica quién es el usuario.
*   **Autorización:** Define qué puede hacer el usuario.
*   **Validación:** Verifica que los datos sean correctos.

### Pregunta 7: Arquitectura de Proyecto
**¿Cuál es el principal objetivo de organizar un proyecto por capas o arquitectura (ej: components, hooks, services)?**
*   **Respuesta correcta:** b. Separar responsabilidades y facilitar mantenimiento.
*   **Justificación:** Este principio, conocido como "Separation of Concerns", hace que el código sea más fácil de entender, mantener, probar y escalar, ya que cada capa tiene una responsabilidad única y bien definida.

### Pregunta 8: Clean Code
**Clean Code implica que el código debe ser entendible, mantenible y bien estructurado.**
*   **Respuesta correcta:** Verdadero.
*   **Justificación:** La filosofía de "Clean Code" se centra en escribir código que no solo funcione, sino que también sea fácil de leer, modificar y mantener a largo plazo por cualquier desarrollador.

### Pregunta 9: Estructura de Carpetas
**Relaciona cada carpeta con su función:**
*   **Components:** UI (Interfaz de Usuario).
*   **Interfaces:** Tipos (Definiciones de tipos y estructuras de datos).
*   **Services:** APIs (Lógica para conectarse y consumir APIs externas).
*   **Hooks:** Lógica (Lógica de estado y ciclo de vida reutilizable).

### Pregunta 10: Componente Image de Next.js
**¿Cuál es la principal ventaja de usar el componente Image de Next.js?**
*   **Respuesta correcta:** c. Optimiza automáticamente las imágenes (tamaño, formato, lazy loading).
*   **Justificación:** El componente `<Image>` de Next.js mejora drásticamente el rendimiento al redimensionar imágenes, convertirlas a formatos modernos (WebP), aplicar carga diferida (lazy loading) y prevenir saltos de layout (CLS).
