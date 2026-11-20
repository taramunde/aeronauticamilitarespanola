/**
 * Clasificación de la flota: categorías (menú principal) y tipos (submenú).
 *
 * Cada aeronave de aircraftData lleva un `type` que debe existir aquí.
 * Para añadir un tipo nuevo, añádelo en `types` de su categoría; el menú,
 * los filtros y los contadores se generan solos.
 * `icon` es el trazado (atributo d) de un icono SVG de 24×24 en línea.
 */
const fleetCategories = [
  {
    id: "combate",
    label: "Combate",
    icon: "M12 2.5l1.6 6.2 7.4 4.3v1.8l-7.2-2-.8 5 2.8 2v1.7L12 20.6l-3.8.9v-1.7l2.8-2-.8-5-7.2 2V13l7.4-4.3z",
    types: [
      { id: "caza", label: "Caza y multirrol" },
      { id: "ataque", label: "Ataque" },
      { id: "bombardero", label: "Bombardero" }
    ]
  },
  {
    id: "vigilancia",
    label: "Vigilancia e inteligencia",
    icon: "M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M7.8 16.2a6 6 0 0 1 0-8.4 M16.2 7.8a6 6 0 0 1 0 8.4 M4.9 19.1a10 10 0 0 1 0-14.2 M19.1 4.9a10 10 0 0 1 0 14.2",
    types: [
      { id: "patrulla", label: "Patrulla marítima y SAR" },
      { id: "reconocimiento", label: "Reconocimiento" },
      { id: "uav", label: "UAV (drones)" }
    ]
  },
  {
    id: "apoyo",
    label: "Transporte y apoyo",
    icon: "M21 7.5l-9-4.5-9 4.5 9 4.5 9-4.5z M3 7.5v9l9 4.5 9-4.5v-9 M12 12v9",
    types: [
      { id: "transporte", label: "Transporte" },
      { id: "cisterna", label: "Cisterna" }
    ]
  },
  {
    id: "ensenanza",
    label: "Enseñanza",
    icon: "M22 9.5L12 4.5 2 9.5l10 5 10-5z M6 11.5V17c3 2.2 9 2.2 12 0v-5.5 M22 9.5V15",
    types: [
      { id: "entrenamiento", label: "Entrenadores" }
    ]
  },
  {
    id: "helicopteros",
    label: "Helicópteros",
    icon: "M3 4.5h18 M12 4.5v3.5 M5.5 12.5a6.5 4.5 0 0 1 13 0v.5a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3z M18.5 12h3.5 M9 16l-1.5 3.5h9L15 16",
    types: [
      { id: "helisar", label: "SAR, CSAR y operaciones especiales" },
      { id: "heliescuela", label: "Enseñanza" },
      { id: "helivip", label: "Transporte de autoridades" }
    ]
  }
];

/** Estados por los que se puede filtrar (campo `badge` de cada aeronave). */
const fleetStatuses = [
  { id: "actual", label: "Flota actual", hint: "En servicio, en pedido y en retirada", badges: ["active", "order", "retire"] },
  { id: "active", label: "Operativas", dot: "active", badges: ["active"] },
  { id: "order", label: "En pedido / expansión", dot: "order", badges: ["order"] },
  { id: "retire", label: "En retirada", dot: "retire", badges: ["retire"] },
  { id: "historic", label: "Históricas", hint: "Ya retiradas del servicio", dot: "historic", badges: ["historic"] },
  { id: "all", label: "Todas las épocas", hint: "Actuales e históricas", badges: ["active", "order", "retire", "historic"] }
];
