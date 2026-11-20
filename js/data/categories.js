/**
 * Clasificación de la flota: categorías (menú principal) y tipos (submenú).
 *
 * Cada aeronave de aircraftData lleva un `type` que debe existir aquí.
 * Para añadir un tipo nuevo, añádelo en `types` de su categoría; el menú,
 * los filtros y los contadores se generan solos.
 */
const fleetCategories = [
  {
    id: "combate",
    label: "Combate",
    icon: "⚔️",
    types: [
      { id: "caza", label: "Caza y multirrol" },
      { id: "ataque", label: "Ataque" },
      { id: "bombardero", label: "Bombardero" }
    ]
  },
  {
    id: "vigilancia",
    label: "Vigilancia e inteligencia",
    icon: "📡",
    types: [
      { id: "patrulla", label: "Patrulla marítima y SAR" },
      { id: "reconocimiento", label: "Reconocimiento" },
      { id: "uav", label: "UAV (drones)" }
    ]
  },
  {
    id: "apoyo",
    label: "Transporte y apoyo",
    icon: "📦",
    types: [
      { id: "transporte", label: "Transporte" },
      { id: "cisterna", label: "Cisterna" }
    ]
  },
  {
    id: "ensenanza",
    label: "Enseñanza",
    icon: "🎓",
    types: [
      { id: "entrenamiento", label: "Entrenadores" }
    ]
  },
  {
    id: "helicopteros",
    label: "Helicópteros",
    icon: "🚁",
    types: [
      { id: "helisar", label: "SAR, CSAR y operaciones especiales" },
      { id: "heliescuela", label: "Enseñanza" },
      { id: "helivip", label: "Transporte de autoridades" }
    ]
  }
];

/** Estados por los que se puede filtrar (campo `badge` de cada aeronave). */
const fleetStatuses = [
  { id: "actual", label: "Flota actual", badges: ["active", "order", "retire"] },
  { id: "active", label: "Operativas", badges: ["active"] },
  { id: "order", label: "En pedido / expansión", badges: ["order"] },
  { id: "retire", label: "En retirada", badges: ["retire"] },
  { id: "historic", label: "Históricas (retiradas)", badges: ["historic"] },
  { id: "all", label: "Todas las épocas", badges: ["active", "order", "retire", "historic"] }
];
