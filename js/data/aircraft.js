/**
 * Flota del Ejército del Aire y del Espacio (noviembre 2026)
 *
 * Cada ficha describe UNA aeronave concreta. Los datos técnicos (specs)
 * corresponden a la versión indicada en specsNote; no se mezclan cifras
 * de otras variantes del mismo modelo.
 *
 * Imágenes: si falta el archivo se muestra un marcador con el nombre.
 */
const aircraftData = [
  // ===================== CAZA =====================
  {
    id: "eurofighter",
    name: "Eurofighter Typhoon (C.16)",
    role: "Caza multirrol",
    type: "caza",
    fleet: 67,
    onOrder: 45,
    unit: "Ala 11 (Morón), Ala 14 (Los Llanos) y Ala 46 (Gando)",
    status: "En expansión (Halcón)",
    badge: "order",
    image: "img/eurofighter.webp",
    description: "Caza bimotor de ala en delta con planos canard, desarrollado por Alemania, Reino Unido, Italia y España. Es el principal avión de superioridad aérea y ataque del Ejército del Aire, donde entró en servicio en 2003 con la designación C.16. Opera en el Ala 11 de Morón y el Ala 14 de Albacete, y desde junio de 2026 también en el Ala 46 de Gando, que ha recibido sus primeros ejemplares Tranche 3. España ha encargado 45 aviones nuevos Tranche 4 en dos lotes: Halcón I (20 aviones, junio de 2022) y Halcón II (25 aviones, diciembre de 2024). El primero se presentó en junio de 2026 y sustituirán a los EF-18 más antiguos.",
    specsNote: "Datos del C.16 monoplaza. La versión biplaza de entrenamiento se designa CE.16.",
    specs: {
      "Envergadura": "10,95 m",
      "Longitud": "15,96 m",
      "Altura": "5,28 m",
      "Peso vacío": "11.000 kg",
      "Peso máx. despegue": "23.500 kg",
      "Motores": "2 × Eurojet EJ200 (90 kN con poscombustión)",
      "Velocidad máxima": "Mach 2,0",
      "Techo de servicio": "16.765 m",
      "Radio de combate": "1.389 km (ataque hi-lo-hi)",
      "Armamento": "Cañón Mauser BK-27 de 27 mm; 13 puntos de anclaje (IRIS-T, AMRAAM, Meteor, Taurus, GBU-48…)",
      "Tripulación": "1"
    }
  },
  {
    id: "ef18mhornet",
    name: "EF-18M Hornet (C.15)",
    role: "Caza multirrol",
    type: "caza",
    fleet: 81,
    onOrder: 0,
    unit: "Ala 12 (Torrejón), Ala 15 (Zaragoza) y Ala 46 (Gando)",
    status: "Retiro gradual Canarias (dic 2026)",
    badge: "retire",
    image: "img/ef18mhornet.webp",
    description: "Versión española del F/A-18 Hornet de McDonnell Douglas. La E de su nombre se refiere a España. Se compraron 72 aviones (60 monoplazas EF-18A y 12 biplazas EF-18B), y el C.15 entró en servicio el 10 de julio de 1986. Entre 1995 y 2000 se añadieron 24 F/A-18A procedentes de la US Navy, que se modificaron al estándar EF-18A+ y se destinaron a Canarias. La flota peninsular se modernizó al estándar EF-18M, con nueva aviónica y la integración del IRIS-T, el AMRAAM y el misil de crucero Taurus. Los últimos Hornet de Gando se retiran en diciembre de 2026 y los Eurofighter Halcón irán sustituyendo al resto.",
    specsNote: "Datos del EF-18M monoplaza (C.15). El biplaza se designa CE.15.",
    specs: {
      "Envergadura": "11,43 m (12,31 m con misiles en las puntas)",
      "Longitud": "17,07 m",
      "Altura": "4,66 m",
      "Peso vacío": "10.455 kg",
      "Peso máx. despegue": "25.401 kg",
      "Motores": "2 × General Electric F404-GE-400 (71,2 kN con poscombustión)",
      "Velocidad máxima": "Mach 1,8 (1.915 km/h a 12.190 m)",
      "Techo de servicio": "15.240 m",
      "Radio de combate": "740 km",
      "Armamento": "Cañón M61A1 Vulcan de 20 mm; 9 puntos de anclaje (IRIS-T, AMRAAM, HARM, Taurus, bombas guiadas)",
      "Tripulación": "1"
    }
  },
  {
    id: "northropf5m",
    name: "Northrop F-5M (AE.9)",
    role: "Entrenador avanzado de combate",
    type: "entrenamiento",
    fleet: 19,
    onOrder: 0,
    unit: "Ala 23 (Talavera la Real)",
    status: "A retirar (Hürjet desde 2028)",
    badge: "retire",
    image: "img/northropf5m.webp",
    description: "Biplaza supersónico que CASA fabricó bajo licencia de Northrop. Llegó a Talavera la Real el 12 de noviembre de 1970 para sustituir al T-33 y al F-86 Sabre. Se recibieron 34 F-5B biplazas, a los que se sumaron F-5A monoplazas y RF-5A de reconocimiento. Hoy solo siguen en vuelo 19 biplazas, modernizados al estándar F-5M con cabina y aviónica nuevas. Con ellos el Ala 23 forma a todos los pilotos de caza del Ejército del Aire. El Hürjet los sustituirá desde 2028.",
    specsNote: "Datos del F-5B biplaza, la célula sobre la que se hizo la modernización F-5M.",
    specs: {
      "Envergadura": "7,70 m",
      "Longitud": "14,12 m",
      "Altura": "3,99 m",
      "Peso cargado": "9.380 kg",
      "Motores": "2 × General Electric J85-GE-13 (18,1 kN con poscombustión)",
      "Velocidad máxima": "1.424 km/h",
      "Techo de servicio": "15.850 m",
      "Tripulación": "2 (alumno e instructor)"
    }
  },

  // ===================== TRANSPORTE / CISTERNA =====================
  {
    id: "airbusa330mrtt",
    name: "Airbus A330 MRTT (TK.24)",
    role: "Cisterna / Transporte estratégico",
    type: "cisterna",
    fleet: 3,
    onOrder: 0,
    unit: "Ala 45 (Torrejón)",
    status: "Flota completada 20/10/2026",
    badge: "active",
    image: "img/airbusa330mrtt.webp",
    description: "Avión cisterna y de transporte multimisión basado en el A330-200. Los tres aviones españoles son A330-200 que habían volado con Iberia y que Airbus convirtió en Getafe. Antes de la conversión volaron como transportes T.24. El primero llegó en 2025 y el tercero completó la flota en octubre de 2026. Reabastecen en vuelo con dos pods subalares de manguera y cesta, compatibles con el Eurofighter y el Hornet. También sirven para transporte estratégico y evacuación médica.",
    specsNote: "Datos de la conversión española (A330-200 ex-Iberia), equipada solo con manguera y cesta.",
    specs: {
      "Envergadura": "60,30 m",
      "Longitud": "58,80 m",
      "Altura": "17,40 m",
      "Peso máx. despegue": "233.000 kg",
      "Combustible": "111.000 kg",
      "Carga útil": "45.000 kg o 300 pasajeros",
      "Motores": "2 × Rolls-Royce Trent 772B",
      "Velocidad de crucero": "Mach 0,86",
      "Techo de servicio": "12.650 m",
      "Alcance": "14.800 km",
      "Reabastecimiento": "2 pods subalares Cobham 905E (manguera y cesta)",
      "Tripulación": "3 (2 pilotos y operador de reabastecimiento)"
    }
  },
  {
    id: "airbusa400matlas",
    name: "Airbus A400M Atlas (T.23)",
    role: "Transporte estratégico/táctico",
    type: "transporte",
    fleet: 14,
    onOrder: 6,
    unit: "Ala 31 (Zaragoza)",
    status: "→ 16 antes de fin 2026 · Objetivo 20",
    badge: "order",
    image: "img/airbusa400matlas.webp",
    description: "Transporte militar cuatrimotor de hélices contrarrotatorias. Se monta en la planta de Airbus en San Pablo (Sevilla), donde voló por primera vez el 11 de diciembre de 2009. Llegó al Ala 31 en 2016 para sustituir al C-130 Hércules. Combina capacidad estratégica, con alcance y velocidad de reactor, y táctica, porque opera en pistas cortas y sin preparar. También puede reabastecer en vuelo a cazas y helicópteros. España ha subido el objetivo de flota a 20 aviones.",
    specsNote: "Datos del A400M estándar de producción.",
    specs: {
      "Envergadura": "42,40 m",
      "Longitud": "45,10 m",
      "Altura": "14,70 m",
      "Peso máx. despegue": "141.000 kg",
      "Carga máxima": "37.000 kg o 116 paracaidistas",
      "Combustible": "46.700 kg (58.000 kg con depósitos en bodega)",
      "Motores": "4 × Europrop TP400-D6 (8.200 kW cada uno)",
      "Velocidad de crucero": "Mach 0,72 (~780 km/h)",
      "Techo de servicio": "11.300 m",
      "Alcance": "3.300 km con 37 t · 8.900 km en traslado",
      "Tripulación": "3–4 (2 pilotos y jefe de carga)"
    }
  },
  {
    id: "airbusc295m",
    name: "Airbus C295M (T.21)",
    role: "Transporte táctico",
    type: "transporte",
    fleet: 13,
    onOrder: 18,
    unit: "Ala 35 (Getafe) · Destacamento en Gando",
    status: "+18 para el GRUEMA (Matacán)",
    badge: "order",
    image: "img/airbusc295m.webp",
    description: "Bimotor de transporte táctico desarrollado por CASA a partir del CN235, con un fuselaje más largo y motores más potentes. El Ejército del Aire fue su cliente de lanzamiento, y desde 2001 lo opera el Ala 35 de Getafe para transporte logístico y táctico, lanzamiento de paracaidistas y carga, y evacuación médica. Puede despegar en pistas cortas y sin preparar, y reabastecerse en vuelo desde el A400M. En diciembre de 2025 se encargaron 18 más para sustituir a los CN235 y C-212 de la escuela de Matacán. El primero voló en noviembre de 2026.",
    specsNote: "Datos del C295M de transporte.",
    specs: {
      "Envergadura": "25,81 m",
      "Longitud": "24,50 m",
      "Altura": "8,66 m",
      "Peso máx. despegue": "23.200 kg",
      "Carga útil": "9.250 kg o 24 camillas",
      "Motores": "2 × Pratt & Whitney Canada PW127G",
      "Velocidad máxima": "576 km/h",
      "Velocidad de crucero": "480 km/h",
      "Techo de servicio": "7.620 m",
      "Alcance": "4.167 km (hasta 11 h)",
      "Tripulación": "3 (2 pilotos y supervisor de carga)"
    }
  },
  {
    id: "casacn235",
    name: "CASA CN235 (T.19B)",
    role: "Transporte y enseñanza",
    type: "transporte",
    fleet: 8,
    onOrder: 0,
    unit: "744 Escuadrón · GRUEMA (Matacán, Salamanca)",
    status: "A sustituir por C295 (2026-2028)",
    badge: "retire",
    image: "img/casacn235.webp",
    description: "Transporte bimotor desarrollado por CASA e IPTN (Indonesia) dentro del programa FATAM, que buscaba un avión entre el C-212 Aviocar y el C-130 Hércules. Entró en servicio en 1988 y en los años noventa formó parte del Ala 35 de Getafe hasta la llegada del C295. Desde 2008 ocho ejemplares vuelan en el 744 Escuadrón de Matacán, donde forman a pilotos de transporte y lanzan paracaidistas. Los nuevos C295 los relevarán entre 2026 y 2028.",
    specsNote: "Datos del CN235-100M de transporte (T.19B).",
    specs: {
      "Envergadura": "25,81 m",
      "Longitud": "21,35 m",
      "Altura": "8,17 m",
      "Peso vacío": "8.800 kg",
      "Peso máx. despegue": "16.000 kg",
      "Carga útil": "5.950 kg o 48 soldados (46 paracaidistas)",
      "Motores": "2 × General Electric CT7-9C3 (1.750 CV cada uno)",
      "Velocidad máxima": "452 km/h",
      "Velocidad de crucero": "422 km/h",
      "Autonomía": "10 h",
      "Tripulación": "4 (2 pilotos, mecánico de vuelo y supervisor de carga)"
    }
  },

  // ===================== VIGILANCIA MARÍTIMA / SAR =====================
  {
    id: "casacn235vigma",
    name: "CASA CN235 VIGMA (D.4)",
    role: "Vigilancia marítima y salvamento (SAR)",
    type: "patrulla",
    fleet: 8,
    onOrder: 0,
    unit: "Ala 37 · vuela con los Esc. 801 (Palma), 802 (Gando) y 803 (Cuatro Vientos)",
    status: "A sustituir por C295 MSA antes de 2031",
    badge: "retire",
    image: "img/casacn235vigma.webp",
    description: "En 2008 y 2009 se modernizaron ocho CN235 para vigilancia marítima y búsqueda y salvamento. Se les instaló el sistema táctico FITS de CASA y pasaron a llamarse D.4. Desde 2012 dependen administrativamente del Ala 37 de Villanubla, aunque operan desde las bases de los escuadrones SAR 801, 802 y 803. Vigilan el tráfico marítimo y la inmigración irregular, participan en la lucha contra el narcotráfico y buscan náufragos. Desde 2019 llevan pintura gris con rotulación SAR negra. Los C295 MSA los sustituirán.",
    specsNote: "Célula del CN235 con el sistema de misión FITS. Las cifras de vuelo coinciden con las del T.19B; cambian la tripulación y el equipo.",
    specs: {
      "Envergadura": "25,81 m",
      "Longitud": "21,35 m",
      "Altura": "8,17 m",
      "Peso máx. despegue": "16.000 kg",
      "Motores": "2 × General Electric CT7-9C3 (1.750 CV cada uno)",
      "Velocidad de crucero": "422 km/h",
      "Autonomía": "10 h",
      "Sistema de misión": "FITS (Fully Integrated Tactical System) de CASA",
      "Tripulación": "4 (2 pilotos, operador de sistemas y observador)"
    }
  },
  {
    id: "casac295msasar",
    name: "Airbus C295 MSA/SAR (D.6)",
    role: "Vigilancia marítima y salvamento (SAR)",
    type: "patrulla",
    fleet: 2,
    onOrder: 6,
    unit: "Ala 46 (Gando) · Esc. 802",
    status: "2 de 8 entregados (nov 2026)",
    badge: "order",
    image: "img/casac295msasar.webp",
    description: "Versión de vigilancia marítima y búsqueda y salvamento del C295, fabricada en Sevilla. Forma parte del pedido de 16 C295 de diciembre de 2023: 8 MSA/SAR y 8 MPA. El primero se entregó en junio de 2026 para Gando y el segundo en noviembre del mismo año. Sustituirá a los CN235 VIGMA en misiones contra el contrabando, el narcotráfico y la inmigración irregular, y en la búsqueda y rescate en el mar.",
    specsNote: "Datos del fabricante para la célula C295. El equipo de misión es propio de esta versión.",
    specs: {
      "Envergadura": "25,81 m",
      "Longitud": "24,50 m",
      "Altura": "8,66 m",
      "Peso máx. despegue": "23.200 kg",
      "Motores": "2 × Pratt & Whitney Canada PW127G",
      "Velocidad de crucero": "480 km/h",
      "Autonomía": "Hasta 11 h",
      "Sistema de misión": "FITS de Airbus con radar de búsqueda y sensor electroóptico"
    }
  },
  {
    id: "casac295mpa",
    name: "Airbus C295 MPA",
    role: "Patrulla marítima y antisubmarina",
    type: "patrulla",
    fleet: 0,
    onOrder: 8,
    unit: "Futuro (pendiente de asignación)",
    status: "Primera entrega prevista en 2028",
    badge: "order",
    image: "img/casac295mpa.webp",
    description: "Versión de patrulla marítima del C295 y la más compleja de la familia. Hará misiones antisubmarinas, antisuperficie, de inteligencia y de reconocimiento, y podrá llevar torpedos y otras armas. Con ella el Ejército del Aire recuperará la capacidad antisubmarina que perdió al retirar los P-3 Orion. Se encargaron 8 en diciembre de 2023 junto con los MSA/SAR, y la primera entrega está prevista para 2028.",
    specsNote: "Avión aún no entregado. Las cifras de la célula son las del C295; el equipo y el armamento concretos no se han publicado.",
    specs: {
      "Envergadura": "25,81 m",
      "Longitud": "24,50 m",
      "Altura": "8,66 m",
      "Motores": "2 × Pratt & Whitney Canada PW127G",
      "Armamento": "Torpedos y otras armas en soportes subalares",
      "Misiones": "ASW, ASuW, ISR"
    }
  },

  // ===================== ENTRENAMIENTO =====================
  {
    id: "pilatuspc21",
    name: "Pilatus PC-21 (E.27)",
    role: "Entrenamiento básico y avanzado",
    type: "entrenamiento",
    fleet: 31,
    onOrder: 9,
    unit: "Academia General del Aire (San Javier) · 2 en el CLAEX",
    status: "+9 en pedido",
    badge: "order",
    image: "img/pilatuspc21.webp",
    description: "Entrenador suizo de turbohélice. Su cabina reproduce la de los cazas modernos y puede simular radar y armamento. Sustituyó al reactor C-101 Aviojet en la Academia General del Aire de San Javier. El primer lote de 24 aviones estaba completo a mediados de 2022, y un segundo pedido de 16 elevará la flota a 40. Dos ejemplares están destinados al Centro Logístico de Armamento y Experimentación (CLAEX) de Torrejón.",
    specsNote: "Datos del PC-21 de serie con motor PT6A-68B.",
    specs: {
      "Envergadura": "9,11 m",
      "Longitud": "11,23 m",
      "Altura": "3,75 m",
      "Peso vacío": "2.270 kg",
      "Peso máx. despegue": "3.100 kg (acrobático) · 4.250 kg (utilitario)",
      "Motor": "Pratt & Whitney Canada PT6A-68B (1.193 kW / 1.600 shp)",
      "Velocidad máxima": "685 km/h",
      "Techo de servicio": "11.580 m",
      "Alcance": "1.333 km",
      "Factor de carga": "+8 / −4 g",
      "Tripulación": "2"
    }
  },
  {
    id: "taihurjet",
    name: "TAI Hürjet",
    role: "Entrenador de combate avanzado",
    type: "entrenamiento",
    fleet: 0,
    onOrder: 30,
    unit: "Futuro (Ala 23, Talavera la Real)",
    status: "Entregas desde 2028 · Posible ampliación a 45",
    badge: "order",
    image: "img/taihurjet.webp",
    description: "Entrenador supersónico biplaza de Turkish Aerospace, que voló por primera vez el 25 de abril de 2023. España firmó la compra de 30 aviones el 28 de diciembre de 2025, con opción a llegar a 45, para sustituir al F-5M del Ala 23 dentro de un sistema integrado de entrenamiento con Airbus. Los primeros llegarán en configuración básica en 2028 y 2029, y el equipo español se instalará entre 2031 y 2035.",
    specsNote: "Datos del fabricante (TAI). La configuración española definitiva aún no se ha publicado.",
    specs: {
      "Envergadura": "9,50 m",
      "Longitud": "13,60 m",
      "Altura": "4,10 m",
      "Motor": "General Electric F404 (78,7 kN con poscombustión)",
      "Velocidad máxima": "Mach 1,4",
      "Techo de servicio": "13.716 m",
      "Alcance": "~1.960 km",
      "Carga externa": "3.402 kg en 7 puntos de anclaje",
      "Factor de carga": "+8 / −3 g",
      "Tripulación": "2 (en tándem)"
    }
  },

  // ===================== UAV =====================
  {
    id: "mq9",
    name: "General Atomics MQ-9A Reaper Block 5",
    role: "UAV de vigilancia y ataque",
    type: "uav",
    fleet: 4,
    onOrder: 0,
    unit: "Escuadrón 233 (Talavera la Real)",
    status: "Armamento pedido en 2025",
    badge: "active",
    image: "img/mq9.jpg",
    description: "Dron de media altitud y gran autonomía (MALE) pilotado desde tierra. España recibió cuatro aviones y tres estaciones de control: los dos primeros a finales de 2019 y los dos últimos el 23 de noviembre de 2020. Vuela en misiones de vigilancia e inteligencia, sin armas. Su armado se anunció en 2023 y el pedido de armamento se adjudicó en agosto de 2025, pero la capacidad de ataque no se espera antes de 2027.",
    specsNote: "Datos del fabricante para el MQ-9A Block 5 de ala estándar.",
    specs: {
      "Envergadura": "20,1 m",
      "Longitud": "11,0 m",
      "Altura": "3,8 m",
      "Peso vacío": "2.223 kg",
      "Peso máx. despegue": "4.763 kg",
      "Motor": "Honeywell TPE331-10 (900 shp)",
      "Velocidad máxima": "444 km/h (240 nudos)",
      "Techo de servicio": "15.240 m",
      "Autonomía": "27 h",
      "Puntos de anclaje": "7 (6 subalares y 1 ventral)",
      "Tripulación": "En tierra: piloto y operador de sensores"
    }
  },

  // ===================== HELICÓPTEROS =====================
  {
    id: "nh90",
    name: "NH90 «Lobo» (HD.29)",
    role: "Helicóptero SAR, CSAR y operaciones especiales",
    type: "helisar",
    fleet: 12,
    onOrder: 12,
    unit: "803 Escuadrón · Ala 48 (Cuatro Vientos)",
    status: "+12 en pedido (desde 2031)",
    badge: "order",
    image: "img/nh90.jpg",
    description: "Helicóptero medio de transporte táctico, el más moderno del Ejército del Aire, donde se llama «Lobo». Lo opera el 803 Escuadrón del Ala 48 en rescate en combate (CSAR), búsqueda y salvamento y apoyo a operaciones especiales, y sustituye al Super Puma. En diciembre de 2024 recibió el primero en Estándar 3, y en 2026 desplegó tres en Rumanía como helicópteros antidrones. Del pedido de 100 helicópteros de diciembre de 2025, otros 12 NH90 son para el Ejército del Aire.",
    specsNote: "Datos del fabricante para el NH90 TTH.",
    specs: {
      "Diámetro del rotor": "16,30 m",
      "Longitud": "19,56 m (rotores girando) · 16,13 m de fuselaje",
      "Altura": "5,31 m",
      "Peso vacío": "6.400 kg",
      "Peso máx. despegue": "10.600 kg (11.000 kg peso alternativo)",
      "Motores": "2 × General Electric CT7-8F5",
      "Velocidad máxima": "300 km/h",
      "Alcance": "982 km",
      "Autonomía": "5 h",
      "Capacidad": "20 soldados o 12 camillas",
      "Tripulación": "2 pilotos y operador de cabina"
    }
  },
  {
    id: "superpuma",
    name: "Aérospatiale AS332 Super Puma (HD.21)",
    role: "Helicóptero SAR y CSAR",
    type: "helisar",
    fleet: 6,
    onOrder: 0,
    unit: "Esc. 801 (Palma), 802 (Gando) y 803 (Cuatro Vientos)",
    status: "Retiro progresivo (NH90 y H175M)",
    badge: "retire",
    image: "img/superpuma.jpg",
    description: "Helicóptero medio que llegó al Ejército del Aire en diciembre de 1982 y fue durante cuatro décadas la base de su flota de búsqueda y salvamento. En España han volado seis versiones de la familia: AS332B, B1, C, C1e (H215), M1 y AS532UL Cougar, repartidas entre el Ejército del Aire y las FAMET del Ejército de Tierra. Los B/B1 del 803 Escuadrón hicieron más de 1.200 evacuaciones médicas en Afganistán entre 2005 y 2013. Los NH90 y H175M los irán sustituyendo.",
    specsNote: "Datos del AS332B1 de rescate en combate. Las diferencias de cada versión están abajo, en «Variantes».",
    specs: {
      "Diámetro del rotor": "15,60 m",
      "Peso máx. despegue": "8.600 kg",
      "Motores": "2 × Turbomeca Makila 1A1 (1.400 kW cada uno)",
      "Velocidad de crucero": "262 km/h",
      "Capacidad": "21 soldados",
      "Equipo": "Radio táctica V/UHF ARC-210, teléfono por satélite Iridium"
    },
    // Fuselaje corto: B, B1, C, C1e. Fuselaje largo (+0,76 m): M1 y AS532UL.
    variants: [
      {
        name: "AS332B",
        designation: "HD.21",
        branch: "Ejército del Aire",
        years: "1982 – hoy",
        count: "10 (HD.21-1 a HD.21-10)",
        units: "801 (Palma), 802 (Gando) y 803 (Cuatro Vientos) Escuadrones",
        engine: "2 × Turbomeca Makila 1A (≈1.330 kW)",
        fuselage: "Corto · 21 soldados",
        desc: "Primera versión militar del Super Puma y la primera que recibió España: los cuatro primeros en diciembre de 1982 y el resto en 1983. Formaron la flota SAR de los tres escuadrones y el núcleo CSAR del 803. Cinco se perdieron en accidentes (1985 en Alcudia, 1992 en Canarias, 2007 en Afganistán, 2014 frente a Gran Canaria y 2015 entre Gando y Dakar), y varios están retirados en la Maestranza de Cuatro Vientos."
      },
      {
        name: "AS332B1",
        designation: "HD.21 y HT.21",
        branch: "Ejército del Aire",
        years: "Década de 1980 – hoy",
        count: "4 (HD.21-11, HD.21-12, HT.21-01 y HT.21-02)",
        units: "803 Escuadrón (Cuatro Vientos)",
        engine: "2 × Turbomeca Makila 1A1 (1.400 kW)",
        fuselage: "Corto · 21 soldados",
        desc: "Mismo fuselaje que el B, pero con el motor Makila 1A1, más potente. Se dedican al rescate en combate (CSAR) y a operaciones especiales en el 803 Escuadrón, y fueron los que desplegaron en Afganistán. El HD.21-12 quedó dañado en 2012 al aterrizar de noche en Afganistán y no volvió a volar. Entre 2014 y 2016 el 803 usó además un B1 prestado por las FAMET (HU.21-09)."
      },
      {
        name: "AS332C",
        designation: "HD.21",
        branch: "Ejército del Aire",
        years: "2017",
        count: "1 (HD.21-15)",
        units: "801 Escuadrón (Palma)",
        engine: "2 × Turbomeca Makila 1A",
        fuselage: "Corto",
        desc: "Ejemplar usado que Francia donó cuando la Armée de l'Air retiró sus Super Puma. Se revisó y adaptó para SAR, pero hoy se guarda en la Maestranza de Cuatro Vientos como fuente de repuestos."
      },
      {
        name: "AS332C1e (H215)",
        designation: "HD.21",
        branch: "Ejército del Aire",
        years: "2016 – hoy",
        count: "6 (HD.21-16 a HD.21-21)",
        units: "802 Escuadrón (Gando) y 801 Escuadrón (Palma)",
        engine: "2 × Turbomeca Makila 1A1 (1.400 kW)",
        fuselage: "Corto · cabina digital",
        desc: "Versión modernizada que Airbus vende como H215. Trae pantallas multifunción, cabina compatible con gafas de visión nocturna, depósitos extra (hasta 560 km de alcance), flotadores de emergencia y grúa de rescate. Cuatro llegaron nuevos entre 2016 y 2018 tras recibir en Albacete los equipos de misión SAR del Ejército del Aire; el HD.21-19 es un ex francés incorporado en 2019 y el HD.21-20 se sumó en 2023. Cubren sobre todo el SAR de Canarias."
      },
      {
        name: "AS332M1",
        designation: "HT.21A",
        branch: "Ejército del Aire",
        years: "1994 – hoy",
        count: "4 (HT.21A-1 a HT.21A-4)",
        units: "402 Escuadrón (Cuatro Vientos)",
        engine: "2 × Turbomeca Makila 1A1 (1.400 kW)",
        fuselage: "Largo (+0,76 m) · cabina VIP",
        desc: "Versión militar de fuselaje alargado, configurada para el transporte de la Casa Real, la Presidencia del Gobierno y otras autoridades del Estado. Los H175M los sustituirán a partir de 2028."
      },
      {
        name: "AS532UL Cougar",
        designation: "HT.27",
        branch: "Ejército del Aire",
        years: "Hoy en servicio",
        count: "2 (HT.27-01 y HT.27-02)",
        units: "402 Escuadrón (Cuatro Vientos)",
        engine: "2 × Turbomeca Makila 1A1 (1.400 kW)",
        fuselage: "Largo · cabina VIP",
        desc: "Desde 1990 Aérospatiale vende los Super Puma militares con el nombre AS532 Cougar; UL significa versión de transporte sin armar (U) y fuselaje largo (L). Iban a ser los HT.21A-5 y HT.21A-6 y acabaron matriculados HT.27. Vuelan junto a los M1 en el transporte de autoridades y también los relevará el H175M."
      },
      {
        name: "AS332B / B1",
        designation: "HT.21, hoy HU.21",
        branch: "Ejército de Tierra (FAMET)",
        years: "1985 – hoy",
        count: "18 recibidos · unos 15–16 en servicio",
        units: "BHELMA IV (El Copero), Colmenar Viejo y BHELMA VI (Tenerife)",
        engine: "2 × Turbomeca Makila 1A / 1A1",
        fuselage: "Corto · 21 soldados",
        desc: "Helicópteros de maniobra y transporte del Ejército de Tierra (indicativos ET-501 en adelante). Se matricularon HT.21 y después pasaron a HU.21. Desde 2010 van sustituyendo a los AB-212 del BHELMA VI en Canarias, a medida que el NH90 libera ejemplares en la península."
      }
    ]
  },
  {
    id: "s76",
    name: "Sikorsky S-76C (HE.24 / HD.24)",
    role: "Helicóptero de enseñanza y SAR",
    type: "heliescuela",
    fleet: 8,
    onOrder: 0,
    unit: "781 Escuadrón · Ala 78 (Armilla) → Ala 49 (Son San Juan)",
    status: "De enseñanza a SAR en Mallorca",
    badge: "active",
    image: "img/s76.jpg",
    description: "Helicóptero bimotor ligero estadounidense. Llegaron ocho ejemplares en 1991 y durante más de tres décadas formaron a los pilotos de helicóptero en el 781 Escuadrón del Ala 78 de Armilla (Granada). El H135 los está relevando en la enseñanza. Desde 2025 se trasladan al Ala 49 de Son San Juan (Mallorca) como helicópteros de búsqueda y salvamento con la designación HD.24, para suplir la baja disponibilidad de los Super Puma hasta que llegue el NH90.",
    specsNote: "Datos del S-76C.",
    specs: {
      "Diámetro del rotor": "13,41 m",
      "Peso máx. despegue": "5.307 kg",
      "Motores": "2 × Turbomeca Arriel",
      "Capacidad": "Hasta 12 pasajeros",
      "Tripulación": "2 pilotos"
    }
  },
  {
    id: "h175m",
    name: "Airbus H175M",
    role: "Helicóptero de transporte de Estado y autoridades",
    type: "helivip",
    fleet: 0,
    onOrder: 6,
    unit: "Futuro (402 Escuadrón, Ala 48)",
    status: "Primer cliente mundial · entregas desde 2028",
    badge: "order",
    image: "img/h175m.jpg",
    description: "Versión militar del helicóptero civil «supermedio» H175. España es su primer cliente en el mundo, con seis unidades compradas en diciembre de 2025 dentro del Plan Nacional de Helicópteros. Las entregas empiezan en 2028. Irá sin armamento y servirá para misiones de Estado y transporte de autoridades, en sustitución de los Super Puma y Cougar del 402 Escuadrón.",
    specsNote: "Datos del fabricante para el H175M.",
    specs: {
      "Motores": "2 × Pratt & Whitney Canada PT6C-67E (1.324 kW cada uno)",
      "Velocidad de crucero": "278 km/h (150 nudos)",
      "Alcance": "1.111 km (600 NM)",
      "Autonomía": "6 h",
      "Cabina": "12 m³ · 15 asientos de tropa",
      "Tripulación": "1–2 pilotos"
    }
  }
];
