/**
 * Datos de aeronaves del Ejército del Aire y del Espacio
 * Para añadir una nueva aeronave: copia un objeto y rellena los campos.
 * Las imágenes deben estar en la carpeta /img/
 */

const aircraftData = [
  {
    id: "eurofighter",
    name: "Eurofighter Typhoon (C.16)",
    role: "Caza multirrol",
    type: "caza",
    fleet: 67,
    onOrder: 45,
    unit: "Ala 11, 14 y 46",
    status: "En expansión (Halcón)",
    badge: "order",
    image: "img/eurofighter.jpg",
    description: "Principal caza de superioridad aérea y ataque. España opera Tranche 2/3 y ha encargado 45 nuevos Tranche 4 (programa Halcón).",
    specs: {
      "Velocidad máxima": "Mach 2",
      "Techo de servicio": "19.812 m",
      "Alcance": "2.900 km",
      "Motor": "2 × Eurojet EJ200",
      "Armamento": "Cañón 27 mm + misiles AA/AS",
      "Tripulación": "1"
    }
  },
  {
    id: "hornet",
    name: "EF-18 Hornet (C.15)",
    role: "Caza multirrol",
    type: "caza",
    fleet: 81,
    onOrder: 0,
    unit: "Ala 12, 15 y 46",
    status: "Retiro gradual Canarias (dic 2026)",
    badge: "retire",
    image: "img/ef18.jpg",
    description: "Caza multirrol estadounidense en servicio desde 1986. Está siendo sustituido progresivamente por el Eurofighter.",
    specs: {
      "Velocidad máxima": "Mach 1.8",
      "Techo de servicio": "15.240 m",
      "Alcance": "2.000+ km",
      "Motor": "2 × GE F404",
      "Armamento": "Cañón 20 mm + misiles y bombas",
      "Tripulación": "1 o 2"
    }
  },
  {
    id: "f5m",
    name: "Northrop F-5M",
    role: "Entrenador avanzado de combate",
    type: "caza",
    fleet: 19,
    onOrder: 0,
    unit: "Ala 23 (Talavera)",
    status: "A retirar (Hürjet desde 2028)",
    badge: "retire",
    image: "img/f5m.jpg",
    description: "Entrenador avanzado de combate. Seguirá formando pilotos hasta la llegada del Hürjet.",
    specs: {
      "Velocidad máxima": "Mach 1.6",
      "Techo de servicio": "15.800 m",
      "Alcance": "1.400 km",
      "Motor": "2 × GE J85",
      "Tripulación": "2"
    }
  },
  {
    id: "a330mrtt",
    name: "Airbus A330 MRTT",
    role: "Cisterna / Transporte estratégico",
    type: "transporte",
    fleet: 3,
    onOrder: 0,
    unit: "Ala 45 (Torrejón)",
    status: "Flota completada 20/10/2026",
    badge: "active",
    image: "img/a330mrtt.jpg",
    description: "Avión cisterna y de transporte multimisión. Flota de tres unidades completada el 20 de octubre de 2026.",
    specs: {
      "Capacidad combustible": "111 toneladas",
      "Alcance": "16.000 km",
      "Autonomía": "+18 horas",
      "Sistema reabastecimiento": "Manguera y cesta"
    }
  },
  {
    id: "a400m",
    name: "Airbus A400M Atlas",
    role: "Transporte estratégico/táctico",
    type: "transporte",
    fleet: 14,
    onOrder: 6,
    unit: "Ala 31 (Zaragoza)",
    status: "→ 16 antes de fin 2026 · Objetivo 20",
    badge: "order",
    image: "img/a400m.jpg",
    description: "Avión de transporte militar de nueva generación. Fabricado en Sevilla. La flota crecerá hasta 20 unidades.",
    specs: {
      "Carga máxima": "37 toneladas",
      "Alcance con carga": "3.300 km",
      "Velocidad de crucero": "780 km/h",
      "Motor": "4 × Europrop TP400"
    }
  },
  {
    id: "c295",
    name: "Airbus C295 / CN235",
    role: "Transporte táctico / Patrulla marítima",
    type: "transporte",
    fleet: 35,
    onOrder: 34,
    unit: "Varias (Ala 35...)",
    status: "+34 C295 en pedido",
    badge: "order",
    image: "img/c295.jpg",
    description: "Familia de aviones de transporte táctico y vigilancia marítima fabricados por Airbus en España.",
    specs: {
      "Carga útil": "9 t (C295)",
      "Alcance": "4.500+ km",
      "Versiones": "Transporte, MPA, SAR"
    }
  },
  {
    id: "pc21",
    name: "Pilatus PC-21",
    role: "Entrenamiento básico y avanzado",
    type: "entrenamiento",
    fleet: 31,
    onOrder: 9,
    unit: "Academia General del Aire",
    status: "+9 en pedido",
    badge: "order",
    image: "img/pc21.jpg",
    description: "Entrenador turbohélice de última generación. Sustituyó al C-101 en San Javier.",
    specs: {
      "Velocidad máxima": "685 km/h",
      "Techo": "11.580 m",
      "Motor": "PT6A-68B"
    }
  },
  {
    id: "hurjet",
    name: "TAI Hürjet",
    role: "Entrenador de combate avanzado",
    type: "entrenamiento",
    fleet: 0,
    onOrder: 30,
    unit: "Futuro (Ala 23)",
    status: "Entregas desde 2028 · Posible ampliación a 45",
    badge: "order",
    image: "img/hurjet.jpg",
    description: "Entrenador a reacción turco seleccionado para sustituir al F-5M.",
    specs: {
      "Velocidad máxima": "Mach 1.4",
      "Techo": "13.700 m",
      "Motor": "GE F404"
    }
  },
  {
    id: "mq9",
    name: "MQ-9A Reaper",
    role: "UAV de vigilancia y ataque",
    type: "uav",
    fleet: 4,
    onOrder: 0,
    unit: "Escuadrón de RPAS",
    status: "Armamento pedido en 2025",
    badge: "active",
    image: "img/mq9.jpg",
    description: "Dron MALE. Actualmente en configuración de vigilancia; se ha pedido su armamento.",
    specs: {
      "Autonomía": "27+ horas",
      "Techo": "15.000 m",
      "Alcance": "1.850 km"
    }
  },
  {
    id: "nh90",
    name: "NH90 / Super Puma / S-76",
    role: "Helicópteros SAR y Operaciones Especiales",
    type: "helicoptero",
    fleet: 21,
    onOrder: 18,
    unit: "Ala 48 y 49",
    status: "+12 NH90 y 6 H175M en pedido",
    badge: "order",
    image: "img/nh90.jpg",
    description: "Flota de helicópteros para búsqueda y salvamento y operaciones especiales.",
    specs: {
      "Misiones": "SAR, CSAR, Operaciones Especiales",
      "Modelos": "NH90, AS332, S-76"
    }
  }
];
