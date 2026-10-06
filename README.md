# Alas de España

Aeronáutica militar española de 1896 a 2026: cronología, catálogo de aeronaves, comparador, mapa de bases, protagonistas, grandes vuelos y quiz.

HTML, CSS y JavaScript sin dependencias ni compilación.

## Estructura

```
img/aeronaves/         Fotos (ver LEEME.md con los 51 nombres)
index.html            Página y orden de carga de scripts
css/styles.css        Estilos (tema claro y oscuro)
js/data/              Solo datos
  config.js           Épocas, ramas y tipos
  aeronaves.js        Base de datos de aeronaves (aircraftData), con variantes
  cronologia.js       Hitos
  bases.js            Bases y unidades
  geografia.js        Contornos del mapa
  protagonistas.js    Figuras históricas
  gestas.js           Grandes vuelos
  quiz.js             Preguntas
js/app/               Solo lógica, una sección por archivo
  main.js             Arranque (siempre el último)
```

## Ampliar el catálogo

Crea `js/data/aeronaves-extra.js` con:

```js
aircraftData = aircraftData.concat([
  { id: 100, era: "actual", name: "...", designation: "...", year: 2025, yearEnd: null,
    branch: "ejercito", type: "caza", typeLabel: "Caza", crew: "1",
    image: "img/aeronaves/mi-avion.jpg", imageCredit: "",
    engine: "...", wingspan: 0, length: 0, height: 0, emptyWeight: 0, maxWeight: 0, maxSpeed: 0, range: 0, ceiling: 0, armament: "...", units: "...",
    description: "...", history: "...",
    variants: [ { name: "...", year: 2025, engine: "...", desc: "..." } ] }
]);
```

y añade su `<script>` en `index.html` después de `aeronaves.js` y antes de `js/app/`.

Prestaciones numéricas: km/h, km, m y kg.

## Publicar en GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `(root)`.
