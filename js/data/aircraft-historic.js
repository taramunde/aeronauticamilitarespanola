/**
 * Aeronaves históricas (ya retiradas) del Ejército del Aire.
 *
 * Se cargan después de aircraft.js y se añaden a aircraftData.
 * Usan badge "historic" y el campo `service` (años en servicio);
 * no cuentan en los contadores de la flota actual.
 *
 * Revisa las cifras antes de publicar: son valores nominales aproximados.
 */
aircraftData.push(
  // ===================== BOMBARDEROS =====================
  {
    id: "casa2111",
    name: "CASA 2.111 (B.2I)",
    role: "Bombardero medio",
    type: "bombardero",
    fleet: 0,
    onOrder: 0,
    service: "1950–1975",
    unit: "Alas de bombardeo de Tablada, Valenzuela y Albacete",
    status: "Retirado en 1975",
    badge: "historic",
    image: "img/casa2111.webp",
    description: "Versión española del Heinkel He 111H, fabricada por CASA en Tablada (Sevilla). La falta de motores alemanes tras 1945 llevó a montar primero Junkers Jumo y después Rolls-Royce Merlin. Fue el bombardero del Ejército del Aire durante dos décadas y actuó en la guerra de Ifni-Sáhara de 1957–58.",
    specsNote: "Datos aproximados de la versión con motores Merlin.",
    specs: {
      "Envergadura": "22,60 m",
      "Longitud": "16,40 m",
      "Motores": "2 × Rolls-Royce Merlin 500",
      "Velocidad máxima": "≈ 400 km/h",
      "Carga de bombas": "Hasta 2.000 kg",
      "Tripulación": "5"
    }
  },
  {
    id: "sm79",
    name: "Savoia-Marchetti SM.79 (B.3)",
    role: "Bombardero medio trimotor",
    type: "bombardero",
    fleet: 0,
    onOrder: 0,
    service: "1937–años 50",
    unit: "Aviación Legionaria (Baleares); después Ejército del Aire",
    status: "Retirado en los años cincuenta",
    badge: "historic",
    image: "img/sm79.webp",
    description: "Trimotor italiano rápido, uno de los mejores bombarderos medios de su generación. Operó desde Mallorca con la Aviación Legionaria durante la Guerra Civil y los ejemplares supervivientes pasaron al Ejército del Aire tras 1939.",
    specsNote: "Datos aproximados del SM.79 de serie.",
    specs: {
      "Envergadura": "21,20 m",
      "Longitud": "16,20 m",
      "Motores": "3 × Alfa Romeo 126 (780 CV cada uno)",
      "Velocidad máxima": "≈ 430 km/h",
      "Carga de bombas": "Hasta 1.250 kg",
      "Tripulación": "5"
    }
  },

  // ===================== CAZA Y ATAQUE =====================
  {
    id: "buchon",
    name: "Hispano HA-1112-M1L «Buchón» (C.4K)",
    role: "Caza y ataque",
    type: "caza",
    fleet: 0,
    onOrder: 0,
    service: "1954–1965",
    unit: "Escuadrones de caza y ataque de Tablada y Morón",
    status: "Retirado en 1965",
    badge: "historic",
    image: "img/buchon.webp",
    description: "Célula del Messerschmitt Bf 109G con motor Rolls-Royce Merlin, el último caza de pistón producido en serie en Europa. El abultado carenado inferior le valió el apodo de «Buchón». Muchos volaron después en la película «La batalla de Inglaterra».",
    specsNote: "Datos aproximados del HA-1112-M1L.",
    specs: {
      "Envergadura": "9,90 m",
      "Longitud": "9,00 m",
      "Motor": "Rolls-Royce Merlin 500-45 (1.600 CV)",
      "Velocidad máxima": "≈ 670 km/h",
      "Armamento": "2 cañones Hispano de 20 mm y cohetes de 80 mm",
      "Tripulación": "1"
    }
  },
  {
    id: "superSaeta",
    name: "Hispano HA-220 Super Saeta (A.10)",
    role: "Ataque ligero",
    type: "ataque",
    fleet: 0,
    onOrder: 0,
    service: "1970–1981",
    unit: "Ala 214 (Gando) y destacamentos en el Sáhara",
    status: "Retirado en 1981",
    badge: "historic",
    image: "img/supersaeta.webp",
    description: "Versión monoplaza de ataque del HA-200 Saeta, el primer reactor diseñado y construido en España por el equipo de Willy Messerschmitt en Hispano Aviación. Operó en Canarias y el Sáhara en apoyo cercano.",
    specsNote: "Datos aproximados del HA-220.",
    specs: {
      "Envergadura": "10,42 m",
      "Longitud": "8,97 m",
      "Motores": "2 × Turbomeca Marboré VI",
      "Velocidad máxima": "≈ 690 km/h",
      "Armamento": "2 cañones de 20 mm, cohetes y bombas",
      "Tripulación": "1"
    }
  },
  {
    id: "f4c",
    name: "McDonnell Douglas F-4C Phantom II (C.12)",
    role: "Caza pesado biplaza",
    type: "caza",
    fleet: 0,
    onOrder: 0,
    service: "1971–1989",
    unit: "Ala 12 (Torrejón)",
    status: "Retirado en 1989",
    badge: "historic",
    image: "img/f4c.webp",
    description: "Llegaron 36 F-4C procedentes de la USAF a partir de 1971. Fue el avión de combate más potente de España en los años setenta y el primero capaz de repostar en vuelo de forma operativa. Lo sustituyó el EF-18 Hornet.",
    specsNote: "Datos aproximados del F-4C.",
    specs: {
      "Envergadura": "11,70 m",
      "Longitud": "17,76 m",
      "Motores": "2 × General Electric J79-GE-15",
      "Velocidad máxima": "Mach 2,2",
      "Armamento": "AIM-7 Sparrow, AIM-9 Sidewinder, bombas y cañón en contenedor",
      "Tripulación": "2"
    }
  },
  {
    id: "mirageF1",
    name: "Dassault Mirage F1 (C.14)",
    role: "Interceptor y caza",
    type: "caza",
    fleet: 0,
    onOrder: 0,
    service: "1975–2013",
    unit: "Ala 14 (Albacete), Ala 46 (Gando) y Ala 11 (Manises)",
    status: "Retirado en 2013",
    badge: "historic",
    image: "img/miragef1.webp",
    description: "Sucesor del Mirage III con ala en flecha, interceptor rápido y de gran autonomía. España llegó a operar más de noventa, incluidos ejemplares de segunda mano de Qatar y Francia. Modernizados como F1M, el Eurofighter los sustituyó en Albacete.",
    specsNote: "Datos aproximados del Mirage F1.",
    specs: {
      "Envergadura": "8,40 m",
      "Longitud": "15,30 m",
      "Motor": "SNECMA Atar 9K-50 con poscombustión",
      "Velocidad máxima": "Mach 2,2",
      "Armamento": "2 cañones DEFA de 30 mm, misiles Super 530 y AIM-9",
      "Tripulación": "1"
    }
  },

  // ===================== VIGILANCIA =====================
  {
    id: "rf4c",
    name: "McDonnell Douglas RF-4C Phantom II (CR.12)",
    role: "Reconocimiento táctico",
    type: "reconocimiento",
    fleet: 0,
    onOrder: 0,
    service: "1978–2002",
    unit: "Ala 12 (Torrejón)",
    status: "Retirado en 2002",
    badge: "historic",
    image: "img/rf4c.webp",
    description: "Versión de reconocimiento fotográfico del Phantom, sin armamento y con cámaras en el morro. Siguió en servicio mucho después de la retirada de los F-4C de caza y fue el último Phantom español.",
    specsNote: "Datos aproximados del RF-4C.",
    specs: {
      "Longitud": "19,17 m",
      "Motores": "2 × General Electric J79-GE-15",
      "Velocidad máxima": "Mach 2,2",
      "Equipo": "Cámaras ópticas e infrarrojas, radar de barrido lateral",
      "Tripulación": "2"
    }
  },
  {
    id: "p3orion",
    name: "Lockheed P-3 Orion (P.3)",
    role: "Patrulla marítima y antisubmarina",
    type: "patrulla",
    fleet: 0,
    onOrder: 0,
    service: "1973–2022",
    unit: "Grupo 22 (Morón)",
    status: "Retirado en 2022",
    badge: "historic",
    image: "img/p3orion.webp",
    description: "Cuatrimotor de patrulla marítima y lucha antisubmarina. Durante casi medio siglo vigiló el Atlántico y el Mediterráneo y participó en la operación Atalanta contra la piratería en el Índico. Su retirada dejó al Ejército del Aire sin capacidad antisubmarina hasta la llegada del C295 MPA.",
    specsNote: "Datos aproximados del P-3 modernizado (P-3M).",
    specs: {
      "Envergadura": "30,37 m",
      "Longitud": "35,61 m",
      "Motores": "4 × Allison T56",
      "Velocidad máxima": "≈ 760 km/h",
      "Armamento": "Torpedos, cargas de profundidad y sonoboyas",
      "Tripulación": "Hasta 11"
    }
  },

  // ===================== TRANSPORTE =====================
  {
    id: "c130h",
    name: "Lockheed C-130H Hercules (T.10)",
    role: "Transporte táctico",
    type: "transporte",
    fleet: 0,
    onOrder: 0,
    service: "1973–2021",
    unit: "Ala 31 (Zaragoza)",
    status: "Retirado en 2021",
    badge: "historic",
    image: "img/c130h.webp",
    description: "Durante casi medio siglo fue el puente aéreo de las misiones españolas en el exterior, de Bosnia a Afganistán, además de evacuaciones como la de Kabul en 2021, año de su retirada en favor del A400M. Algunos ejemplares eran cisternas KC-130H (TK.10).",
    specsNote: "Datos aproximados del C-130H.",
    specs: {
      "Envergadura": "40,40 m",
      "Longitud": "29,80 m",
      "Motores": "4 × Allison T56-A-15",
      "Velocidad máxima": "≈ 590 km/h",
      "Tripulación": "5"
    }
  }
);
