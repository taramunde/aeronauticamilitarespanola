// Catálogo de aeronaves (base de datos principal)
//
// Campos de cada aeronave:
//   id, era, name, nick (apodo, opcional), designation, year, yearEnd (null = en servicio)
//   branch: ejercito | armada | republicana | nacional | tierra
//   type:   caza | bombardeo | reconocimiento | entrenamiento | hidroavion | transporte | ataque | cisterna | helicoptero
//   typeLabel, crew
//   image:       ruta de la foto (pon el archivo en img/aeronaves/ con ese nombre)
//   imageCredit: autor y licencia de la foto (obligatorio si viene de Wikimedia Commons)
//   engine, armament, units, description, history
//   Prestaciones numéricas: wingspan, length, height (m), emptyWeight, maxWeight (kg),
//                           maxSpeed (km/h), range (km), ceiling (m)
//   variants: [{ name, year, engine, desc }]
//
// Para ampliar sin tocar este archivo, crea otro y cárgalo después en index.html:
//   aircraftData = aircraftData.concat([ {...} ]);

let aircraftData = [
  {
    "id": 1,
    "era": "pioneros",
    "name": "Henri Farman",
    "designation": "—",
    "year": 1911,
    "yearEnd": 1919,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/henri-farman.jpg",
    "imageCredit": "",
    "engine": "Gnome rotativo de 50 CV",
    "wingspan": 10.5,
    "length": 12,
    "height": 3.5,
    "emptyWeight": 400,
    "maxWeight": 600,
    "maxSpeed": 60,
    "range": 150,
    "ceiling": 1000,
    "armament": "Ninguno",
    "units": "Aeródromo de Cuatro Vientos",
    "description": "Biplano propulsor de estructura de madera y tela con el que se formaron los primeros pilotos militares españoles.",
    "history": "Los primeros Henri Farman llegaron a Cuatro Vientos en la primavera de 1911. Con ellos volaron Kindelán, Herrera, Arrillaga, Ortiz Echagüe y Barrón, la primera promoción de pilotos de la Aeronáutica Militar. Sirvieron como escuela durante toda la década.",
    "variants": [
      {
        "name": "Henri Farman HF.III",
        "year": 1911,
        "engine": "Gnome de 50 CV",
        "desc": "Primeros aparatos de Cuatro Vientos, con los que voló la promoción de 1911."
      },
      {
        "name": "Maurice Farman MF.7 Longhorn",
        "year": 1913,
        "engine": "Renault de 70 CV",
        "desc": "Biplano de escuela y observación con el característico timón de profundidad delantero."
      },
      {
        "name": "Maurice Farman MF.11 Shorthorn",
        "year": 1915,
        "engine": "Renault de 80 CV",
        "desc": "Versión sin plano delantero, empleada en escuelas y en Marruecos."
      }
    ]
  },
  {
    "id": 2,
    "era": "pioneros",
    "name": "Nieuport IV.G",
    "designation": "—",
    "year": 1912,
    "yearEnd": 1916,
    "branch": "ejercito",
    "type": "reconocimiento",
    "typeLabel": "Reconocimiento",
    "crew": "2",
    "image": "img/aeronaves/nieuport-iv-g.jpg",
    "imageCredit": "",
    "engine": "Gnome rotativo de 50–70 CV",
    "wingspan": 11,
    "length": 8.5,
    "height": 2.6,
    "emptyWeight": 400,
    "maxWeight": 650,
    "maxSpeed": 110,
    "range": 300,
    "ceiling": 2000,
    "armament": "Pistolas y bombas lanzadas a mano",
    "units": "Escuadrilla expedicionaria de Tetuán",
    "description": "Monoplano monoplaza o biplaza de alas de alabeo por torsión, rápido para su época.",
    "history": "Formó parte del material enviado a Marruecos en 1913, cuando la aviación española realizó desde Tetuán sus primeras misiones de guerra: reconocimiento, enlace y lanzamiento de pequeñas bombas sobre posiciones rifeñas.",
    "variants": [
      {
        "name": "Nieuport IV.G (50 CV)",
        "year": 1912,
        "engine": "Gnome de 50 CV",
        "desc": "Versión inicial biplaza."
      },
      {
        "name": "Nieuport IV.G (70 CV)",
        "year": 1913,
        "engine": "Gnome de 70 CV",
        "desc": "Motor más potente para operar en el Protectorado."
      }
    ]
  },
  {
    "id": 3,
    "era": "pioneros",
    "name": "Lohner Pfeilflieger",
    "designation": "—",
    "year": 1913,
    "yearEnd": 1917,
    "branch": "ejercito",
    "type": "reconocimiento",
    "typeLabel": "Reconocimiento",
    "crew": "2",
    "image": "img/aeronaves/lohner-pfeilflieger.jpg",
    "imageCredit": "",
    "engine": "Austro-Daimler de 90–120 CV",
    "wingspan": 16.1,
    "length": 9.6,
    "height": 3.6,
    "emptyWeight": 800,
    "maxWeight": 1200,
    "maxSpeed": 115,
    "range": 350,
    "ceiling": 3000,
    "armament": "Bombas ligeras lanzadas a mano",
    "units": "Escuadrilla de Tetuán",
    "description": "Biplano austriaco de alas en flecha, conocido como «avión flecha», muy estable para la observación.",
    "history": "Los Lohner fueron protagonistas de las primeras operaciones en el Protectorado a finales de 1913, en una de las primeras campañas aéreas de la historia en las que se combinaron reconocimiento y bombardeo.",
    "variants": [
      {
        "name": "Pfeilflieger (90 CV)",
        "year": 1913,
        "engine": "Austro-Daimler de 90 CV",
        "desc": "Primeros ejemplares de la escuadrilla de Tetuán."
      },
      {
        "name": "Pfeilflieger (120 CV)",
        "year": 1914,
        "engine": "Austro-Daimler de 120 CV",
        "desc": "Mayor techo y carga de bombas."
      }
    ]
  },
  {
    "id": 4,
    "era": "pioneros",
    "name": "Avro 504K",
    "designation": "—",
    "year": 1919,
    "yearEnd": 1934,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/avro-504k.jpg",
    "imageCredit": "",
    "engine": "Le Rhône rotativo de 110 CV",
    "wingspan": 10.97,
    "length": 8.97,
    "height": 3.18,
    "emptyWeight": 558,
    "maxWeight": 830,
    "maxSpeed": 145,
    "range": 400,
    "ceiling": 4900,
    "armament": "Ninguno",
    "units": "Escuelas de Cuatro Vientos y Getafe",
    "description": "El entrenador británico por excelencia de la posguerra mundial, robusto y fácil de reparar.",
    "history": "Fue el avión escuela básico de la Aeronáutica Militar durante los años veinte y en él se formó buena parte de los pilotos que combatieron en Marruecos y, más tarde, en ambos bandos de la Guerra Civil.",
    "variants": [
      {
        "name": "Avro 504K (Le Rhône)",
        "year": 1919,
        "engine": "Le Rhône de 110 CV",
        "desc": "Versión estándar de escuela."
      },
      {
        "name": "Avro 504K (Clerget)",
        "year": 1920,
        "engine": "Clerget de 130 CV",
        "desc": "Ejemplares con motor rotativo alternativo."
      }
    ]
  },
  {
    "id": 5,
    "era": "pioneros",
    "name": "Airco DH.4",
    "designation": "—",
    "year": 1921,
    "yearEnd": 1934,
    "branch": "ejercito",
    "type": "bombardeo",
    "typeLabel": "Bombardeo",
    "crew": "2",
    "image": "img/aeronaves/airco-dh4.jpg",
    "imageCredit": "",
    "engine": "Rolls-Royce Eagle VIII de 375 CV (también Hispano-Suiza)",
    "wingspan": 12.92,
    "length": 9.35,
    "height": 3.35,
    "emptyWeight": 1083,
    "maxWeight": 1575,
    "maxSpeed": 230,
    "range": 600,
    "ceiling": 6700,
    "armament": "1 ametralladora Vickers fija, 1–2 Lewis móviles, 210 kg de bombas",
    "units": "Grupos de Melilla y Tetuán",
    "description": "Bombardero diurno biplaza británico, rápido y de gran techo para su tiempo.",
    "history": "Adquirido en número tras el desastre de Annual de 1921, cuando la suscripción popular y los créditos extraordinarios permitieron rearmar la aviación de Marruecos. Hizo bombardeo y apoyo a columnas hasta el final de la campaña.",
    "variants": [
      {
        "name": "DH.4 (Eagle VIII)",
        "year": 1921,
        "engine": "Rolls-Royce Eagle VIII de 375 CV",
        "desc": "Versión principal de bombardeo en Marruecos."
      },
      {
        "name": "DH.9 / DH.9A",
        "year": 1922,
        "engine": "Siddeley Puma / Liberty",
        "desc": "Sucesores del DH.4, también en servicio español; el DH.9 se fabricó bajo licencia."
      }
    ]
  },
  {
    "id": 6,
    "era": "pioneros",
    "name": "Bristol F.2B Fighter",
    "designation": "—",
    "year": 1921,
    "yearEnd": 1932,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "2",
    "image": "img/aeronaves/bristol-f2b.jpg",
    "imageCredit": "",
    "engine": "Rolls-Royce Falcon III de 275 CV / Hispano-Suiza de 300 CV",
    "wingspan": 11.96,
    "length": 7.87,
    "height": 2.97,
    "emptyWeight": 975,
    "maxWeight": 1474,
    "maxSpeed": 198,
    "range": 500,
    "ceiling": 5500,
    "armament": "1 Vickers fija y 1–2 Lewis móviles",
    "units": "Escuadrillas de caza y reconocimiento de Marruecos",
    "description": "Biplaza de caza y reconocimiento, uno de los mejores aviones aliados de la Primera Guerra Mundial.",
    "history": "Empleado en Marruecos tanto en misiones de escolta como de ametrallamiento a baja cota. Su maniobrabilidad lo hizo apreciado por las tripulaciones.",
    "variants": [
      {
        "name": "F.2B (Falcon III)",
        "year": 1921,
        "engine": "Rolls-Royce Falcon III de 275 CV",
        "desc": "Ejemplares de origen británico."
      },
      {
        "name": "F.2B (Hispano-Suiza)",
        "year": 1923,
        "engine": "Hispano-Suiza de 300 CV",
        "desc": "Remotorizados en España con motor nacional."
      }
    ]
  },
  {
    "id": 7,
    "era": "pioneros",
    "name": "Breguet XIX",
    "designation": "—",
    "year": 1924,
    "yearEnd": 1940,
    "branch": "ejercito",
    "type": "reconocimiento",
    "typeLabel": "Reconocimiento",
    "crew": "2",
    "image": "img/aeronaves/breguet-xix.jpg",
    "imageCredit": "",
    "engine": "Hispano-Suiza 12Hb de 500 CV",
    "wingspan": 14.83,
    "length": 9.61,
    "height": 3.69,
    "emptyWeight": 1387,
    "maxWeight": 2500,
    "maxSpeed": 235,
    "range": 800,
    "ceiling": 7200,
    "armament": "1 Vickers fija, 2 Lewis móviles, hasta 400 kg de bombas",
    "units": "Grupos de reconocimiento y bombardeo ligero de toda España y Marruecos",
    "description": "Sesquiplano francés todo metal que se convirtió en el avión más numeroso de la aviación española de entreguerras.",
    "history": "CASA lo fabricó bajo licencia en Getafe desde 1926. Fue la columna vertebral de la Aeronáutica Militar en Alhucemas y durante el resto de la campaña, protagonizó raids como el Madrid–Manila y el Sevilla–Bahía y combatió con ambos bandos en 1936. Las versiones de gran raid (GR y Super Bidón) dieron nombre a los vuelos «Jesús del Gran Poder» y «Cuatro Vientos».",
    "variants": [
      {
        "name": "Breguet XIX A2",
        "year": 1924,
        "engine": "Hispano-Suiza 12Hb de 500 CV",
        "desc": "Reconocimiento y observación."
      },
      {
        "name": "Breguet XIX B2",
        "year": 1926,
        "engine": "Hispano-Suiza 12Hb de 500 CV",
        "desc": "Bombardeo ligero, fabricado por CASA."
      },
      {
        "name": "Breguet XIX GR",
        "year": 1929,
        "engine": "Hispano-Suiza 12Lb de 600 CV",
        "desc": "Gran Raid con depósitos ampliados: «Jesús del Gran Poder»."
      },
      {
        "name": "Breguet XIX TR Super Bidón",
        "year": 1933,
        "engine": "Hispano-Suiza 12Nb de 650 CV",
        "desc": "Máxima autonomía: «Cuatro Vientos»."
      }
    ]
  },
  {
    "id": 8,
    "era": "pioneros",
    "name": "Dornier Wal",
    "designation": "—",
    "year": 1922,
    "yearEnd": 1940,
    "branch": "ejercito",
    "type": "hidroavion",
    "typeLabel": "Hidroavión / anfibio",
    "crew": "4",
    "image": "img/aeronaves/dornier-wal.jpg",
    "imageCredit": "",
    "engine": "2 × Napier Lion de 450 CV en tándem",
    "wingspan": 22.5,
    "length": 17.25,
    "height": 5.2,
    "emptyWeight": 3600,
    "maxWeight": 5700,
    "maxSpeed": 185,
    "range": 2200,
    "ceiling": 3500,
    "armament": "2–4 ametralladoras Lewis, bombas ligeras",
    "units": "Base de hidros de Mar Chica (Melilla), Los Alcázares, Pollensa",
    "description": "Hidroavión de casco metálico con motores en tándem sobre el ala, construido también por CASA en Cádiz.",
    "history": "El Dornier Wal «Plus Ultra» de Ramón Franco cruzó el Atlántico Sur en 1926 y hoy se conserva en Argentina. La Patrulla Atlántida voló con Wal hasta Guinea en 1926–27. Los hidros de Mar Chica fueron clave en el apoyo al desembarco de Alhucemas.",
    "variants": [
      {
        "name": "Wal (Napier Lion)",
        "year": 1922,
        "engine": "2 × Napier Lion de 450 CV",
        "desc": "Versión del Plus Ultra y de la Patrulla Atlántida."
      },
      {
        "name": "Wal CASA (Hispano-Suiza)",
        "year": 1927,
        "engine": "2 × Hispano-Suiza 12 de 500–600 CV",
        "desc": "Producción de CASA en Cádiz."
      }
    ]
  },
  {
    "id": 9,
    "era": "pioneros",
    "name": "Nieuport-Delage NiD.52",
    "designation": "—",
    "year": 1928,
    "yearEnd": 1937,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/nieuport-delage-nid52.jpg",
    "imageCredit": "",
    "engine": "Hispano-Suiza 12Hb de 500 CV",
    "wingspan": 12,
    "length": 7.5,
    "height": 3,
    "emptyWeight": 1360,
    "maxWeight": 1850,
    "maxSpeed": 255,
    "range": 400,
    "ceiling": 8000,
    "armament": "2 ametralladoras Vickers de 7,7 mm",
    "units": "Grupos de caza de Getafe, León y Sevilla",
    "description": "Sesquiplano de caza francés construido por Hispano-Suiza en Guadalajara.",
    "history": "Era el caza estándar español en julio de 1936. Anticuado frente a los aviones extranjeros que llegaron después, combatió en el verano de 1936 en ambos bandos antes de ser relegado a escuela.",
    "variants": [
      {
        "name": "NiD.52 Hispano",
        "year": 1928,
        "engine": "Hispano-Suiza 12Hb de 500 CV",
        "desc": "Producción de Hispano-Suiza en Guadalajara, unos 90 ejemplares."
      }
    ]
  },
  {
    "id": 10,
    "era": "guerra",
    "name": "Polikarpov I-15",
    "nick": "Chato",
    "designation": "—",
    "year": 1936,
    "yearEnd": 1953,
    "branch": "republicana",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/polikarpov-i15-chato.jpg",
    "imageCredit": "",
    "engine": "M-25 (Wright Cyclone) de 715 CV",
    "wingspan": 9.75,
    "length": 6.1,
    "height": 2.2,
    "emptyWeight": 1012,
    "maxWeight": 1415,
    "maxSpeed": 360,
    "range": 500,
    "ceiling": 9800,
    "armament": "4 ametralladoras PV-1 de 7,62 mm",
    "units": "Escuadrillas de caza de la República",
    "description": "Biplano soviético de ala de gaviota, muy maniobrable, apodado «Chato» por su morro corto.",
    "history": "Llegó en octubre de 1936 y entró en combate sobre Madrid el 4 de noviembre. Se fabricó también en España, en talleres de Reus y Sabadell. Tras la guerra, los ejemplares capturados siguieron volando en el Ejército del Aire hasta comienzos de los cincuenta.",
    "variants": [
      {
        "name": "I-15 soviético",
        "year": 1936,
        "engine": "M-25 de 715 CV",
        "desc": "Primeros lotes llegados por mar en octubre de 1936."
      },
      {
        "name": "I-15 de producción española",
        "year": 1937,
        "engine": "Wright Cyclone de 715 CV",
        "desc": "Fabricado en talleres republicanos de Cataluña."
      },
      {
        "name": "I-15bis «Superchato»",
        "year": 1939,
        "engine": "M-25V de 750 CV",
        "desc": "Ala superior recta; pocos llegaron antes del final de la guerra."
      }
    ]
  },
  {
    "id": 11,
    "era": "guerra",
    "name": "Polikarpov I-16",
    "nick": "Mosca",
    "designation": "—",
    "year": 1936,
    "yearEnd": 1953,
    "branch": "republicana",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/polikarpov-i16-mosca.jpg",
    "imageCredit": "",
    "engine": "M-25 de 715–750 CV",
    "wingspan": 9,
    "length": 6.13,
    "height": 3.25,
    "emptyWeight": 1327,
    "maxWeight": 1660,
    "maxSpeed": 440,
    "range": 540,
    "ceiling": 9100,
    "armament": "2–4 ametralladoras ShKAS de 7,62 mm",
    "units": "Grupo 21 de caza",
    "description": "Primer caza monoplano de ala baja y tren retráctil en servicio operativo. Para los republicanos era el «Mosca»; para los nacionales, el «Rata».",
    "history": "Debutó en noviembre de 1936 y fue el caza más rápido del frente hasta la llegada de los Bf 109. Tras la guerra, unos veinte ejemplares sirvieron en el Ejército del Aire hasta 1953.",
    "variants": [
      {
        "name": "Tipo 5",
        "year": 1936,
        "engine": "M-25A de 715 CV",
        "desc": "Versión inicial con 2 ametralladoras."
      },
      {
        "name": "Tipo 6",
        "year": 1937,
        "engine": "M-25A de 730 CV",
        "desc": "Mejoras de planta motriz."
      },
      {
        "name": "Tipo 10 «Supermosca»",
        "year": 1937,
        "engine": "M-25V de 750 CV",
        "desc": "4 ametralladoras ShKAS, fabricado también en Alicante."
      },
      {
        "name": "UTI-4",
        "year": 1938,
        "engine": "M-25 de 715 CV",
        "desc": "Biplaza de entrenamiento."
      }
    ]
  },
  {
    "id": 12,
    "era": "guerra",
    "name": "Tupolev SB",
    "nick": "Katiuska",
    "designation": "—",
    "year": 1936,
    "yearEnd": 1950,
    "branch": "republicana",
    "type": "bombardeo",
    "typeLabel": "Bombardeo",
    "crew": "3",
    "image": "img/aeronaves/tupolev-sb-katiuska.jpg",
    "imageCredit": "",
    "engine": "2 × M-100 de 750 CV",
    "wingspan": 20.33,
    "length": 12.27,
    "height": 3.25,
    "emptyWeight": 4060,
    "maxWeight": 5730,
    "maxSpeed": 420,
    "range": 1200,
    "ceiling": 9500,
    "armament": "4 ShKAS de 7,62 mm, 600 kg de bombas",
    "units": "Grupo 24 de bombardeo",
    "description": "Bombardero medio soviético de construcción metálica, tan rápido que al principio superaba a los cazas enemigos.",
    "history": "Entró en combate en octubre de 1936. Bombardeó objetivos en todos los frentes, de Teruel al Ebro. Su velocidad le permitió operar sin escolta durante el primer año de la guerra.",
    "variants": [
      {
        "name": "SB-2 M-100",
        "year": 1936,
        "engine": "2 × M-100 de 750 CV",
        "desc": "Versión principal en España."
      },
      {
        "name": "SB-2 M-100A",
        "year": 1937,
        "engine": "2 × M-100A de 860 CV",
        "desc": "Lotes posteriores más potentes."
      }
    ]
  },
  {
    "id": 13,
    "era": "guerra",
    "name": "Polikarpov R-Z",
    "nick": "Natacha",
    "designation": "—",
    "year": 1937,
    "yearEnd": 1946,
    "branch": "republicana",
    "type": "ataque",
    "typeLabel": "Ataque",
    "crew": "2",
    "image": "img/aeronaves/polikarpov-rz-natacha.jpg",
    "imageCredit": "",
    "engine": "M-34 de 820 CV",
    "wingspan": 15.5,
    "length": 9.72,
    "height": 3.5,
    "emptyWeight": 2007,
    "maxWeight": 3150,
    "maxSpeed": 316,
    "range": 1000,
    "ceiling": 8700,
    "armament": "2 ShKAS, hasta 400 kg de bombas",
    "units": "Grupo 30 de asalto y reconocimiento",
    "description": "Biplano biplaza de asalto y reconocimiento.",
    "history": "Llegaron en 1937 y se emplearon en ataque al suelo y bombardeo nocturno. Los nacionales capturaron varios que siguieron en servicio tras la guerra.",
    "variants": [
      {
        "name": "R-Z",
        "year": 1937,
        "engine": "M-34N de 820 CV",
        "desc": "Asalto y reconocimiento."
      },
      {
        "name": "R-5 «Rasante»",
        "year": 1937,
        "engine": "M-17 de 680 CV",
        "desc": "Modelo anterior, también empleado por la República."
      }
    ]
  },
  {
    "id": 14,
    "era": "guerra",
    "name": "Fiat CR.32",
    "nick": "Chirri",
    "designation": "HA-132-L",
    "year": 1936,
    "yearEnd": 1953,
    "branch": "nacional",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/fiat-cr32-chirri.jpg",
    "imageCredit": "",
    "engine": "Fiat A.30 RA de 600 CV",
    "wingspan": 9.5,
    "length": 7.47,
    "height": 2.63,
    "emptyWeight": 1325,
    "maxWeight": 1850,
    "maxSpeed": 360,
    "range": 750,
    "ceiling": 8800,
    "armament": "2 Breda-SAFAT de 12,7 mm",
    "units": "Grupo 2-G-3 de García-Morato; Aviación Legionaria",
    "description": "Biplano italiano de caza, rígido y bien armado, el rival natural del Chato.",
    "history": "Llegó en agosto de 1936. Con él consiguió García-Morato la mayoría de sus victorias y su grupo adoptó el lema «Vista, suerte y al toro». Hispano Aviación lo construyó bajo licencia como HA-132-L, en servicio de escuela hasta 1953.",
    "variants": [
      {
        "name": "CR.32",
        "year": 1936,
        "engine": "Fiat A.30 RA de 600 CV",
        "desc": "Primeros lotes de la Aviación Legionaria y españoles."
      },
      {
        "name": "CR.32 quater",
        "year": 1937,
        "engine": "Fiat A.30 RA de 600 CV",
        "desc": "Aligerado y con mejor radio."
      },
      {
        "name": "HA-132-L",
        "year": 1939,
        "engine": "Fiat A.30 RA (Hispano)",
        "desc": "Producción española de posguerra para escuelas."
      }
    ]
  },
  {
    "id": 15,
    "era": "guerra",
    "name": "Heinkel He 51",
    "designation": "—",
    "year": 1936,
    "yearEnd": 1952,
    "branch": "nacional",
    "type": "ataque",
    "typeLabel": "Ataque",
    "crew": "1",
    "image": "img/aeronaves/heinkel-he51.jpg",
    "imageCredit": "",
    "engine": "BMW VI de 750 CV",
    "wingspan": 11,
    "length": 8.4,
    "height": 3.2,
    "emptyWeight": 1460,
    "maxWeight": 1895,
    "maxSpeed": 330,
    "range": 570,
    "ceiling": 7700,
    "armament": "2 MG 17 de 7,92 mm, bombas ligeras",
    "units": "Legión Cóndor; escuadrillas nacionales de asalto",
    "description": "Biplano alemán de caza que, superado por los I-15 e I-16, se reconvirtió en avión de asalto.",
    "history": "Fueron los primeros cazas alemanes en llegar en agosto de 1936. Los pilotos españoles desarrollaron con ellos tácticas de ataque en cadena a baja cota que más tarde adoptó la Luftwaffe.",
    "variants": [
      {
        "name": "He 51B",
        "year": 1936,
        "engine": "BMW VI 7,3 de 750 CV",
        "desc": "Caza, después asalto."
      },
      {
        "name": "He 51C",
        "year": 1937,
        "engine": "BMW VI de 750 CV",
        "desc": "Versión específica de ataque al suelo."
      }
    ]
  },
  {
    "id": 16,
    "era": "guerra",
    "name": "Junkers Ju 52/3m",
    "nick": "Pava",
    "designation": "T.2",
    "year": 1936,
    "yearEnd": 1978,
    "branch": "nacional",
    "type": "transporte",
    "typeLabel": "Transporte",
    "crew": "3",
    "image": "img/aeronaves/junkers-ju52-pava.jpg",
    "imageCredit": "",
    "engine": "3 × BMW 132 de 660 CV",
    "wingspan": 29.25,
    "length": 18.9,
    "height": 4.5,
    "emptyWeight": 6500,
    "maxWeight": 10500,
    "maxSpeed": 265,
    "range": 1000,
    "ceiling": 5500,
    "armament": "2–3 ametralladoras, hasta 1.500 kg de bombas",
    "units": "Legión Cóndor; tras 1939, alas de transporte",
    "description": "Trimotor alemán de ala ondulada, transporte y bombardero según la necesidad.",
    "history": "En julio y agosto de 1936 protagonizó el primer gran puente aéreo militar de la historia, trasladando miles de soldados del Ejército de África de Tetuán a Sevilla. Después fue bombardero hasta 1937. CASA lo fabricó como CASA 352 y sirvió hasta finales de los setenta.",
    "variants": [
      {
        "name": "Ju 52/3m g3e",
        "year": 1936,
        "engine": "3 × BMW 132A de 660 CV",
        "desc": "Transporte del puente del Estrecho y bombardero."
      },
      {
        "name": "Ju 52/3m g4e",
        "year": 1937,
        "engine": "3 × BMW 132",
        "desc": "Versión de transporte mejorada."
      }
    ]
  },
  {
    "id": 17,
    "era": "guerra",
    "name": "Heinkel He 111",
    "nick": "Pedro",
    "designation": "B.2",
    "year": 1937,
    "yearEnd": 1975,
    "branch": "nacional",
    "type": "bombardeo",
    "typeLabel": "Bombardeo",
    "crew": "4–5",
    "image": "img/aeronaves/heinkel-he111-pedro.jpg",
    "imageCredit": "",
    "engine": "2 × Jumo 211 (versión H) de 1.200 CV",
    "wingspan": 22.6,
    "length": 16.4,
    "height": 4,
    "emptyWeight": 8680,
    "maxWeight": 14000,
    "maxSpeed": 400,
    "range": 2000,
    "ceiling": 7000,
    "armament": "5–7 ametralladoras, hasta 2.000 kg de bombas",
    "units": "Legión Cóndor K/88; tras 1939, regimientos de bombardeo",
    "description": "Bombardero medio alemán de ala elíptica, apodado «Pedro» por los soldados.",
    "history": "Debutó con la Legión Cóndor en marzo de 1937. Tras la guerra quedó en España y CASA lo produjo bajo licencia como CASA 2.111, con motores Jumo y luego Rolls-Royce Merlin.",
    "variants": [
      {
        "name": "He 111B",
        "year": 1937,
        "engine": "2 × DB 600 de 950 CV",
        "desc": "Primera versión en la Legión Cóndor."
      },
      {
        "name": "He 111E",
        "year": 1938,
        "engine": "2 × Jumo 211 de 1.000 CV",
        "desc": "Mayor carga de bombas."
      },
      {
        "name": "He 111H",
        "year": 1939,
        "engine": "2 × Jumo 211 de 1.200 CV",
        "desc": "Morro acristalado; base del CASA 2.111."
      }
    ]
  },
  {
    "id": 18,
    "era": "guerra",
    "name": "Messerschmitt Bf 109",
    "designation": "C.4",
    "year": 1937,
    "yearEnd": 1954,
    "branch": "nacional",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/messerschmitt-bf109.jpg",
    "imageCredit": "",
    "engine": "Daimler-Benz DB 601 de 1.100 CV (versión E)",
    "wingspan": 9.87,
    "length": 8.64,
    "height": 2.6,
    "emptyWeight": 2010,
    "maxWeight": 2510,
    "maxSpeed": 560,
    "range": 660,
    "ceiling": 10500,
    "armament": "2 MG 17 y 2 cañones MG FF de 20 mm (E-3)",
    "units": "Legión Cóndor J/88; Grupo 5-G-5",
    "description": "El caza alemán de referencia, probado en combate por primera vez en España.",
    "history": "Los primeros Bf 109B llegaron a la Legión Cóndor en la primavera de 1937. Werner Mölders desarrolló aquí la formación en «cuatro dedos». Al final de la guerra pasaron al Ejército del Aire, que con ellos dio origen al Hispano HA-1112.",
    "variants": [
      {
        "name": "Bf 109B",
        "year": 1937,
        "engine": "Jumo 210 de 640 CV",
        "desc": "Primeros ejemplares de la J/88."
      },
      {
        "name": "Bf 109D",
        "year": 1938,
        "engine": "Jumo 210 de 680 CV",
        "desc": "Lotes intermedios."
      },
      {
        "name": "Bf 109E",
        "year": 1939,
        "engine": "DB 601A de 1.100 CV",
        "desc": "La versión más potente en España; quedó en el Ejército del Aire."
      }
    ]
  },
  {
    "id": 19,
    "era": "guerra",
    "name": "Savoia-Marchetti SM.79",
    "designation": "B.3",
    "year": 1937,
    "yearEnd": 1952,
    "branch": "nacional",
    "type": "bombardeo",
    "typeLabel": "Bombardeo",
    "crew": "5",
    "image": "img/aeronaves/savoia-marchetti-sm79.jpg",
    "imageCredit": "",
    "engine": "3 × Alfa Romeo 126 de 780 CV",
    "wingspan": 21.2,
    "length": 16.2,
    "height": 4.1,
    "emptyWeight": 7700,
    "maxWeight": 10500,
    "maxSpeed": 430,
    "range": 1900,
    "ceiling": 6500,
    "armament": "3–4 ametralladoras, 1.250 kg de bombas",
    "units": "Aviación Legionaria (Baleares); después Ejército del Aire",
    "description": "Trimotor italiano rápido, uno de los mejores bombarderos medios de su generación.",
    "history": "Operó desde Mallorca con la Aviación Legionaria contra puertos y ciudades del Mediterráneo republicano. El Ejército del Aire lo mantuvo hasta comienzos de los cincuenta.",
    "variants": [
      {
        "name": "SM.79-I",
        "year": 1937,
        "engine": "3 × Alfa Romeo 126 RC.34 de 780 CV",
        "desc": "Versión de bombardeo empleada desde Baleares."
      }
    ]
  },
  {
    "id": 20,
    "era": "posguerra",
    "name": "Hispano HA-1112-M1L",
    "nick": "Buchón",
    "designation": "C.4K",
    "year": 1954,
    "yearEnd": 1965,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/hispano-ha1112-buchon.jpg",
    "imageCredit": "",
    "engine": "Rolls-Royce Merlin 500-45 de 1.600 CV",
    "wingspan": 9.9,
    "length": 9,
    "height": 2.6,
    "emptyWeight": 2666,
    "maxWeight": 3330,
    "maxSpeed": 673,
    "range": 765,
    "ceiling": 10200,
    "armament": "2 cañones Hispano de 20 mm, cohetes de 80 mm",
    "units": "Escuadrones de caza y ataque de Tablada y Morón",
    "description": "Célula del Bf 109G con motor Merlin británico: el último caza de pistón producido en serie en Europa.",
    "history": "La falta de motores alemanes tras 1945 obligó a Hispano Aviación a buscar alternativas hasta adoptar el Merlin. El abultado carenado inferior le valió el apodo de «Buchón». En 1968 muchos volaron en la película «La batalla de Inglaterra».",
    "variants": [
      {
        "name": "HA-1109-J1L",
        "year": 1951,
        "engine": "Hispano-Suiza 12Z-89 de 1.300 CV",
        "desc": "Primera adaptación con motor francés."
      },
      {
        "name": "HA-1112-K1L «Tripala»",
        "year": 1953,
        "engine": "Hispano-Suiza 12Z-17 de 1.300 CV",
        "desc": "Hélice tripala y cohetes."
      },
      {
        "name": "HA-1112-M1L «Buchón»",
        "year": 1954,
        "engine": "Rolls-Royce Merlin 500-45 de 1.600 CV",
        "desc": "Versión definitiva."
      },
      {
        "name": "HA-1112-M4L",
        "year": 1958,
        "engine": "Rolls-Royce Merlin",
        "desc": "Biplaza de entrenamiento."
      }
    ]
  },
  {
    "id": 21,
    "era": "posguerra",
    "name": "CASA 2.111",
    "designation": "B.2I",
    "year": 1950,
    "yearEnd": 1975,
    "branch": "ejercito",
    "type": "bombardeo",
    "typeLabel": "Bombardeo",
    "crew": "5",
    "image": "img/aeronaves/casa-2111.jpg",
    "imageCredit": "",
    "engine": "2 × Rolls-Royce Merlin 500-29 de 1.600 CV (versión D)",
    "wingspan": 22.6,
    "length": 16.4,
    "height": 4,
    "emptyWeight": 8700,
    "maxWeight": 14000,
    "maxSpeed": 405,
    "range": 2800,
    "ceiling": 8500,
    "armament": "Ametralladoras y hasta 2.000 kg de bombas",
    "units": "Alas de bombardeo de Tablada, Valenzuela y Albacete",
    "description": "Versión española del He 111H construida por CASA en Tablada.",
    "history": "Fue el bombardero del Ejército del Aire durante dos décadas y combatió en la guerra de Ifni-Sáhara de 1957–58, la última guerra en la que intervino la aviación española en solitario.",
    "variants": [
      {
        "name": "CASA 2.111A/B",
        "year": 1950,
        "engine": "2 × Jumo 211F",
        "desc": "Producción inicial con motores alemanes."
      },
      {
        "name": "CASA 2.111D",
        "year": 1956,
        "engine": "2 × Rolls-Royce Merlin 500-29 de 1.600 CV",
        "desc": "Remotorizado con Merlin."
      }
    ]
  },
  {
    "id": 22,
    "era": "posguerra",
    "name": "CASA 352L",
    "nick": "Pava",
    "designation": "T.2B",
    "year": 1945,
    "yearEnd": 1978,
    "branch": "ejercito",
    "type": "transporte",
    "typeLabel": "Transporte",
    "crew": "3",
    "image": "img/aeronaves/casa-352l.jpg",
    "imageCredit": "",
    "engine": "3 × ENMASA Beta B-4 de 775 CV",
    "wingspan": 29.2,
    "length": 18.9,
    "height": 4.5,
    "emptyWeight": 6500,
    "maxWeight": 10500,
    "maxSpeed": 250,
    "range": 900,
    "ceiling": 5500,
    "armament": "Ninguno",
    "units": "Alas de transporte y escuelas de paracaidismo de Alcantarilla",
    "description": "Junkers Ju 52 fabricado por CASA con motores españoles.",
    "history": "Columna vertebral del transporte militar de posguerra y avión de lanzamiento de la Escuela de Paracaidistas. Apoyó a las guarniciones de Ifni y Sáhara en 1957–58.",
    "variants": [
      {
        "name": "CASA 352",
        "year": 1945,
        "engine": "3 × BMW 132",
        "desc": "Primeros ejemplares con motor alemán."
      },
      {
        "name": "CASA 352L",
        "year": 1952,
        "engine": "3 × ENMASA Beta B-4 de 775 CV",
        "desc": "Motores españoles, versión mayoritaria."
      }
    ]
  },
  {
    "id": 23,
    "era": "posguerra",
    "name": "North American T-6 Texan",
    "designation": "E.16",
    "year": 1954,
    "yearEnd": 1982,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/north-american-t6.jpg",
    "imageCredit": "",
    "engine": "Pratt & Whitney R-1340 de 600 CV",
    "wingspan": 12.8,
    "length": 8.84,
    "height": 3.57,
    "emptyWeight": 1886,
    "maxWeight": 2548,
    "maxSpeed": 335,
    "range": 1175,
    "ceiling": 7400,
    "armament": "Versión de ataque: ametralladoras y cohetes",
    "units": "Academia General del Aire; escuadrones de ataque en Ifni-Sáhara",
    "description": "Entrenador avanzado estadounidense llegado con los acuerdos de 1953.",
    "history": "Formó a generaciones de pilotos y, armado, fue el avión de ataque más eficaz en Ifni-Sáhara contra las bandas del Ejército de Liberación.",
    "variants": [
      {
        "name": "T-6D",
        "year": 1954,
        "engine": "R-1340 de 600 CV",
        "desc": "Entrenamiento avanzado."
      },
      {
        "name": "T-6G",
        "year": 1958,
        "engine": "R-1340-AN-1 de 600 CV",
        "desc": "Aviónica mejorada."
      },
      {
        "name": "T-6 armado",
        "year": 1957,
        "engine": "R-1340 de 600 CV",
        "desc": "Ametralladoras y cohetes para Ifni-Sáhara."
      }
    ]
  },
  {
    "id": 24,
    "era": "reactor",
    "name": "Hispano HA-200 Saeta",
    "designation": "E.14",
    "year": 1962,
    "yearEnd": 1981,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/hispano-ha200-saeta.jpg",
    "imageCredit": "",
    "engine": "2 × Turbomeca Marboré II de 400 kgf",
    "wingspan": 10.42,
    "length": 8.97,
    "height": 2.85,
    "emptyWeight": 1930,
    "maxWeight": 3500,
    "maxSpeed": 690,
    "range": 1500,
    "ceiling": 12000,
    "armament": "Versión A.10 Super Saeta: 2 cañones de 20 mm y cohetes",
    "units": "Academia General del Aire; Ala 214 de ataque (Super Saeta)",
    "description": "Primer reactor diseñado y construido en España, obra del equipo de Willy Messerschmitt en Hispano Aviación.",
    "history": "Voló por primera vez en agosto de 1955 en San Pablo (Sevilla). Fue entrenador en la Academia General del Aire y la versión de ataque HA-220 Super Saeta operó en Canarias y el Sáhara. Egipto lo construyó bajo licencia como Al-Kahira.",
    "variants": [
      {
        "name": "HA-200A",
        "year": 1962,
        "engine": "2 × Marboré II de 400 kgf",
        "desc": "Serie inicial de entrenamiento."
      },
      {
        "name": "HA-200D",
        "year": 1965,
        "engine": "2 × Marboré IID",
        "desc": "Aviónica y sistemas mejorados."
      },
      {
        "name": "HA-220 Super Saeta (A.10)",
        "year": 1970,
        "engine": "2 × Marboré VI de 480 kgf",
        "desc": "Monoplaza de ataque."
      }
    ]
  },
  {
    "id": 25,
    "era": "reactor",
    "name": "North American F-86F Sabre",
    "designation": "C.5",
    "year": 1955,
    "yearEnd": 1972,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/north-american-f86f-sabre.jpg",
    "imageCredit": "",
    "engine": "General Electric J47-GE-27 de 2.700 kgf",
    "wingspan": 11.3,
    "length": 11.4,
    "height": 4.5,
    "emptyWeight": 5045,
    "maxWeight": 8230,
    "maxSpeed": 1105,
    "range": 1500,
    "ceiling": 14900,
    "armament": "6 ametralladoras Browning de 12,7 mm, cohetes, bombas",
    "units": "Alas de caza 1, 2, 4, 5 y 6 (Manises, Zaragoza, Son San Juan, Morón, Torrejón)",
    "description": "El caza que introdujo al Ejército del Aire en la era del reactor.",
    "history": "Llegó en 1955 gracias a los Pactos de Madrid. España recibió más de 240 Sabre, que dotaron media docena de alas de caza y la primera patrulla acrobática a reacción española, la Ascua.",
    "variants": [
      {
        "name": "F-86F-25/30",
        "year": 1955,
        "engine": "J47-GE-27 de 2.700 kgf",
        "desc": "Lotes de la ayuda estadounidense."
      },
      {
        "name": "F-86F-35",
        "year": 1956,
        "engine": "J47-GE-27",
        "desc": "Capacidad de ataque al suelo ampliada."
      }
    ]
  },
  {
    "id": 26,
    "era": "reactor",
    "name": "Lockheed T-33A",
    "designation": "E.15",
    "year": 1954,
    "yearEnd": 1986,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/lockheed-t33.jpg",
    "imageCredit": "",
    "engine": "Allison J33-A-35 de 2.450 kgf",
    "wingspan": 11.85,
    "length": 11.51,
    "height": 3.56,
    "emptyWeight": 3667,
    "maxWeight": 6830,
    "maxSpeed": 880,
    "range": 2050,
    "ceiling": 14000,
    "armament": "2 ametralladoras de 12,7 mm (algunas versiones)",
    "units": "Escuela de Reactores de Talavera la Real",
    "description": "Biplaza de entrenamiento derivado del P-80 Shooting Star.",
    "history": "Fue el primer reactor en servicio español, en 1954, y durante tres décadas el avión con el que los pilotos daban el salto al vuelo a reacción en Talavera la Real.",
    "variants": [
      {
        "name": "T-33A",
        "year": 1954,
        "engine": "Allison J33-A-35 de 2.450 kgf",
        "desc": "Versión de entrenamiento estándar."
      }
    ]
  },
  {
    "id": 27,
    "era": "reactor",
    "name": "Lockheed F-104G Starfighter",
    "designation": "C.8",
    "year": 1965,
    "yearEnd": 1972,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/lockheed-f104g.jpg",
    "imageCredit": "",
    "engine": "General Electric J79-GE-11A de 7.170 kgf con poscombustión",
    "wingspan": 6.36,
    "length": 16.66,
    "height": 4.09,
    "emptyWeight": 6350,
    "maxWeight": 13170,
    "maxSpeed": 2330,
    "range": 1750,
    "ceiling": 15240,
    "armament": "Cañón M61 Vulcan de 20 mm, misiles AIM-9 Sidewinder",
    "units": "Ala 16 (escuadrón 161), Torrejón",
    "description": "El «misil con piloto»: primer caza Mach 2 del Ejército del Aire.",
    "history": "Llegaron 18 F-104G y 3 biplazas TF-104G en 1965. Volaron siete años sin un solo accidente mortal, un caso excepcional entre los usuarios del Starfighter, y en 1972 se devolvieron y pasaron a Grecia y Turquía.",
    "variants": [
      {
        "name": "F-104G (C.8)",
        "year": 1965,
        "engine": "J79-GE-11A",
        "desc": "18 monoplazas."
      },
      {
        "name": "TF-104G (CE.8)",
        "year": 1965,
        "engine": "J79-GE-11A",
        "desc": "3 biplazas de entrenamiento."
      }
    ]
  },
  {
    "id": 28,
    "era": "reactor",
    "name": "Dassault Mirage IIIEE",
    "designation": "C.11",
    "year": 1970,
    "yearEnd": 1992,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/dassault-mirage-iiiee.jpg",
    "imageCredit": "",
    "engine": "SNECMA Atar 9C de 6.200 kgf con poscombustión",
    "wingspan": 8.22,
    "length": 15.03,
    "height": 4.5,
    "emptyWeight": 7050,
    "maxWeight": 13700,
    "maxSpeed": 2350,
    "range": 2400,
    "ceiling": 17000,
    "armament": "2 cañones DEFA de 30 mm, misiles Matra R530 y AIM-9",
    "units": "Ala 11, Manises (Valencia)",
    "description": "Caza de ala en delta francés, primer avión de combate europeo moderno del Ejército del Aire.",
    "history": "España recibió 24 monoplazas IIIEE y 6 biplazas IIIDE a partir de 1970, con lo que diversificó proveedores tras depender de EE. UU. Defendieron el Levante y el Mediterráneo durante dos décadas.",
    "variants": [
      {
        "name": "Mirage IIIEE (C.11)",
        "year": 1970,
        "engine": "Atar 9C",
        "desc": "24 monoplazas."
      },
      {
        "name": "Mirage IIIDE (CE.11)",
        "year": 1970,
        "engine": "Atar 9C",
        "desc": "6 biplazas sin radar."
      }
    ]
  },
  {
    "id": 29,
    "era": "reactor",
    "name": "McDonnell Douglas F-4C Phantom II",
    "designation": "C.12",
    "year": 1971,
    "yearEnd": 1989,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "2",
    "image": "img/aeronaves/mcdonnell-douglas-f4c.jpg",
    "imageCredit": "",
    "engine": "2 × General Electric J79-GE-15 de 7.710 kgf",
    "wingspan": 11.7,
    "length": 17.76,
    "height": 4.96,
    "emptyWeight": 12700,
    "maxWeight": 26300,
    "maxSpeed": 2300,
    "range": 2600,
    "ceiling": 18300,
    "armament": "Misiles AIM-7 Sparrow y AIM-9, bombas, cañón en contenedor",
    "units": "Ala 12, Torrejón",
    "description": "Caza pesado biplaza, el avión de combate más potente de España en los años setenta.",
    "history": "Llegaron 36 F-4C procedentes de la USAF, después completados con RF-4C de reconocimiento, que siguieron volando hasta 2002. Fue el primer avión español capaz de repostar en vuelo de forma operativa.",
    "variants": [
      {
        "name": "F-4C (C.12)",
        "year": 1971,
        "engine": "2 × J79-GE-15",
        "desc": "Caza y ataque, 36 ejemplares."
      },
      {
        "name": "RF-4C (CR.12)",
        "year": 1978,
        "engine": "2 × J79-GE-15",
        "desc": "Reconocimiento fotográfico, en servicio hasta 2002."
      }
    ]
  },
  {
    "id": 30,
    "era": "reactor",
    "name": "Northrop/CASA SF-5",
    "designation": "A.9 / AE.9",
    "year": 1970,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "1–2",
    "image": "img/aeronaves/northrop-casa-sf5.jpg",
    "imageCredit": "",
    "engine": "2 × General Electric J85-GE-13 de 1.850 kgf",
    "wingspan": 7.7,
    "length": 14.38,
    "height": 4.01,
    "emptyWeight": 3667,
    "maxWeight": 9380,
    "maxSpeed": 1490,
    "range": 2200,
    "ceiling": 15400,
    "armament": "2 cañones de 20 mm (monoplaza), bombas y cohetes",
    "units": "Ala 21 Morón (ataque), hoy Ala 23 Talavera la Real",
    "description": "Caza ligero construido por CASA bajo licencia, convertido en el entrenador de caza del Ejército del Aire.",
    "history": "Nació como avión de ataque y reconocimiento (Ala 21 de Morón) y desde 1992 es el entrenador de caza y ataque de Talavera, modernizado como SF-5M. Será sustituido por el Hürjet, bautizado en España como Saeta II.",
    "variants": [
      {
        "name": "SF-5A (C.9 / A.9)",
        "year": 1970,
        "engine": "2 × J85-GE-13",
        "desc": "Monoplaza de ataque."
      },
      {
        "name": "SF-5B (AE.9)",
        "year": 1970,
        "engine": "2 × J85-GE-13",
        "desc": "Biplaza de entrenamiento."
      },
      {
        "name": "SRF-5A (AR.9)",
        "year": 1971,
        "engine": "2 × J85-GE-13",
        "desc": "Reconocimiento con cámaras en el morro."
      },
      {
        "name": "SF-5M",
        "year": 2000,
        "engine": "2 × J85-GE-13",
        "desc": "Modernización de aviónica y cabina."
      }
    ]
  },
  {
    "id": 31,
    "era": "reactor",
    "name": "Dassault Mirage F1",
    "designation": "C.14",
    "year": 1975,
    "yearEnd": 2013,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1",
    "image": "img/aeronaves/dassault-mirage-f1.jpg",
    "imageCredit": "",
    "engine": "SNECMA Atar 9K-50 de 7.200 kgf con poscombustión",
    "wingspan": 8.4,
    "length": 15.3,
    "height": 4.5,
    "emptyWeight": 7400,
    "maxWeight": 16200,
    "maxSpeed": 2340,
    "range": 3300,
    "ceiling": 20000,
    "armament": "2 cañones DEFA de 30 mm, misiles Super 530 y AIM-9, bombas",
    "units": "Ala 14 Albacete, Ala 46 Gando, Ala 11 Manises",
    "description": "Sucesor del Mirage III con ala en flecha, interceptor rápido y de gran autonomía.",
    "history": "España llegó a operar más de noventa F1, incluidos ejemplares de segunda mano de Qatar y Francia. Modernizados como F1M, se retiraron en 2013 y fueron sustituidos por el Eurofighter en Albacete.",
    "variants": [
      {
        "name": "Mirage F1CE (C.14)",
        "year": 1975,
        "engine": "Atar 9K-50",
        "desc": "Interceptor monoplaza."
      },
      {
        "name": "Mirage F1BE (CE.14)",
        "year": 1980,
        "engine": "Atar 9K-50",
        "desc": "Biplaza de entrenamiento."
      },
      {
        "name": "Mirage F1EE (C.14B)",
        "year": 1980,
        "engine": "Atar 9K-50",
        "desc": "Con sonda de repostaje y aviónica de ataque."
      },
      {
        "name": "Mirage F1M",
        "year": 1999,
        "engine": "Atar 9K-50",
        "desc": "Modernización de radar y aviónica."
      }
    ]
  },
  {
    "id": 32,
    "era": "reactor",
    "name": "CASA C-212 Aviocar",
    "designation": "T.12",
    "year": 1974,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "transporte",
    "typeLabel": "Transporte",
    "crew": "2",
    "image": "img/aeronaves/casa-c212-aviocar.jpg",
    "imageCredit": "",
    "engine": "2 × Garrett TPE331 de 900 CV",
    "wingspan": 19,
    "length": 15.16,
    "height": 6.3,
    "emptyWeight": 3780,
    "maxWeight": 7700,
    "maxSpeed": 370,
    "range": 1800,
    "ceiling": 7900,
    "armament": "Ninguno",
    "units": "Ala 35, Grupo de Escuelas de Matacán, Ala 46",
    "description": "Bimotor STOL de diseño español con rampa trasera, uno de los grandes éxitos de exportación de CASA.",
    "history": "Voló en 1971 y entró en servicio en 1974 para sustituir a los CASA 352. Más de 470 unidades se vendieron a una cuarentena de países. En España ha hecho transporte, paracaidismo, fotografía aérea y vigilancia marítima.",
    "variants": [
      {
        "name": "C-212-100 (T.12B)",
        "year": 1974,
        "engine": "2 × TPE331-5",
        "desc": "Transporte y paracaidismo."
      },
      {
        "name": "C-212-200",
        "year": 1979,
        "engine": "2 × TPE331-10",
        "desc": "Mayor peso al despegue."
      },
      {
        "name": "C-212 de patrulla y fotografía",
        "year": 1980,
        "engine": "2 × TPE331",
        "desc": "Versiones de vigilancia marítima y cartografía."
      }
    ]
  },
  {
    "id": 33,
    "era": "reactor",
    "name": "CASA C-101 Aviojet",
    "nick": "Mirlo",
    "designation": "E.25",
    "year": 1980,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/casa-c101-aviojet.jpg",
    "imageCredit": "",
    "engine": "Garrett TFE731-2 de 1.590 kgf",
    "wingspan": 10.6,
    "length": 12.5,
    "height": 4.25,
    "emptyWeight": 3470,
    "maxWeight": 5600,
    "maxSpeed": 770,
    "range": 3500,
    "ceiling": 12800,
    "armament": "Opcional: cañón de 30 mm y cargas subalares",
    "units": "Academia General del Aire, Patrulla Águila",
    "description": "Entrenador a reacción de diseño español, con el que se forma a los pilotos militares desde 1980.",
    "history": "Voló en 1977 y desde 1985 equipa a la Patrulla Águila, que pinta el cielo con humo rojo y amarillo. El PC-21 lo ha sustituido en la fase básica y el Hürjet lo reemplazará en la avanzada.",
    "variants": [
      {
        "name": "C-101EB-01 (E.25)",
        "year": 1980,
        "engine": "TFE731-2-2J de 1.590 kgf",
        "desc": "Versión de la Academia General del Aire y la Patrulla Águila."
      }
    ]
  },
  {
    "id": 34,
    "era": "reactor",
    "name": "Lockheed C-130H Hercules",
    "designation": "T.10 / TK.10",
    "year": 1973,
    "yearEnd": 2021,
    "branch": "ejercito",
    "type": "transporte",
    "typeLabel": "Transporte",
    "crew": "5",
    "image": "img/aeronaves/lockheed-c130h.jpg",
    "imageCredit": "",
    "engine": "4 × Allison T56-A-15 de 4.590 CV",
    "wingspan": 40.4,
    "length": 29.8,
    "height": 11.6,
    "emptyWeight": 34400,
    "maxWeight": 70300,
    "maxSpeed": 590,
    "range": 3800,
    "ceiling": 10000,
    "armament": "Ninguno",
    "units": "Ala 31, Zaragoza",
    "description": "El transporte táctico cuatrimotor más extendido del mundo; en España también cisterna KC-130H.",
    "history": "Durante casi medio siglo fue el puente aéreo de las misiones españolas en el exterior, de Bosnia a Afganistán, además de evacuaciones como la de Kabul en 2021, año de su retirada en favor del A400M.",
    "variants": [
      {
        "name": "C-130H (T.10)",
        "year": 1973,
        "engine": "4 × T56-A-15",
        "desc": "Transporte táctico."
      },
      {
        "name": "KC-130H (TK.10)",
        "year": 1976,
        "engine": "4 × T56-A-15",
        "desc": "Cisterna para repostar cazas y helicópteros."
      }
    ]
  },
  {
    "id": 35,
    "era": "reactor",
    "name": "Canadair CL-215 / CL-415",
    "designation": "UD.13 / UD.14",
    "year": 1971,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "hidroavion",
    "typeLabel": "Hidroavión / anfibio",
    "crew": "2",
    "image": "img/aeronaves/canadair-cl215-cl415.jpg",
    "imageCredit": "",
    "engine": "CL-415: 2 × Pratt & Whitney Canada PW123AF de 2.380 CV",
    "wingspan": 28.6,
    "length": 19.82,
    "height": 8.98,
    "emptyWeight": 12880,
    "maxWeight": 19890,
    "maxSpeed": 360,
    "range": 2440,
    "ceiling": 4570,
    "armament": "Ninguno; 6.100 litros de agua",
    "units": "Grupo 43, Torrejón, con destacamentos en toda España",
    "description": "Anfibio contraincendios que carga agua rozando la superficie de embalses y del mar.",
    "history": "El Grupo 43, nacido en 1971, es una de las unidades más conocidas del Ejército del Aire por la lucha contra los incendios forestales cada verano, y ha actuado también en Portugal, Grecia o Israel.",
    "variants": [
      {
        "name": "CL-215 (UD.13)",
        "year": 1971,
        "engine": "2 × P&W R-2800 de 2.100 CV",
        "desc": "Motores de pistón."
      },
      {
        "name": "CL-215T",
        "year": 1991,
        "engine": "2 × PW123AF",
        "desc": "Conversión a turbohélice."
      },
      {
        "name": "CL-415 (UD.14)",
        "year": 2006,
        "engine": "2 × PW123AF de 2.380 CV",
        "desc": "Versión moderna con cabina digital."
      }
    ]
  },
  {
    "id": 36,
    "era": "actual",
    "name": "McDonnell Douglas EF-18 Hornet",
    "designation": "C.15",
    "year": 1986,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1–2",
    "image": "img/aeronaves/mcdonnell-douglas-ef18.jpg",
    "imageCredit": "",
    "engine": "2 × General Electric F404-GE-400 de 7.260 kgf",
    "wingspan": 11.43,
    "length": 17.07,
    "height": 4.66,
    "emptyWeight": 10455,
    "maxWeight": 23400,
    "maxSpeed": 1915,
    "range": 3330,
    "ceiling": 15240,
    "armament": "Cañón M61 de 20 mm, AIM-120, AIM-9, IRIS-T, Taurus, HARM, bombas guiadas",
    "units": "Ala 12 Torrejón, Ala 15 Zaragoza, Ala 46 Gando",
    "description": "Caza polivalente que convirtió al Ejército del Aire en una fuerza homologable a la OTAN.",
    "history": "El programa FACA eligió el F/A-18 en 1983 y llegaron 72 aviones desde 1986, completados con 24 F/A-18A ex-US Navy en los noventa. Combatió en Bosnia y Kosovo y patrulló el espacio aéreo de Libia en 2011. Modernizado como C.15M, sus unidades de Gando serán reemplazadas por el Eurofighter Halcón.",
    "variants": [
      {
        "name": "EF-18A (C.15)",
        "year": 1986,
        "engine": "2 × F404-GE-400",
        "desc": "Monoplaza del programa FACA."
      },
      {
        "name": "EF-18B (CE.15)",
        "year": 1986,
        "engine": "2 × F404-GE-400",
        "desc": "Biplaza operativo."
      },
      {
        "name": "F/A-18A+ ex-US Navy",
        "year": 1995,
        "engine": "2 × F404-GE-400",
        "desc": "24 ejemplares adquiridos de segunda mano."
      },
      {
        "name": "EF-18M (C.15M)",
        "year": 2003,
        "engine": "2 × F404-GE-400",
        "desc": "Modernización de aviónica y armamento."
      }
    ]
  },
  {
    "id": 37,
    "era": "actual",
    "name": "Eurofighter Typhoon",
    "designation": "C.16",
    "year": 2003,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "caza",
    "typeLabel": "Caza",
    "crew": "1–2",
    "image": "img/aeronaves/eurofighter-typhoon.jpg",
    "imageCredit": "",
    "engine": "2 × Eurojet EJ200 de 9.000 kgf con poscombustión",
    "wingspan": 10.95,
    "length": 15.96,
    "height": 5.28,
    "emptyWeight": 11000,
    "maxWeight": 23500,
    "maxSpeed": 2495,
    "range": 2900,
    "ceiling": 16760,
    "armament": "Cañón Mauser BK-27, Meteor, AIM-120, IRIS-T, Taurus KEPD 350, bombas guiadas",
    "units": "Ala 11 Morón, Ala 14 Albacete",
    "description": "Caza europeo de cuarta generación y media, fabricado en parte en Getafe por Airbus.",
    "history": "El primer C.16 llegó al Ala 11 de Morón en 2003. España participa en el consorcio con un 14% y monta sus aviones en Getafe. Con los programas Halcón I (20 aviones) y Halcón II (25) sustituirá a los EF-18 y elevará la flota hasta más de un centenar de ejemplares.",
    "variants": [
      {
        "name": "Tranche 1",
        "year": 2003,
        "engine": "2 × EJ200",
        "desc": "Primeros aviones del Ala 11."
      },
      {
        "name": "Tranche 2",
        "year": 2008,
        "engine": "2 × EJ200",
        "desc": "Capacidades aire-suelo."
      },
      {
        "name": "Tranche 3A",
        "year": 2016,
        "engine": "2 × EJ200",
        "desc": "Preparado para futuras mejoras."
      },
      {
        "name": "Halcón I y II (Tranche 4)",
        "year": 2026,
        "engine": "2 × EJ200",
        "desc": "45 aviones con radar AESA para sustituir a los EF-18."
      }
    ]
  },
  {
    "id": 38,
    "era": "actual",
    "name": "Airbus CN-235",
    "designation": "T.19 / D.4",
    "year": 1988,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "transporte",
    "typeLabel": "Transporte",
    "crew": "2–4",
    "image": "img/aeronaves/airbus-cn235.jpg",
    "imageCredit": "",
    "engine": "2 × General Electric CT7-9C de 1.750 CV",
    "wingspan": 25.81,
    "length": 21.4,
    "height": 8.18,
    "emptyWeight": 9800,
    "maxWeight": 16500,
    "maxSpeed": 460,
    "range": 3700,
    "ceiling": 7620,
    "armament": "Ninguno",
    "units": "Ala 35 Getafe, Ala 46 Gando, Ala 49 Son San Juan",
    "description": "Transporte táctico desarrollado por CASA y la indonesia IPTN, y patrullero marítimo en su versión VIGMA.",
    "history": "Ha servido en paracaidismo, transporte logístico y vigilancia marítima del Estrecho y Canarias. Derivó en el C-295, del que España opera versiones de transporte y patrulla.",
    "variants": [
      {
        "name": "CN-235-100 (T.19A)",
        "year": 1988,
        "engine": "2 × CT7-9C",
        "desc": "Transporte táctico."
      },
      {
        "name": "CN-235 VIGMA (D.4)",
        "year": 1991,
        "engine": "2 × CT7-9C",
        "desc": "Vigilancia marítima con radar."
      },
      {
        "name": "C-295 (T.21)",
        "year": 2001,
        "engine": "2 × PW127G",
        "desc": "Derivado alargado y más potente."
      }
    ]
  },
  {
    "id": 39,
    "era": "actual",
    "name": "Airbus A400M Atlas",
    "designation": "T.23",
    "year": 2016,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "transporte",
    "typeLabel": "Transporte",
    "crew": "3–4",
    "image": "img/aeronaves/airbus-a400m.jpg",
    "imageCredit": "",
    "engine": "4 × Europrop TP400-D6 de 11.000 CV",
    "wingspan": 42.4,
    "length": 45.1,
    "height": 14.7,
    "emptyWeight": 76500,
    "maxWeight": 141000,
    "maxSpeed": 780,
    "range": 3300,
    "ceiling": 11300,
    "armament": "Ninguno; capacidad cisterna",
    "units": "Ala 31, Zaragoza",
    "description": "Transporte estratégico y táctico europeo, ensamblado en Sevilla.",
    "history": "La línea final de montaje está en San Pablo (Sevilla). El Ala 31 recibió el primero en 2016 y lo empleó en la evacuación de Kabul de 2021 y en misiones humanitarias en África y Ucrania.",
    "variants": [
      {
        "name": "A400M (T.23)",
        "year": 2016,
        "engine": "4 × TP400-D6",
        "desc": "Transporte estratégico y cisterna."
      }
    ]
  },
  {
    "id": 40,
    "era": "actual",
    "name": "Pilatus PC-21",
    "designation": "E.27",
    "year": 2021,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "entrenamiento",
    "typeLabel": "Entrenamiento",
    "crew": "2",
    "image": "img/aeronaves/pilatus-pc21.jpg",
    "imageCredit": "",
    "engine": "Pratt & Whitney Canada PT6A-68B de 1.600 CV",
    "wingspan": 9.11,
    "length": 11.23,
    "height": 3.75,
    "emptyWeight": 2330,
    "maxWeight": 4250,
    "maxSpeed": 685,
    "range": 1330,
    "ceiling": 11580,
    "armament": "Ninguno",
    "units": "Academia General del Aire, San Javier",
    "description": "Turbohélice de entrenamiento con cabina digital similar a la de un caza moderno.",
    "history": "Llegó a San Javier en 2021 para sustituir al C-101 en la formación básica y avanzada temprana, con 24 ejemplares.",
    "variants": [
      {
        "name": "PC-21 (E.27)",
        "year": 2021,
        "engine": "PT6A-68B",
        "desc": "Entrenador de la Academia General del Aire."
      }
    ]
  },
  {
    "id": 41,
    "era": "reactor",
    "name": "Aérospatiale AS332 Super Puma",
    "designation": "HD.21",
    "year": 1982,
    "yearEnd": null,
    "branch": "ejercito",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "3–4",
    "image": "img/aeronaves/aerospatiale-as332-super-puma.jpg",
    "imageCredit": "",
    "engine": "2 × Turbomeca Makila 1A1 de 1.877 CV",
    "wingspan": 15.6,
    "length": 18.7,
    "height": 4.92,
    "emptyWeight": 4350,
    "maxWeight": 9000,
    "maxSpeed": 278,
    "range": 850,
    "ceiling": 4100,
    "armament": "Ninguno",
    "units": "Escuadrones SAR 801 (Son San Juan), 802 (Gando), 803 (Cuatro Vientos)",
    "description": "Helicóptero medio empleado en búsqueda y salvamento.",
    "history": "Los escuadrones SAR del Ejército del Aire han realizado miles de rescates en montaña y en el mar, con especial carga de trabajo en Canarias y Baleares.",
    "variants": [
      {
        "name": "AS332B (HD.21)",
        "year": 1982,
        "engine": "2 × Makila 1A1",
        "desc": "Búsqueda y salvamento."
      },
      {
        "name": "AS332M",
        "year": 1990,
        "engine": "2 × Makila 1A1",
        "desc": "Fuselaje alargado."
      }
    ]
  },
  {
    "id": 42,
    "era": "reactor",
    "name": "Hawker Siddeley AV-8S Matador",
    "designation": "VA.1",
    "year": 1976,
    "yearEnd": 1996,
    "branch": "armada",
    "type": "ataque",
    "typeLabel": "Ataque",
    "crew": "1",
    "image": "img/aeronaves/av8s-matador.jpg",
    "imageCredit": "",
    "engine": "Rolls-Royce Pegasus 103 de 9.750 kgf",
    "wingspan": 7.7,
    "length": 13.87,
    "height": 3.45,
    "emptyWeight": 5530,
    "maxWeight": 11340,
    "maxSpeed": 1180,
    "range": 3200,
    "ceiling": 15600,
    "armament": "2 cañones ADEN de 30 mm en contenedor, AIM-9, cohetes y bombas",
    "units": "8ª Escuadrilla, portaaviones Dédalo",
    "description": "Harrier de primera generación: primer avión de despegue vertical de la Armada.",
    "history": "Por razones políticas se adquirieron a través de Estados Unidos (como AV-8A). Devolvieron a la Armada su aviación de ala fija y operaron desde el Dédalo. En 1996 se vendieron a Tailandia.",
    "variants": [
      {
        "name": "AV-8S (VA.1)",
        "year": 1976,
        "engine": "Pegasus 103",
        "desc": "Monoplaza de ataque."
      },
      {
        "name": "TAV-8S (VAE.1)",
        "year": 1976,
        "engine": "Pegasus 103",
        "desc": "Biplaza de entrenamiento."
      }
    ]
  },
  {
    "id": 43,
    "era": "actual",
    "name": "McDonnell Douglas EAV-8B Harrier II Plus",
    "designation": "VA.2",
    "year": 1987,
    "yearEnd": null,
    "branch": "armada",
    "type": "ataque",
    "typeLabel": "Ataque",
    "crew": "1",
    "image": "img/aeronaves/eav8b-harrier-ii-plus.jpg",
    "imageCredit": "",
    "engine": "Rolls-Royce F402-RR-408 de 10.800 kgf",
    "wingspan": 9.25,
    "length": 14.12,
    "height": 3.56,
    "emptyWeight": 6740,
    "maxWeight": 14100,
    "maxSpeed": 1080,
    "range": 2200,
    "ceiling": 15000,
    "armament": "Cañón GAU-12 de 25 mm, AIM-120, AIM-9, Maverick, bombas guiadas",
    "units": "9ª Escuadrilla, Rota; buque Juan Carlos I",
    "description": "Harrier de segunda generación con radar APG-65; la única aviación de combate embarcada de España.",
    "history": "Los AV-8B llegaron en 1987 para el portaaviones Príncipe de Asturias; desde 1996 se modernizaron al estándar Plus con radar. Combatieron en Libia en 2011 y hoy operan desde el LHD Juan Carlos I a la espera de un sucesor.",
    "variants": [
      {
        "name": "EAV-8B (VA.2)",
        "year": 1987,
        "engine": "F402-RR-406",
        "desc": "Primeros Harrier II, sin radar."
      },
      {
        "name": "TAV-8B",
        "year": 1992,
        "engine": "F402-RR-406",
        "desc": "Biplaza de entrenamiento."
      },
      {
        "name": "AV-8B Plus",
        "year": 1996,
        "engine": "F402-RR-408",
        "desc": "Radar APG-65 y misiles AIM-120."
      }
    ]
  },
  {
    "id": 44,
    "era": "reactor",
    "name": "Sikorsky SH-3D Sea King",
    "designation": "HS.9",
    "year": 1966,
    "yearEnd": null,
    "branch": "armada",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "4",
    "image": "img/aeronaves/sikorsky-sh3d-sea-king.jpg",
    "imageCredit": "",
    "engine": "2 × General Electric T58 de 1.400 CV",
    "wingspan": 18.9,
    "length": 22.15,
    "height": 5.13,
    "emptyWeight": 5380,
    "maxWeight": 9300,
    "maxSpeed": 267,
    "range": 1000,
    "ceiling": 4480,
    "armament": "Torpedos y cargas de profundidad (versión ASW)",
    "units": "5ª Escuadrilla, Rota",
    "description": "Helicóptero antisubmarino pesado, después transporte y alerta temprana.",
    "history": "Durante décadas fue el helicóptero de los portaaviones españoles. La versión de alerta temprana con radar Searchwater se creó tras la lección de la guerra de las Malvinas. El NH90 lo está sustituyendo.",
    "variants": [
      {
        "name": "SH-3D antisubmarino",
        "year": 1966,
        "engine": "2 × T58-GE-10",
        "desc": "Sonar calable y torpedos."
      },
      {
        "name": "SH-3D AEW",
        "year": 1986,
        "engine": "2 × T58",
        "desc": "Alerta temprana con radar Searchwater."
      },
      {
        "name": "SH-3D transporte",
        "year": 1990,
        "engine": "2 × T58",
        "desc": "Asalto anfibio y transporte."
      }
    ]
  },
  {
    "id": 45,
    "era": "actual",
    "name": "Sikorsky SH-60B Seahawk",
    "designation": "HS.23",
    "year": 1988,
    "yearEnd": null,
    "branch": "armada",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "3",
    "image": "img/aeronaves/sikorsky-sh60b-seahawk.jpg",
    "imageCredit": "",
    "engine": "2 × General Electric T700-GE-401C de 1.890 CV",
    "wingspan": 16.36,
    "length": 19.76,
    "height": 5.18,
    "emptyWeight": 6190,
    "maxWeight": 9900,
    "maxSpeed": 270,
    "range": 830,
    "ceiling": 3580,
    "armament": "Torpedos Mk 46, misiles Penguin y Hellfire, ametralladoras",
    "units": "10ª Escuadrilla, Rota; fragatas F-80 y F-100",
    "description": "Helicóptero naval embarcado en las fragatas, cazador de submarinos y buques.",
    "history": "Ha participado en las operaciones antipiratería Atalanta frente a Somalia y en agrupaciones navales de la OTAN. La Armada incorpora el MH-60R como su evolución.",
    "variants": [
      {
        "name": "SH-60B (HS.23)",
        "year": 1988,
        "engine": "2 × T700-GE-401C",
        "desc": "Lucha antisubmarina y de superficie."
      },
      {
        "name": "MH-60R",
        "year": 2022,
        "engine": "2 × T700-GE-401C",
        "desc": "Evolución multimisión."
      }
    ]
  },
  {
    "id": 46,
    "era": "reactor",
    "name": "Bell UH-1H Iroquois",
    "designation": "HU.10B",
    "year": 1970,
    "yearEnd": null,
    "branch": "tierra",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "2–4",
    "image": "img/aeronaves/bell-uh1h.jpg",
    "imageCredit": "",
    "engine": "Lycoming T53-L-13 de 1.400 CV",
    "wingspan": 14.63,
    "length": 17.4,
    "height": 4.39,
    "emptyWeight": 2365,
    "maxWeight": 4310,
    "maxSpeed": 220,
    "range": 510,
    "ceiling": 3840,
    "armament": "Ametralladoras laterales",
    "units": "Batallones de helicópteros de maniobra (BHELMA)",
    "description": "El helicóptero «Huey», caballo de batalla de las FAMET.",
    "history": "Con los UH-1 se construyó la aviación del Ejército de Tierra desde finales de los sesenta. Ha servido en Bosnia, Kosovo y Afganistán y está siendo sustituido por el NH90.",
    "variants": [
      {
        "name": "UH-1B",
        "year": 1966,
        "engine": "T53-L-11",
        "desc": "Primeros helicópteros de la aviación del Ejército de Tierra."
      },
      {
        "name": "UH-1H (HU.10B)",
        "year": 1970,
        "engine": "T53-L-13",
        "desc": "Versión principal."
      }
    ]
  },
  {
    "id": 47,
    "era": "reactor",
    "name": "Boeing CH-47 Chinook",
    "designation": "HT.17",
    "year": 1973,
    "yearEnd": null,
    "branch": "tierra",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "3–4",
    "image": "img/aeronaves/boeing-ch47-chinook.jpg",
    "imageCredit": "",
    "engine": "2 × Honeywell T55-L-712 de 4.380 CV (versión D)",
    "wingspan": 18.29,
    "length": 30.1,
    "height": 5.77,
    "emptyWeight": 10185,
    "maxWeight": 22680,
    "maxSpeed": 300,
    "range": 740,
    "ceiling": 5640,
    "armament": "Ametralladoras M60D / MG-3",
    "units": "BHELTRA V, Colmenar Viejo",
    "description": "Helicóptero pesado de doble rotor en tándem.",
    "history": "Llegó en 1973 y se modernizó a estándar D en los noventa. Fue esencial en Afganistán y en emergencias nacionales; las FAMET reciben ahora el CH-47F.",
    "variants": [
      {
        "name": "CH-47C",
        "year": 1973,
        "engine": "2 × T55-L-11",
        "desc": "Versión original."
      },
      {
        "name": "CH-47D (HT.17D)",
        "year": 1993,
        "engine": "2 × T55-L-712",
        "desc": "Modernización."
      },
      {
        "name": "CH-47F",
        "year": 2023,
        "engine": "2 × T55-GA-714A",
        "desc": "Cabina digital y nuevas capacidades."
      }
    ]
  },
  {
    "id": 48,
    "era": "reactor",
    "name": "MBB Bo 105",
    "designation": "HA.15",
    "year": 1979,
    "yearEnd": null,
    "branch": "tierra",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "2",
    "image": "img/aeronaves/mbb-bo105.jpg",
    "imageCredit": "",
    "engine": "2 × Allison 250-C20B de 420 CV",
    "wingspan": 9.84,
    "length": 11.86,
    "height": 3,
    "emptyWeight": 1276,
    "maxWeight": 2500,
    "maxSpeed": 242,
    "range": 575,
    "ceiling": 5180,
    "armament": "Misiles HOT, cañón de 20 mm (versiones de ataque)",
    "units": "BHELA I Almagro y unidades de observación",
    "description": "Helicóptero ligero de ataque, observación y enlace, parcialmente fabricado por CASA.",
    "history": "Fue el primer helicóptero contracarro español. Sirvió de base para formar a las tripulaciones que más tarde operarían el Tigre.",
    "variants": [
      {
        "name": "Bo 105 ATH",
        "year": 1979,
        "engine": "2 × Allison 250-C20B",
        "desc": "Contracarro con misiles HOT."
      },
      {
        "name": "Bo 105 GSH",
        "year": 1980,
        "engine": "2 × Allison 250-C20B",
        "desc": "Apoyo con cañón de 20 mm."
      },
      {
        "name": "Bo 105 LOH",
        "year": 1979,
        "engine": "2 × Allison 250-C20B",
        "desc": "Observación y enlace."
      }
    ]
  },
  {
    "id": 49,
    "era": "actual",
    "name": "Eurocopter Tigre HAD-E",
    "designation": "HA.28",
    "year": 2007,
    "yearEnd": null,
    "branch": "tierra",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "2",
    "image": "img/aeronaves/eurocopter-tigre-had.jpg",
    "imageCredit": "",
    "engine": "2 × MTR390-E de 1.464 CV",
    "wingspan": 13,
    "length": 15.8,
    "height": 3.83,
    "emptyWeight": 3300,
    "maxWeight": 6600,
    "maxSpeed": 290,
    "range": 800,
    "ceiling": 4000,
    "armament": "Cañón de 30 mm, misiles Spike-ER y Mistral, cohetes",
    "units": "BHELA I, Almagro (Ciudad Real)",
    "description": "Helicóptero de ataque europeo; España opera una versión propia con motores mejorados.",
    "history": "Tras unos primeros HAP de apoyo, las FAMET recibieron la versión española HAD-E, montada en Albacete. Desplegó en Afganistán y en Mali. El programa Tigre III lo modernizará.",
    "variants": [
      {
        "name": "Tigre HAP",
        "year": 2005,
        "engine": "2 × MTR390",
        "desc": "Apoyo y escolta, primeros ejemplares."
      },
      {
        "name": "Tigre HAD-E (HA.28)",
        "year": 2007,
        "engine": "2 × MTR390-E",
        "desc": "Versión española de destrucción."
      }
    ]
  },
  {
    "id": 50,
    "era": "actual",
    "name": "NHIndustries NH90 TTH",
    "designation": "HT.29",
    "year": 2014,
    "yearEnd": null,
    "branch": "tierra",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "2–4",
    "image": "img/aeronaves/nh90-tth.jpg",
    "imageCredit": "",
    "engine": "2 × Rolls-Royce Turbomeca RTM322 de 2.400 CV",
    "wingspan": 16.3,
    "length": 19.56,
    "height": 5.23,
    "emptyWeight": 6400,
    "maxWeight": 10600,
    "maxSpeed": 300,
    "range": 800,
    "ceiling": 6000,
    "armament": "Ametralladoras laterales",
    "units": "BHELMA III Bétera, BHELMA IV Agoncillo y otras; también Ejército del Aire y Armada",
    "description": "Helicóptero de transporte táctico con mandos fly-by-wire, común a los tres ejércitos.",
    "history": "El primero llegó a finales de 2014. Es el sucesor del UH-1, el Cougar y el Sea King, y parte de su producción se ensambla en España.",
    "variants": [
      {
        "name": "NH90 TTH (HT.29)",
        "year": 2014,
        "engine": "2 × RTM322",
        "desc": "Transporte táctico de los tres ejércitos."
      }
    ]
  },
  {
    "id": 51,
    "era": "reactor",
    "name": "Eurocopter AS532 Cougar",
    "designation": "HT.27",
    "year": 1990,
    "yearEnd": null,
    "branch": "tierra",
    "type": "helicoptero",
    "typeLabel": "Helicóptero",
    "crew": "2–3",
    "image": "img/aeronaves/eurocopter-as532-cougar.jpg",
    "imageCredit": "",
    "engine": "2 × Turbomeca Makila 1A1 de 1.877 CV",
    "wingspan": 15.6,
    "length": 18.7,
    "height": 4.92,
    "emptyWeight": 4460,
    "maxWeight": 9000,
    "maxSpeed": 278,
    "range": 840,
    "ceiling": 4100,
    "armament": "Ametralladoras laterales",
    "units": "BHELMA II El Copero (Sevilla), BHELMA IV",
    "description": "Versión militar del Super Puma para transporte de tropas.",
    "history": "Equipó a los batallones de maniobra desde 1990 y desplegó en Bosnia, Kosovo, Líbano y Afganistán.",
    "variants": [
      {
        "name": "AS532UL (HT.27)",
        "year": 1990,
        "engine": "2 × Makila 1A1",
        "desc": "Fuselaje alargado."
      },
      {
        "name": "AS532AL",
        "year": 1995,
        "engine": "2 × Makila 1A1",
        "desc": "Versión armada."
      }
    ]
  }
];
