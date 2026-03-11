/* ═══════════════════════════════════════════════════════
   EAE 2026 — script.js
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── Aircraft data ──────────────────────────────────── */
const aircraftData = [
    {
        id: 0, name: 'Eurofighter Typhoon', designation: 'C.16',
        type: 'caza', role: 'Superioridad Aérea / Polivalente',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=450&fit=crop&q=80',
        general: 'El Eurofighter Typhoon es el principal caza de cuarta generación avanzada del Ejército del Aire y del Espacio. Combina una aerodinámica inestable gestionada por ordenador con los motores EJ200, otorgándole maniobrabilidad excepcional. Su sistema de gestión de armas integrado permite ejecutar misiones aire-aire y aire-tierra en cualquier condición meteorológica.',
        specs: [
            ['Velocidad Máxima', 'Mach 2.0+ (2.495 km/h)'],
            ['Techo de servicio', '19.812 m'],
            ['Alcance de combate', '1.389 km'],
            ['Envergadura', '10,95 m'],
            ['Longitud', '15,96 m'],
            ['Peso máx. al despegue', '23.500 kg'],
            ['Motores', '2× EuroJet EJ200'],
            ['Empuje total', '2× 90 kN (postcombustión)'],
            ['Tripulación', '1 piloto (C.16C biplaza: 2)']
        ],
        unidades: '73',
        bases: 'Ala 11 (Morón de la Frontera) · Ala 14 (Albacete) · Ala 46 (Gando, Gran Canaria)',
        armament: 'Cañón Mauser BK-27 · Misiles Meteor · IRIS-T · AIM-120C AMRAAM · AIM-9L Sidewinder · Bombas guiadas Paveway IV',
        gallery: [
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 1, name: 'F/A-18 Hornet', designation: 'C.15',
        type: 'caza', role: 'Cazabombardero Polivalente',
        image: 'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=450&fit=crop&q=80',
        general: 'El McDonnell Douglas F/A-18 Hornet (C.15) ha sido la espina dorsal de la aviación de combate española durante más de tres décadas. Destaca por su versatilidad en misiones de defensa aérea, superioridad aérea, ataque a tierra y supresión de defensas. España opera también la biplaza CE.15 para entrenamiento avanzado.',
        specs: [
            ['Velocidad Máxima', 'Mach 1.8 (1.915 km/h)'],
            ['Techo de servicio', '15.240 m'],
            ['Alcance de combate', '537 km (ataque)'],
            ['Envergadura', '11,43 m'],
            ['Longitud', '17,07 m'],
            ['Peso máx. al despegue', '25.401 kg'],
            ['Motores', '2× GE F404-GE-402'],
            ['Empuje total', '2× 78,7 kN (postcombustión)'],
            ['Tripulación', '1 (C.15) / 2 (CE.15)']
        ],
        unidades: '78',
        bases: 'Ala 12 (Torrejón de Ardoz) · Ala 15 (Zaragoza) · Ala 21 (Morón de la Frontera)',
        armament: 'Cañón M61A1 Vulcan 20 mm · AIM-9L/M Sidewinder · AIM-120 AMRAAM · AGM-88 HARM · GBU-10/12 Paveway · Mk.82/83/84',
        gallery: [
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 2, name: 'Airbus A400M Atlas', designation: 'T.23',
        type: 'transporte', role: 'Transporte Estratégico y Táctico',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop&q=80',
        general: 'El A400M Atlas es el avión de transporte militar más avanzado de Occidente. Sus cuatro turbopropulsores TP400 le permiten cargar hasta 37 toneladas a distancias intercontinentales. Su capacidad para operar en pistas no preparadas combina el alcance estratégico con la versatilidad táctica.',
        specs: [
            ['Carga útil máxima', '37 toneladas'],
            ['Velocidad de crucero', 'Mach 0.72 (780 km/h)'],
            ['Alcance con carga máx.', '3.300 km'],
            ['Alcance en ferry', '8.710 km'],
            ['Techo de servicio', '11.300 m'],
            ['Envergadura', '42,40 m'],
            ['Longitud', '45,10 m'],
            ['Motores', '4× Europrop TP400-D6'],
            ['Tripulación', '3 + operadores de carga']
        ],
        unidades: '14',
        bases: 'Ala 31 (Base Aérea de Zaragoza)',
        armament: 'Sin armamento ofensivo · Contramedidas DIRCM · Dispensadores AN/ALE-47',
        gallery: [
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 3, name: 'CASA C-295', designation: 'T.21',
        type: 'transporte', role: 'Transporte Táctico Ligero',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=450&fit=crop&q=80',
        general: 'El C-295 es el avión de transporte táctico ligero de fabricación española, desarrollado por CASA en Sevilla. Se emplea en transporte de tropas, paracaidismo, evacuación médica y vigilancia marítima. Es uno de los aviones militares de transporte de tamaño medio más vendidos del mundo, operado por más de 30 países.',
        specs: [
            ['Carga útil máxima', '9,25 toneladas'],
            ['Velocidad de crucero', '480 km/h'],
            ['Alcance', '5.630 km'],
            ['Techo de servicio', '7.620 m'],
            ['Envergadura', '25,81 m'],
            ['Longitud', '24,50 m'],
            ['Capacidad', '71 soldados / 48 paracaidistas'],
            ['Motores', '2× Pratt & Whitney PW127G'],
            ['Tripulación', '2 + operadores de carga']
        ],
        unidades: '21',
        bases: 'Ala 35 (Getafe) · Escuadrón 803 (vigilancia marítima)',
        armament: 'Sin armamento ofensivo · Radar de búsqueda marítima · Sistemas FLIR',
        gallery: [
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 4, name: 'NHIndustries NH90', designation: 'HT.29',
        type: 'helicóptero', role: 'Transporte Táctico / Rescate',
        image: 'https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=450&fit=crop&q=80',
        general: 'El NH90 TTH es un helicóptero táctico de última generación desarrollado en consorcio europeo. Con cabina full glass-cockpit y sistemas fly-by-wire, se emplea en transporte de tropas, evacuación médica, operaciones de asalto y búsqueda y rescate. Representa lo más avanzado en tecnología de ala rotatoria disponible en España.',
        specs: [
            ['Velocidad Máxima', '300 km/h'],
            ['Alcance', '800 km'],
            ['Carga útil interna', '2.500 kg'],
            ['Carga en eslinga', '4.000 kg'],
            ['Techo de servicio', '6.000 m'],
            ['Capacidad', '20 soldados equipados'],
            ['Motores', '2× GE CT7-8F / RTM322'],
            ['Longitud total', '19,56 m'],
            ['Tripulación', '2 pilotos + 2 operadores']
        ],
        unidades: '12',
        bases: 'Ala 78 (Getafe) · Ala 48 (Son San Juan, Mallorca)',
        armament: 'Ametralladora de puerta M240 · Pods de cohetes (opcionales) · FLIR',
        gallery: [
            'https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 5, name: 'Boeing CH-47F Chinook', designation: 'HT.17',
        type: 'helicóptero', role: 'Transporte Pesado',
        image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=450&fit=crop&q=80',
        general: 'El CH-47F Chinook es el helicóptero de transporte pesado del Ejército del Aire. Su configuración de doble rotor en tándem permite transportar grandes cargas, vehículos militares y hasta 55 soldados. España opera la variante modernizada con aviónica digital avanzada y es fundamental para logística en zonas inaccesibles por tierra.',
        specs: [
            ['Velocidad Máxima', '315 km/h'],
            ['Alcance en ferry', '2.252 km'],
            ['Carga útil interna', '10.886 kg'],
            ['Carga en eslinga', '12.700 kg'],
            ['Techo de servicio', '5.640 m'],
            ['Capacidad', '55 soldados'],
            ['Motores', '2× Honeywell T55-GA-714A'],
            ['Longitud total', '30,18 m'],
            ['Tripulación', '3 + operadores de carga']
        ],
        unidades: '17',
        bases: 'BHELMA IV (Colmenar Viejo, Madrid)',
        armament: '3× Ametralladora M134 Minigun / M240 · Contramedidas AN/AAQ-24',
        gallery: [
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 6, name: 'Boeing 707 MRTT', designation: 'T.17',
        type: 'transporte', role: 'Reabastecimiento en Vuelo / VIP',
        image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=450&fit=crop&q=80',
        general: 'El Boeing 707 MRTT es el avión cisterna del Ejército del Aire. Capaz de reabastecer en vuelo a cazas y aviones de transporte mediante sistemas HDR, amplía drásticamente el alcance operativo de la flota. También se emplea como transporte VIP y en evacuaciones de personal.',
        specs: [
            ['Combustible transferible', '90.000 litros'],
            ['Velocidad de crucero', '900 km/h'],
            ['Alcance en ferry', '10.000+ km'],
            ['Sistema de reabastecimiento', '3× HDR Sargent Fletcher'],
            ['Techo de servicio', '12.800 m'],
            ['Capacidad (transporte)', 'Hasta 160 pasajeros'],
            ['Motores', '4× P&W JT3D-7'],
            ['Longitud', '46,61 m'],
            ['Tripulación', '4 + operadores de cisterna']
        ],
        unidades: '2',
        bases: 'Ala 45 (Base Aérea de Torrejón de Ardoz)',
        armament: 'Sin armamento · Comunicaciones satélite · Sistema HDR triple',
        gallery: [
            'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 7, name: 'Adaro 1.E-7 Chirta', designation: '',
        type: 'entrenamiento', role: 'Entrenamiento Básico y Elemental',
        image: 'https://i.postimg.cc/3JG2MMxV/Adaro_1.E-7_(Chirta).jpg?w=800&h=450&fit=crop&q=80',
        general: 'El Adaro 1.E‑7 Chirta fue un biplano español de entrenamiento diseñado en 1935. Ligero, maniobrable y equipado con un motor Elizalde Junior de 105 CV, ofrecía buenas prestaciones para instrucción básica. Participó en el concurso de aviones escuela, pero no pasó a producción y solo se construyó un prototipo.',
        specs: [
            ['Velocidad Máxima', '180 km/h'],
            ['Velocidad de Crucero', '150 km/h'],
            ['Alcance', '1.000 km'],
            ['Techo de servicio', '5.050 m'],
            ['Envergadura', '10,00 m'],
            ['Longitud', '6,50 m'],
            ['Altura', '2,50 m'],
            ['Superficie alar', '17,7 m²'],
            ['Motor', '1× Elizalde Junior (licencia Walter Junior)'],
            ['Tipo', '4× cilindros en línea (refrigerado por aire)'],
            ['Potencia', '105 CV'],
            ['Peso en vacío', '480 kg'],
            ['Peso máx. al despegue', '730 kg'],
            ['Carga de armas', 'Sin armamento'],
            ['Combustible', '180 L'],
            ['Tripulación', '2 (instructor + alumno)'],
            ['Año de entrada', '1935'],
            ['Año de retirada', '1939 aprox.']
        ],
        unidades: '1',
        bases: 'Base Aérea de Cuatro Vientos + Aeródromo Militar de Cuatro Vientos · Madrid',
        armament: 'Sin armamento',
        gallery: [
            'https://i.postimg.cc/CLc0ysm9/Adaro_1.E-7_(Chirta)(2).jpg?w=900&h=540&fit=crop&q=80',
            'https://i.postimg.cc/3JG2MMxV/Adaro_1.E-7_(Chirta).jpg?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 8, name: 'Cessna T-37 Tweet', designation: 'E.26',
        type: 'entrenamiento', role: 'Entrenamiento Básico a Reacción',
        image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=450&fit=crop&q=80',
        general: 'El Cessna T-37 Tweet es el bimotor a reacción para la fase de entrenamiento básico avanzado. Los futuros pilotos de caza completan aquí sus primeras horas en reactor, dominando pilotaje instrumental y formación antes de progresar al C-101 y posteriormente a los cazas de primera línea.',
        specs: [
            ['Velocidad Máxima', '608 km/h'],
            ['Alcance', '1.306 km'],
            ['Techo de servicio', '10.668 m'],
            ['Envergadura', '10,30 m'],
            ['Longitud', '9,02 m'],
            ['Motores', '2× Continental J69-T-25'],
            ['Empuje total', '2× 4,56 kN'],
            ['Tripulación', '2 (instructor + alumno)'],
            ['Horas de vuelo acumuladas', '+35.000']
        ],
        unidades: '36',
        bases: 'Academia General del Aire (San Javier, Murcia)',
        armament: 'Sin armamento · Pods de observación en misiones de instrucción táctica',
        gallery: [
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 9, name: 'P-3 Orion', designation: 'P.3',
        type: 'patrulla', role: 'Patrulla Marítima / Guerra Antisubmarina',
        image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=450&fit=crop&q=80',
        general: 'El Lockheed P-3 Orion garantiza el control del espacio marítimo español en el Atlántico y el Mediterráneo. Equipado con radar de vigilancia, detector de anomalías magnéticas (MAD), sonoboyas y cámaras FLIR, es fundamental para detectar submarinos y vigilar el tráfico marítimo y operaciones antinarcóticos.',
        specs: [
            ['Velocidad de patrulla', '380 km/h'],
            ['Autonomía de vuelo', '+17 horas'],
            ['Alcance en ferry', '8.945 km'],
            ['Techo de servicio', '8.625 m'],
            ['Envergadura', '30,37 m'],
            ['Longitud', '35,61 m'],
            ['Motores', '4× Allison T56-A-14'],
            ['Carga de sensores/armas', '9.000 kg'],
            ['Tripulación', '11 (pilotos + operadores de misión)']
        ],
        unidades: '5',
        bases: 'Escuadrón 221 (Morón) · Escuadrón 491 (Jerez)',
        armament: 'Torpedos MK-46 / MK-50 · Misiles AGM-84 Harpoon · Bombas de profundidad · Sonoboyas · MAD',
        gallery: [
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 10, name: 'CN-235 Persuader', designation: 'D.4',
        type: 'patrulla', role: 'Vigilancia Marítima / SAR',
        image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=450&fit=crop&q=80',
        general: 'El CASA/IPTN CN-235 en variante Patrulla Marítima es el avión ligero de vigilancia costera. Equipado con radar Persuader, sensores electro-ópticos y AIS, patrulla las costas en el Mediterráneo, el Atlántico y el estrecho de Gibraltar coordinando rescates y vigilancia de fronteras con el SIVE.',
        specs: [
            ['Velocidad de patrulla', '240 km/h'],
            ['Autonomía', '10 horas'],
            ['Alcance', '4.000 km'],
            ['Techo de servicio', '7.620 m'],
            ['Envergadura', '25,81 m'],
            ['Longitud', '21,40 m'],
            ['Motores', '2× GE CT7-9C3'],
            ['Sensores', 'Radar Persuader · FLIR · AIS'],
            ['Tripulación', '2 pilotos + 3 operadores de misión']
        ],
        unidades: '9',
        bases: 'Escuadrón 803 (Gando, Gran Canaria) · Destacamento Jerez',
        armament: 'Sin armamento · Radar Persuader · FLIR · Sistema AIS · Sonoboyas',
        gallery: [
            'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 11, name: 'Sikorsky S-76', designation: 'HU.18',
        type: 'helicóptero', role: 'SAR / Transporte Ligero',
        image: 'https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=450&fit=crop&q=80',
        general: 'El Sikorsky S-76 HU.18 es el helicóptero ligero de búsqueda y rescate del Ejército del Aire. Usado principalmente en misiones SAR sobre el mar, coordina operaciones con Salvamento Marítimo y la Guardia Civil. Su papel en el rescate de náufragos y emergencias médicas lo convierte en un activo de servicio público indispensable.',
        specs: [
            ['Velocidad Máxima', '287 km/h'],
            ['Alcance', '748 km'],
            ['Techo de servicio', '4.115 m'],
            ['Motores', '2× Turbomeca Arriel 2S1'],
            ['Capacidad', '12 pasajeros / 4 camillas'],
            ['Longitud total', '16,0 m'],
            ['Carga en eslinga', '1.360 kg'],
            ['Autonomía', '3,5 horas'],
            ['Tripulación', '2 pilotos + 2 rescatadores']
        ],
        unidades: '8',
        bases: 'Escuadrón 803 · Base Aérea de Palma de Mallorca',
        armament: 'Sin armamento · Grúa de rescate · Luces de búsqueda · FLIR nocturno · Equipo médico',
        gallery: [
            'https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80'
        ]
    }
];

/* ── Historical Aircraft Data ───────────────────────── */
const historicalAircraftData = [
    {
        id: 100, name: 'Republic F-84 Thunderjet', designation: 'C.1',
        type: 'caza', role: 'Caza-Bombardero a Reacción',
        era: '1954 – 1972',
        image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=450&fit=crop&q=80',
        general: 'El F-84 Thunderjet fue el primer avión a reacción operado por el Ejército del Aire español. Llegó a España en 1954 gracias a los acuerdos de cooperación con Estados Unidos firmados en 1953. Su llegada supuso una revolución tecnológica, pasando de la aviación de pistón a la era del reactor. Fue la primera aeronave española capaz de superar los 900 km/h, transformando por completo la doctrina de combate aéreo nacional.',
        specs: [
            ['Velocidad máxima', '975 km/h'],
            ['Techo de servicio', '12.344 m'],
            ['Alcance', '1.600 km'],
            ['Envergadura', '11,05 m'],
            ['Longitud', '11,61 m'],
            ['Motor', '1× Allison J35-A-29'],
            ['Empuje', '26,69 kN'],
            ['Tripulación', '1 piloto']
        ],
        unidades: '~75',
        servicioEspana: '1954 – 1972',
        bases: 'Ala 1 (Manises) · Ala 3 (Zaragoza) · Ala 7 (Morón de la Frontera)',
        retiro: 'Sustituido por el F-86 Sabre y posteriormente por el F-104 Starfighter.',
        armament: 'Cañones M3 12,7 mm × 4 · Cohetes HVAR · Bombas convencionales hasta 900 kg',
        gallery: [
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 101, name: 'North American F-86 Sabre', designation: 'C.5',
        type: 'caza', role: 'Caza de Superioridad Aérea',
        era: '1955 – 1972',
        image: 'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=450&fit=crop&q=80',
        general: 'El F-86 Sabre llegó a España como parte del paquete de ayuda militar norteamericana tras los Pactos de Madrid de 1953. Primer caza con ala en flecha operado en España, el Sabre se convirtió en el símbolo de la modernización del Ejército del Aire durante la Guerra Fría. Combatió en Corea antes de llegar a manos españolas, llegando con horas de combate real. Su maniobrabilidad y velocidad lo hicieron el avión más temido de su generación.',
        specs: [
            ['Velocidad máxima', '1.106 km/h (Mach 0.9)'],
            ['Techo de servicio', '14.630 m'],
            ['Alcance de combate', '764 km'],
            ['Envergadura', '11,30 m'],
            ['Longitud', '11,43 m'],
            ['Motor', '1× General Electric J47-GE-27'],
            ['Empuje', '26,31 kN'],
            ['Tripulación', '1 piloto']
        ],
        unidades: '~270',
        servicioEspana: '1955 – 1972',
        bases: 'Ala 1 (Manises) · Ala 4 (Torrejón) · Ala 5 (Zaragoza) · Ala 7 (Morón)',
        retiro: 'Reemplazado progresivamente por el F-104G Starfighter y posteriormente por el Mirage III.',
        armament: 'Cañones M3 12,7 mm × 6 · Misiles AIM-9 Sidewinder (variantes tardías) · Cohetes FFAR',
        gallery: [
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 102, name: 'Lockheed F-104G Starfighter', designation: 'C.8',
        type: 'caza', role: 'Interceptor Supersónico',
        era: '1965 – 1972',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=450&fit=crop&q=80',
        general: 'Apodado "el féretro volante" por su alta tasa de accidentalidad, el F-104G Starfighter fue el primer avión capaz de superar el Mach 2 en servicio con el Ejército del Aire. Su diseño de ala delta extremadamente delgada y pequeña le otorgaba un rendimiento excepcional a alta velocidad, pero lo hacía muy difícil de manejar. España operó una pequeña flota cedida por Alemania y Estados Unidos durante un período breve pero significativo.',
        specs: [
            ['Velocidad máxima', 'Mach 2.2 (2.333 km/h)'],
            ['Techo de servicio', '17.680 m'],
            ['Alcance de combate', '740 km'],
            ['Envergadura', '6,68 m'],
            ['Longitud', '16,69 m'],
            ['Motor', '1× General Electric J79-GE-11A'],
            ['Empuje (post.)', '70,3 kN'],
            ['Tripulación', '1 piloto']
        ],
        unidades: '~21',
        servicioEspana: '1965 – 1972',
        bases: 'Ala 16 (Torrejón de Ardoz)',
        retiro: 'Elevada accidentalidad y costes de mantenimiento. Sustituido por el Mirage III.',
        armament: 'Cañón M61 Vulcan 20 mm · Misiles AIM-9B Sidewinder · Bombas convencionales',
        gallery: [
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 103, name: 'Dassault Mirage III', designation: 'C.11',
        type: 'caza', role: 'Interceptor / Caza Todo Tiempo',
        era: '1970 – 1992',
        image: 'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=800&h=450&fit=crop&q=80',
        general: 'El Mirage III representó la apuesta de España por la tecnología francesa durante la Guerra Fría, en un momento en que las relaciones con Estados Unidos se enfriaban. Con su característica ala delta y capacidad supersónica, fue el caza más avanzado operado por España antes del F-18. Participó en numerosos ejercicios de la OTAN tras el ingreso de España en 1982 y fue el verdadero pilar de la defensa aérea española durante dos décadas.',
        specs: [
            ['Velocidad máxima', 'Mach 2.2 (2.350 km/h)'],
            ['Techo de servicio', '17.000 m'],
            ['Alcance de combate', '1.200 km'],
            ['Envergadura', '8,22 m'],
            ['Longitud', '15,03 m'],
            ['Motor', '1× SNECMA Atar 9C'],
            ['Empuje (post.)', '60,8 kN'],
            ['Tripulación', '1 piloto']
        ],
        unidades: '~30',
        servicioEspana: '1970 – 1992',
        bases: 'Ala 11 (Manises) · Ala 14 (Los Llanos, Albacete)',
        retiro: 'Retirado al llegar el F/A-18 Hornet, que superaba en todas las capacidades al Mirage III.',
        armament: 'Cañón DEFA 552 30 mm × 2 · Misiles Matra R.530 · AIM-9 Sidewinder · Bombas convencionales',
        gallery: [
            'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 104, name: 'CASA C-212 Aviocar', designation: 'T.12',
        type: 'transporte', role: 'Transporte Ligero / Paracaidismo',
        era: '1974 – 2018',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop&q=80',
        general: 'El CASA C-212 Aviocar es uno de los aviones más queridos de la historia del Ejército del Aire. Diseñado y fabricado íntegramente en España por CASA en Getafe, fue exportado a más de 90 países y se convirtió en el mayor éxito de la industria aeronáutica española. Versátil y robusto, operó en transporte de tropas, paracaidismo, vigilancia marítima, fotografía aérea y evacuación sanitaria durante más de cuatro décadas de servicio leal.',
        specs: [
            ['Velocidad de crucero', '300 km/h'],
            ['Alcance', '1.433 km'],
            ['Techo de servicio', '7.925 m'],
            ['Carga útil', '2.000 kg / 26 soldados'],
            ['Envergadura', '19,00 m'],
            ['Longitud', '16,15 m'],
            ['Motores', '2× Garrett TPE331-10R-513C'],
            ['Tripulación', '2 pilotos + operadores de carga']
        ],
        unidades: '~70',
        servicioEspana: '1974 – 2018',
        bases: 'Múltiples bases. Ala 35 (Getafe) como base principal.',
        retiro: 'Sustituido progresivamente por el C-295. Algunos ejemplares pasaron a otras fuerzas y operadores civiles.',
        armament: 'Sin armamento en la mayoría de versiones · Variante patrulla marítima con radar FLIR',
        gallery: [
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 105, name: 'McDonnell Douglas RF-4C Phantom II', designation: 'CR.12',
        type: 'reconocimiento', role: 'Reconocimiento Fotográfico Estratégico',
        era: '1978 – 2002',
        image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=450&fit=crop&q=80',
        general: 'El RF-4C Phantom II fue la variante de reconocimiento fotográfico del legendario F-4 Phantom. España lo recibió de Estados Unidos para cubrir su necesidad de inteligencia estratégica durante la Guerra Fría. Equipado con cámaras de alta resolución, sensores infrarrojos y sistemas de reconocimiento electrónico en vez de armamento, el Phantom español sobrevoló miles de kilómetros de territorio aliado y potencialmente hostil recopilando información vital. Su retirada en 2002 dejó un vacío de capacidad que tardó años en cubrirse.',
        specs: [
            ['Velocidad máxima', 'Mach 2.23 (2.370 km/h)'],
            ['Techo de servicio', '18.975 m'],
            ['Alcance de combate', '680 km'],
            ['Envergadura', '11,77 m'],
            ['Longitud', '19,17 m'],
            ['Motores', '2× GE J79-GE-17A'],
            ['Empuje total (post.)', '2× 79,4 kN'],
            ['Tripulación', '2 (piloto + oficial de sistemas)']
        ],
        unidades: '12',
        servicioEspana: '1978 – 2002',
        bases: 'Ala 12 (Torrejón de Ardoz)',
        retiro: 'Retirado por obsolescencia y costes de mantenimiento. Las capacidades de reconocimiento pasaron a sistemas modernos.',
        armament: 'Sin armamento ofensivo · 3 estaciones de cámaras KS-72 / KS-87 · Sensores IR AAD-5',
        gallery: [
            'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 106, name: 'Northrop F-5 Freedom Fighter', designation: 'AE.9',
        type: 'entrenamiento', role: 'Entrenamiento Avanzado / Caza Ligero',
        era: '1969 – 2017',
        image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=450&fit=crop&q=80',
        general: 'El F-5 Freedom Fighter llegó a España en 1969 y se convirtió en la piedra angular de la formación de pilotos de caza durante casi 50 años. Ágil, económico y robusto, el F-5 formó a generaciones enteras de aviadores que pasaron posteriormente a los Mirage, F-18 y Eurofighter. La Patrulla Águila lo utilizó en sus inicios antes de pasar al C-101. Su longevidad es testimonio de una excelente relación coste-eficacia y de una doctrina de entrenamiento que produjo algunos de los mejores pilotos de la OTAN.',
        specs: [
            ['Velocidad máxima', 'Mach 1.6 (1.700 km/h)'],
            ['Techo de servicio', '15.790 m'],
            ['Alcance de combate', '222 km'],
            ['Envergadura', '7,70 m'],
            ['Longitud', '14,68 m'],
            ['Motores', '2× GE J85-GE-21B'],
            ['Empuje total (post.)', '2× 22,2 kN'],
            ['Tripulación', '1 (F-5A) / 2 (F-5B biplaza)']
        ],
        unidades: '~70',
        servicioEspana: '1969 – 2017',
        bases: 'Academia General del Aire (San Javier) · Ala 23 (Talavera la Real)',
        retiro: 'Retirado tras décadas de servicio. Sustituido en el rol de entrenamiento avanzado por el C-101 Aviojet.',
        armament: 'Cañón Pontiac M39 20 mm × 2 · Misiles AIM-9 Sidewinder · Bombas convencionales (modo caza ligero)',
        gallery: [
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80'
        ]
    },
    {
        id: 107, name: 'Lockheed C-130 Hercules', designation: 'T.10',
        type: 'transporte', role: 'Transporte Táctico y Estratégico',
        era: '1973 – 2016',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=450&fit=crop&q=80',
        general: 'El legendario C-130 Hercules es uno de los aviones militares más exitosos de la historia, y España no fue excepción. El Ejército del Aire operó varios Hércules durante más de cuatro décadas en un amplísimo espectro de misiones: transporte de tropas y material, reabastecimiento aéreo, paracaidismo, evacuación sanitaria, extinción de incendios y apoyo logístico en zonas de conflicto. Participó en misiones en Bosnia, Kosovo, Afganistán e Iraq, siendo testigo directo de la historia militar española contemporánea.',
        specs: [
            ['Carga útil máxima', '19.356 kg'],
            ['Velocidad de crucero', '592 km/h'],
            ['Alcance con carga máx.', '3.800 km'],
            ['Techo de servicio', '10.060 m'],
            ['Envergadura', '40,41 m'],
            ['Longitud', '29,79 m'],
            ['Motores', '4× Allison T56-A-15'],
            ['Tripulación', '5 + operadores de carga']
        ],
        unidades: '12',
        servicioEspana: '1973 – 2016',
        bases: 'Ala 31 (Zaragoza) · Ala 35 (Getafe)',
        retiro: 'Sustituido por el Airbus A400M Atlas, tecnológicamente muy superior.',
        armament: 'Sin armamento ofensivo · Contramedidas AN/ALQ-157 · Dispensadores de bengalas/chaff',
        gallery: [
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&h=540&fit=crop&q=80'
        ]
    }
];

/* ── State ──────────────────────────────────────────── */
let currentFilter    = 'all';
let currentPlane     = null;
let currentGalleryIdx = 0;
let countersAnimated  = false;
let menuOpen          = false;

/* ══════════════════════════════════════════════════════
   PAGE LOADER
   ══════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('page-loader').classList.add('hidden');
    }, 1600);
});

/* ══════════════════════════════════════════════════════
   SCROLL EVENTS
   ══════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
    const scrolled  = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar
    document.getElementById('scroll-progress-bar').style.width =
        ((scrolled / maxScroll) * 100) + '%';

    // Navbar
    document.getElementById('navbar').classList.toggle('scrolled', scrolled > 40);

    // Animate counters once
    const cifrasEl = document.getElementById('cifras');
    if (cifrasEl && !countersAnimated) {
        const top = cifrasEl.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
            animateCounters();
            countersAnimated = true;
        }
    }
}, { passive: true });

/* ══════════════════════════════════════════════════════
   INTERSECTION OBSERVER — scroll reveal
   ══════════════════════════════════════════════════════ */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-fade').forEach(el => io.observe(el));

/* ══════════════════════════════════════════════════════
   COUNTER ANIMATION
   ══════════════════════════════════════════════════════ */
function animateCounters() {
    document.querySelectorAll('.cifra-n').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();

        const easeOut = t => 1 - Math.pow(1 - t, 3);

        function step(now) {
            const t = Math.min((now - start) / duration, 1);
            const val = Math.round(easeOut(t) * target);
            el.textContent = val.toLocaleString('es-ES') + suffix;
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
}

/* ══════════════════════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════════════════════ */
function smoothScrollTo(id, event) {
    if (event) event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
        const navbar = document.getElementById('navbar');
        // Disable transition so background switches instantly — prevents the "split" glitch
        navbar.style.transition = 'none';
        navbar.classList.add('scrolled');
        // Force reflow before re-enabling transitions
        navbar.getBoundingClientRect();
        navbar.style.transition = '';

        const offset = navbar.offsetHeight;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // If navigating back to top, remove scrolled class once we arrive
        if (id === 'inicio') {
            const checkScroll = setInterval(() => {
                if (window.scrollY <= 40) {
                    navbar.style.transition = 'none';
                    navbar.classList.remove('scrolled');
                    navbar.getBoundingClientRect();
                    navbar.style.transition = '';
                    clearInterval(checkScroll);
                }
            }, 100);
            setTimeout(() => clearInterval(checkScroll), 2000);
        }
    }
    if (menuOpen) toggleMobileMenu();
}

function toggleMobileMenu() {
    menuOpen = !menuOpen;
    const drawer = document.getElementById('nav-drawer');
    const btn    = document.getElementById('hamburger');
    const icon   = document.getElementById('hamburger-icon');
    drawer.classList.toggle('open', menuOpen);
    drawer.setAttribute('aria-hidden', !menuOpen);
    btn.setAttribute('aria-expanded', menuOpen);
    icon.className = menuOpen ? 'fas fa-xmark' : 'fas fa-bars';
}

/* ══════════════════════════════════════════════════════
   FLEET
   ══════════════════════════════════════════════════════ */
const typeLabels = {
    caza: 'caza', transporte: 'transporte',
    'helicóptero': 'helicóptero', patrulla: 'patrulla', entrenamiento: 'entrenamiento'
};

function renderFleet(data) {
    const grid = document.getElementById('fleet-grid');
    grid.innerHTML = '';

    document.getElementById('results-count').textContent =
        `Mostrando ${data.length} aeronave${data.length !== 1 ? 's' : ''}`;

    if (!data.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-magnifying-glass"></i>
                <p>No se encontraron aeronaves con esos criterios.</p>
            </div>`;
        return;
    }

    data.forEach((plane, i) => {
        const card = document.createElement('article');
        card.className = 'ac-card';
        card.style.setProperty('--card-delay', `${i * 50}ms`);
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Ver detalles de ${plane.name}`);
        card.innerHTML = `
            <div class="ac-img">
                <img src="${plane.image}" alt="${plane.name}" loading="lazy"
                     onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem\'>✈️</div>'">
                <div class="ac-img-overlay"></div>
                <span class="ac-desig">${plane.designation}</span>
                <span class="ac-type-badge type-${plane.type}">${plane.type}</span>
            </div>
            <div class="ac-body">
                <h3>${plane.name}</h3>
                <p class="ac-role">${plane.role}</p>
                <div class="ac-footer">
                    <span class="ac-units"><i class="fas fa-circle-dot"></i>${plane.unidades} unidades</span>
                    <span class="ac-arrow"><i class="fas fa-arrow-right"></i></span>
                </div>
            </div>`;
        card.addEventListener('click', () => openModal(plane.id));
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(plane.id); });
        grid.appendChild(card);
    });
}

function filterFleet() {
    const q = document.getElementById('search-input').value.toLowerCase().trim();
    const clearBtn = document.getElementById('search-clear');
    clearBtn.classList.toggle('visible', q.length > 0);

    let data = aircraftData;
    if (currentFilter !== 'all') data = data.filter(p => p.type === currentFilter);
    if (q) data = data.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.designation.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q)
    );
    renderFleet(data);
}

function filterByType(type, btn) {
    currentFilter = type;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    filterFleet();
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    document.getElementById('search-clear').classList.remove('visible');
    filterFleet();
}

/* ══════════════════════════════════════════════════════
   MODAL
   ══════════════════════════════════════════════════════ */
function openModal(id) {
    currentPlane = aircraftData.find(p => p.id === id);
    if (!currentPlane) return;

    document.getElementById('modal-title').textContent    = currentPlane.name;
    document.getElementById('modal-subtitle').textContent = `${currentPlane.designation} · ${currentPlane.role}`;

    const backdrop = document.getElementById('aircraft-modal');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchTab(0);

    // Focus trap
    setTimeout(() => document.querySelector('.modal-close').focus(), 50);
}

function closeModal() {
    document.getElementById('aircraft-modal').classList.remove('open');
    document.body.style.overflow = '';
    currentPlane      = null;
    currentGalleryIdx = 0;
}

function handleBackdropClick(e) {
    if (e.target === document.getElementById('aircraft-modal')) closeModal();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('aircraft-modal').classList.contains('open')) {
        closeModal();
    }
});

/* ── Tabs ───────────────────────────────────────────── */
function switchTab(idx) {
    document.querySelectorAll('.mtab').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
    });

    const body = document.getElementById('modal-body');
    if (!currentPlane) return;

    switch (idx) {
        case 0: renderTabGeneral(body); break;
        case 1: renderTabSpecs(body);   break;
        case 2: renderTabSpain(body);   break;
        case 3: currentGalleryIdx = 0; renderTabGallery(body); break;
    }
}

function renderTabGeneral(body) {
    body.innerHTML = `
        <img class="mb-hero-img" src="${currentPlane.image}" alt="${currentPlane.name}"
             onerror="this.style.display='none'">
        <div class="mb-tags">
            <span class="mb-tag">${currentPlane.designation}</span>
            <span class="mb-tag mb-tag--red">${currentPlane.type}</span>
        </div>
        <h3 class="mb-title">${currentPlane.name}</h3>
        <p class="mb-role">${currentPlane.role}</p>
        <p class="mb-text">${currentPlane.general}</p>`;
}

function renderTabSpecs(body) {
    const rows = currentPlane.specs.map(([k, v]) =>
        `<tr><td>${k}</td><td>${v}</td></tr>`
    ).join('');
    body.innerHTML = `
        <p class="spec-section-title">Datos técnicos</p>
        <table class="spec-table"><tbody>${rows}</tbody></table>
        <p class="spec-section-title">Armamento y sistemas</p>
        <div class="armament-box">${currentPlane.armament}</div>`;
}

function renderTabSpain(body) {
    body.innerHTML = `
        <div class="spain-hero">
            <div class="spain-num">${currentPlane.unidades}</div>
            <div class="spain-label">Unidades operativas en España</div>
        </div>
        <div class="spain-bases">
            <strong>Bases y despliegue</strong>
            ${currentPlane.bases}
        </div>
        <div class="spain-bases">
            <strong>Rol operativo</strong>
            ${currentPlane.role}
        </div>`;
}

function renderTabGallery(body) {
    const imgs = currentPlane.gallery;
    const thumbs = imgs.map((src, i) => `
        <div class="gallery-thumb ${i === currentGalleryIdx ? 'active' : ''}"
             onclick="setGalleryImg(${i})">
            <img src="${src}" alt="Foto ${i + 1}" loading="lazy">
        </div>`).join('');

    body.innerHTML = `
        <div class="gallery-main">
            <img id="gal-main" src="${imgs[currentGalleryIdx]}" alt="Galería">
            <button class="gallery-prev" onclick="changeGalleryImg(-1)" aria-label="Anterior">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="gallery-next" onclick="changeGalleryImg(1)" aria-label="Siguiente">
                <i class="fas fa-chevron-right"></i>
            </button>
            <span class="gallery-counter">${currentGalleryIdx + 1} / ${imgs.length}</span>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>`;
}

function changeGalleryImg(dir) {
    currentGalleryIdx = (currentGalleryIdx + dir + currentPlane.gallery.length) % currentPlane.gallery.length;
    renderTabGallery(document.getElementById('modal-body'));
}

function setGalleryImg(idx) {
    currentGalleryIdx = idx;
    renderTabGallery(document.getElementById('modal-body'));
}

/* ══════════════════════════════════════════════════════
   HISTORICAL FLEET
   ══════════════════════════════════════════════════════ */
let currentHistFilter = 'all';
let currentHistPlane  = null;

function renderHistoricalFleet(data) {
    const grid = document.getElementById('hist-fleet-grid');
    if (!grid) return;
    grid.innerHTML = '';

    document.getElementById('hist-results-count').textContent =
        `Mostrando ${data.length} aeronave${data.length !== 1 ? 's' : ''}`;

    if (!data.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-magnifying-glass"></i>
                <p>No se encontraron aeronaves con esos criterios.</p>
            </div>`;
        return;
    }

    data.forEach((plane, i) => {
        const card = document.createElement('article');
        card.className = 'ac-card ac-card--hist';
        card.style.setProperty('--card-delay', `${i * 50}ms`);
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Ver detalles de ${plane.name}`);
        card.innerHTML = `
            <div class="ac-img">
                <img src="${plane.image}" alt="${plane.name}" loading="lazy"
                     onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem\'>✈️</div>'">
                <div class="ac-img-overlay"></div>
                <span class="ac-desig">${plane.designation}</span>
                <span class="ac-type-badge type-${plane.type}">${plane.type}</span>
                <span class="ac-era-badge"><i class="fas fa-clock-rotate-left"></i> ${plane.era}</span>
            </div>
            <div class="ac-body">
                <h3>${plane.name}</h3>
                <p class="ac-role">${plane.role}</p>
                <div class="ac-footer">
                    <span class="ac-units"><i class="fas fa-hourglass-end"></i>${plane.era}</span>
                    <span class="ac-arrow"><i class="fas fa-arrow-right"></i></span>
                </div>
            </div>`;
        card.addEventListener('click', () => openHistModal(plane.id));
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openHistModal(plane.id); });
        grid.appendChild(card);
    });
}

function filterHistFleet() {
    const q = document.getElementById('hist-search-input').value.toLowerCase().trim();
    const clearBtn = document.getElementById('hist-search-clear');
    clearBtn.classList.toggle('visible', q.length > 0);

    let data = historicalAircraftData;
    if (currentHistFilter !== 'all') data = data.filter(p => p.type === currentHistFilter);
    if (q) data = data.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.designation.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.era.toLowerCase().includes(q)
    );
    renderHistoricalFleet(data);
}

function filterHistByType(type, btn) {
    currentHistFilter = type;
    document.querySelectorAll('.hist-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    filterHistFleet();
}

function clearHistSearch() {
    document.getElementById('hist-search-input').value = '';
    document.getElementById('hist-search-clear').classList.remove('visible');
    filterHistFleet();
}

/* ══════════════════════════════════════════════════════
   HISTORICAL MODAL
   ══════════════════════════════════════════════════════ */
function openHistModal(id) {
    currentHistPlane = historicalAircraftData.find(p => p.id === id);
    if (!currentHistPlane) return;

    document.getElementById('hist-modal-title').textContent    = currentHistPlane.name;
    document.getElementById('hist-modal-subtitle').textContent = `${currentHistPlane.designation} · ${currentHistPlane.role}`;

    const backdrop = document.getElementById('hist-aircraft-modal');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchHistTab(0);

    setTimeout(() => document.querySelector('.hist-modal-close').focus(), 50);
}

function closeHistModal() {
    document.getElementById('hist-aircraft-modal').classList.remove('open');
    document.body.style.overflow = '';
    currentHistPlane  = null;
    currentGalleryIdx = 0;
}

function handleHistBackdropClick(e) {
    if (e.target === document.getElementById('hist-aircraft-modal')) closeHistModal();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('hist-aircraft-modal')?.classList.contains('open')) {
        closeHistModal();
    }
});

function switchHistTab(idx) {
    document.querySelectorAll('.hist-mtab').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
    });
    const body = document.getElementById('hist-modal-body');
    if (!currentHistPlane) return;
    switch (idx) {
        case 0: renderHistTabGeneral(body);  break;
        case 1: renderHistTabSpecs(body);    break;
        case 2: renderHistTabService(body);  break;
        case 3: currentGalleryIdx = 0; renderHistTabGallery(body); break;
    }
}

function renderHistTabGeneral(body) {
    body.innerHTML = `
        <img class="mb-hero-img" src="${currentHistPlane.image}" alt="${currentHistPlane.name}"
             onerror="this.style.display='none'">
        <div class="mb-tags">
            <span class="mb-tag">${currentHistPlane.designation}</span>
            <span class="mb-tag mb-tag--red">${currentHistPlane.type}</span>
            <span class="mb-tag mb-tag--gold"><i class="fas fa-clock-rotate-left"></i> ${currentHistPlane.era}</span>
        </div>
        <h3 class="mb-title">${currentHistPlane.name}</h3>
        <p class="mb-role">${currentHistPlane.role}</p>
        <p class="mb-text">${currentHistPlane.general}</p>`;
}

function renderHistTabSpecs(body) {
    const rows = currentHistPlane.specs.map(([k, v]) =>
        `<tr><td>${k}</td><td>${v}</td></tr>`
    ).join('');
    body.innerHTML = `
        <p class="spec-section-title">Datos técnicos</p>
        <table class="spec-table"><tbody>${rows}</tbody></table>
        <p class="spec-section-title">Armamento y sistemas</p>
        <div class="armament-box">${currentHistPlane.armament}</div>`;
}

function renderHistTabService(body) {
    body.innerHTML = `
        <div class="spain-hero">
            <div class="spain-num" style="font-size:1.6rem">${currentHistPlane.era}</div>
            <div class="spain-label">Período de servicio en España</div>
        </div>
        <div class="spain-bases">
            <strong>Unidades operadas</strong>
            ~${currentHistPlane.unidades} aeronaves
        </div>
        <div class="spain-bases">
            <strong>Bases y despliegue</strong>
            ${currentHistPlane.bases}
        </div>
        <div class="spain-bases">
            <strong>Motivo de retirada</strong>
            ${currentHistPlane.retiro}
        </div>`;
}

function renderHistTabGallery(body) {
    const imgs = currentHistPlane.gallery;
    const thumbs = imgs.map((src, i) => `
        <div class="gallery-thumb ${i === currentGalleryIdx ? 'active' : ''}"
             onclick="setHistGalleryImg(${i})">
            <img src="${src}" alt="Foto ${i + 1}" loading="lazy">
        </div>`).join('');
    body.innerHTML = `
        <div class="gallery-main">
            <img id="hist-gal-main" src="${imgs[currentGalleryIdx]}" alt="Galería">
            <button class="gallery-prev" onclick="changeHistGalleryImg(-1)" aria-label="Anterior">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="gallery-next" onclick="changeHistGalleryImg(1)" aria-label="Siguiente">
                <i class="fas fa-chevron-right"></i>
            </button>
            <span class="gallery-counter">${currentGalleryIdx + 1} / ${imgs.length}</span>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>`;
}

function changeHistGalleryImg(dir) {
    currentGalleryIdx = (currentGalleryIdx + dir + currentHistPlane.gallery.length) % currentHistPlane.gallery.length;
    renderHistTabGallery(document.getElementById('hist-modal-body'));
}

function setHistGalleryImg(idx) {
    currentGalleryIdx = idx;
    renderHistTabGallery(document.getElementById('hist-modal-body'));
}


function handleFormSubmit() {
    const nombre   = document.getElementById('f-nombre').value.trim();
    const apellidos= document.getElementById('f-apellidos').value.trim();
    const email    = document.getElementById('f-email').value.trim();
    const mensaje  = document.getElementById('f-mensaje').value.trim();

    const errEl = document.getElementById('form-error');
    const okEl  = document.getElementById('form-success');

    errEl.classList.add('hidden');
    okEl.classList.add('hidden');

    if (!nombre || !apellidos || !email || !mensaje) {
        errEl.classList.remove('hidden');
        errEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }

    // Simulate send
    okEl.classList.remove('hidden');
    okEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Reset
    ['f-nombre','f-apellidos','f-email','f-asunto','f-mensaje'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    setTimeout(() => okEl.classList.add('hidden'), 6000);
}

/* ══════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    renderFleet(aircraftData);
    renderHistoricalFleet(historicalAircraftData);

    // Re-observe any dynamically needed reveals
    document.querySelectorAll('.reveal, .reveal-fade').forEach(el => io.observe(el));

    /* ── Back to top button ─────────────────────────── */
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('visible', window.scrollY > 500);
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

/* ══════════════════════════════════════════════════════
   ACTIVE NAV LINK — resalta el enlace de la sección visible
   ══════════════════════════════════════════════════════ */
(function () {
    // Añadidas las nuevas secciones al array para que el scroll spy funcione
    const sections = ['inicio','cifras','misiones','flota','flota-historica','unidades','actualidad','historia','contacto'];
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActive() {
        let current = 'inicio';
        const offset = document.getElementById('navbar').offsetHeight + 60;

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= offset) current = id;
        });

        navLinks.forEach(a => {
            const href = a.getAttribute('href')?.replace('#','');
            a.classList.toggle('is-active', href === current);
        });
    }

    window.addEventListener('scroll', setActive, { passive: true });
    window.addEventListener('load', setActive);
})();

/* ══════════════════════════════════════════════════════
   HERO PARTICLES — canvas animation
   ══════════════════════════════════════════════════════ */
(function initParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    const COUNT = 60;

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function Particle() {
        this.reset = function() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.vx = (Math.random() - .5) * .4;
            this.vy = -Math.random() * .6 - .2;
            this.r  = Math.random() * 1.5 + .5;
            this.alpha = Math.random() * .5 + .1;
            this.life = 0;
            this.maxLife = Math.random() * 300 + 150;
        };
        this.reset();
        this.life = Math.random() * this.maxLife; // stagger
    }

    function init() {
        resize();
        particles = Array.from({length: COUNT}, () => new Particle());
        window.addEventListener('resize', () => { resize(); });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.life++;
            const progress = p.life / p.maxLife;
            const alpha = p.alpha * Math.sin(progress * Math.PI);
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200,16,46,${alpha})`;
            ctx.fill();
            if (p.life >= p.maxLife || p.y < -10) p.reset();
        });
        requestAnimationFrame(draw);
    }

    init();
    draw();
})();

/* ══════════════════════════════════════════════════════
   RADAR CANVAS
   ══════════════════════════════════════════════════════ */
(function initRadar() {
    const canvas = document.getElementById('radar-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = 180, cy = 180, R = 170;
    let angle = 0;
    const blips = [];

    // Generate random blips
    for (let i = 0; i < 8; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * R * .85;
        blips.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, age: Math.random() * 360 });
    }

    function drawFrame() {
        ctx.clearRect(0, 0, 360, 360);

        // Background
        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
        bg.addColorStop(0, 'rgba(9,9,11,1)');
        bg.addColorStop(1, 'rgba(4,4,6,1)');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.fill();

        // Grid rings
        [.25,.5,.75,1].forEach(f => {
            ctx.beginPath();
            ctx.arc(cx, cy, R * f, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(200,16,46,.12)';
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        // Cross hairs
        ctx.strokeStyle = 'rgba(200,16,46,.1)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4,4]);
        ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();
        ctx.setLineDash([]);

        // Sweep gradient
        const sweep = ctx.createConicalGradient ? null : null;
        // fallback sweep using arc fill
        const grad = ctx.createConicGradient ? ctx.createConicGradient(angle, cx, cy) : null;
        if (grad) {
            grad.addColorStop(0, 'rgba(200,16,46,.35)');
            grad.addColorStop(.12, 'rgba(200,16,46,.08)');
            grad.addColorStop(.13, 'transparent');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
        } else {
            // simple rotating sector
            ctx.save();
            const secGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
            secGrad.addColorStop(0, 'rgba(200,16,46,.3)');
            secGrad.addColorStop(1, 'rgba(200,16,46,.0)');
            ctx.fillStyle = secGrad;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, R, angle, angle + .45);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        // Sweep line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R);
        ctx.strokeStyle = 'rgba(200,16,46,.7)';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#c8102e';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Blips
        blips.forEach(b => {
            const blipAngle = Math.atan2(b.y - cy, b.x - cx);
            const diff = ((blipAngle - angle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
            const glow = diff < .4 ? 1 : Math.max(0, 1 - (diff / (Math.PI * 1.5)));
            if (glow > 0.05) {
                ctx.beginPath();
                ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200,16,46,${glow})`;
                ctx.shadowColor = '#c8102e';
                ctx.shadowBlur = 8 * glow;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        });

        // Border
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200,16,46,.25)';
        ctx.lineWidth = 2;
        ctx.stroke();

        angle += 0.025;
        if (angle > Math.PI * 2) angle -= Math.PI * 2;
        requestAnimationFrame(drawFrame);
    }
    drawFrame();

    // Animated counters for radar section
    function animateRadarCounters() {
        animateValue('rs-sorties', 0, 34, 1800);
        animateValue('rs-hours', 0, 127, 2000);
        animateValue('rs-countries', 0, 8, 1400);
    }

    function animateValue(id, from, to, duration) {
        const el = document.getElementById(id);
        if (!el) return;
        const start = performance.now();
        function update(now) {
            const p = Math.min((now - start) / duration, 1);
            el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // Trigger when section visible
    const radarSection = document.querySelector('.s-radar');
    if (radarSection) {
        const obs = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                animateRadarCounters();
                obs.disconnect();
            }
        }, { threshold: 0.3 });
        obs.observe(radarSection);
    }
})();

/* ══════════════════════════════════════════════════════
   BASES AÉREAS — datos y lógica
   ══════════════════════════════════════════════════════ */
const basesData = [
    {
        id: 0, name: 'Base Aérea de Zaragoza', loc: 'Zaragoza, Aragón',
        type: 'MULTIROL', badge: '', badgeClass: '',
        units: 'Ala 31 — A400M Atlas', craft: 'A400M Atlas (T.23)',
        nato: 'Aeródromo certificado OTAN. Zona de apoyo logístico para despliegues internacionales.',
        pista: '3.798 m principal + 2.743 m secundaria',
        efectivos: '~2.200 militares'
    },
    {
        id: 1, name: 'Base Aérea de Morón de la Frontera', loc: 'Sevilla, Andalucía',
        type: 'CONJUNTA OTAN', badge: 'NATO', badgeClass: '',
        units: 'Ala 11 — Eurofighter | Ala 21 — F/A-18', craft: 'Eurofighter Typhoon · F/A-18 Hornet',
        nato: 'Base conjunta hispano-estadounidense. Alberga recursos de USAF de forma permanente.',
        pista: '3.810 m',
        efectivos: '~1.800 + personal EEUU'
    },
    {
        id: 2, name: 'Base Aérea de Albacete', loc: 'Albacete, Castilla-La Mancha',
        type: 'COMBATE', badge: '', badgeClass: '',
        units: 'Ala 14 — Eurofighter | CLAEX', craft: 'Eurofighter Typhoon (C.16)',
        nato: 'Centro de excelencia Eurofighter. Sede del CLAEX (Centro Logístico Aéreo).',
        pista: '3.507 m',
        efectivos: '~2.500 militares'
    },
    {
        id: 3, name: 'Base Aérea de Torrejón de Ardoz', loc: 'Madrid',
        type: 'TRANSPORTE VIP', badge: '', badgeClass: '',
        units: 'Ala 12 — F/A-18 | GEA', craft: 'F/A-18 Hornet · Falcon 900 · A310',
        nato: 'Sede del Grupo de Escuadrillas de Apoyo. Transporte VIP presidencial y gubernamental.',
        pista: '3.660 m',
        efectivos: '~3.000 militares'
    },
    {
        id: 4, name: 'Base Aérea de Getafe', loc: 'Madrid Sur',
        type: 'LOGÍSTICA', badge: '', badgeClass: '',
        units: 'Ala 35 — C-295 | Ala 78 — NH90', craft: 'CASA C-295 · NH90 TTH',
        nato: 'CLAV (Centro Logístico de Armamento y Experimentación). Sede del Museo del Aire.',
        pista: '2.500 m',
        efectivos: '~1.600 militares'
    },
    {
        id: 5, name: 'Base Aérea de Gando', loc: 'Gran Canaria, Islas Canarias',
        type: 'FRONTERA SUR', badge: 'CANARIAS', badgeClass: 'bdc-badge--gold',
        units: 'Ala 46 — Eurofighter', craft: 'Eurofighter Typhoon (C.16) · C-295',
        nato: 'Cubre el espacio aéreo del Atlántico Sur y ejerce vigilancia sobre rutas migratorias del continente africano.',
        pista: '3.100 m',
        efectivos: '~1.200 militares'
    },
    {
        id: 6, name: 'Base Aérea de Reus', loc: 'Tarragona, Cataluña',
        type: 'MIXTA CIVIL', badge: '', badgeClass: '',
        units: 'Apoyo 2.ª Región Aérea', craft: 'C-295 · Helicópteros SAR',
        nato: 'Base de uso mixto civil-militar. Apoyo SAR en el Mediterráneo noroccidental.',
        pista: '2.700 m',
        efectivos: '~500 militares'
    },
    {
        id: 7, name: 'Base Aérea de Son San Juan', loc: 'Palma de Mallorca, Baleares',
        type: 'SAR MEDITERRÁNEO', badge: 'SAR', badgeClass: '',
        units: 'Ala 48 — NH90 · P-3 Orion', craft: 'NH90 · CASA CN-235 Vigía',
        nato: 'Control del Mediterráneo Occidental. Misiones SAR, vigilancia marítima y cooperación con la Guardia Civil.',
        pista: '3.270 m',
        efectivos: '~900 militares'
    },
    {
        id: 8, name: 'Despliegue Exterior — Lituania (eFP)', loc: 'Šiauliai Air Base, Lituania',
        type: 'MISIÓN OTAN', badge: 'EXTERIOR', badgeClass: 'bdc-badge--gold',
        units: 'Rotación Ala 14 — 6 × Eurofighter', craft: 'Eurofighter Typhoon',
        nato: 'Enhanced Forward Presence de la OTAN. España lidera la Policía Aérea en el Báltico desde 2026.',
        pista: '2.800 m (base anfitriona)',
        efectivos: '~130 militares rotación'
    }
];

function renderBases() {
    const list = document.getElementById('bases-list');
    if (!list) return;
    list.innerHTML = basesData.map(b => `
        <div class="base-item" data-id="${b.id}" onclick="selectBase(${b.id})">
            <div class="bi-dot ${b.type === 'FRONTERA SUR' || b.type === 'MISIÓN OTAN' ? 'bi-dot--gold' : ''}"></div>
            <div class="bi-name">${b.name.replace('Base Aérea de ', '').replace('Base Aérea — ', '').replace('Despliegue Exterior — ', '')}</div>
            <div class="bi-type">${b.type}</div>
        </div>`).join('');

    // Hook SVG group clicks
    document.querySelectorAll('#spain-svg .map-base-group').forEach(g => {
        const circle = g.querySelector('circle.map-base-dot');
        if (circle) {
            const onclick = g.getAttribute('onclick');
            // already set via HTML onclick attribute
        }
    });
}

function highlightSVGBase(id) {
    document.querySelectorAll('#spain-svg .map-base-group circle.map-base-dot').forEach((c) => {
        c.setAttribute('r', c.classList.contains('map-base-gold') ? '6' : '6');
        c.style.opacity = '0.6';
    });
    // Highlight the selected one
    const groups = document.querySelectorAll('#spain-svg .map-base-group');
    // find group by onclick attribute containing selectBase(id)
    groups.forEach(g => {
        const onc = g.getAttribute('onclick') || '';
        if (onc.includes(`selectBase(${id})`)) {
            const c = g.querySelector('circle.map-base-dot');
            if (c) {
                c.setAttribute('r', '9');
                c.style.opacity = '1';
                c.style.filter = 'drop-shadow(0 0 10px rgba(200,16,46,1))';
            }
        } else {
            const c = g.querySelector('circle.map-base-dot');
            if (c) {
                c.setAttribute('r', '6');
                c.style.opacity = '0.7';
                c.style.filter = '';
            }
        }
    });
}

function selectBase(id) {
    const b = basesData.find(x => x.id === id);
    if (!b) return;

    // Update list active state
    document.querySelectorAll('.base-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === id);
    });

    // Update pin active state
    document.querySelectorAll('.base-pin').forEach(pin => {
        pin.classList.toggle('active', parseInt(pin.dataset.base) === id);
    });

    // Highlight the SVG dot
    highlightSVGBase(id);

    const detail = document.getElementById('base-detail');
    detail.innerHTML = `
        <div class="base-detail-content">
            <div class="bdc-header">
                <div>
                    <div class="bdc-name">${b.name}</div>
                    <div class="bdc-loc"><i class="fas fa-location-dot" style="color:var(--red);margin-right:5px"></i>${b.loc}</div>
                </div>
                <span class="bdc-badge ${b.badgeClass}">${b.badge || b.type}</span>
            </div>
            <div class="bdc-rows">
                <div class="bdc-row"><strong>Unidades</strong>${b.units}</div>
                <div class="bdc-row"><strong>Aeronaves</strong>${b.craft}</div>
                <div class="bdc-row"><strong>Pista</strong>${b.pista}</div>
                <div class="bdc-row"><strong>Efectivos</strong>${b.efectivos}</div>
                <div class="bdc-row"><strong>Nota</strong>${b.nato}</div>
            </div>
        </div>`;
}

/* ══════════════════════════════════════════════════════
   QUIZ DE RECLUTAMIENTO
   ══════════════════════════════════════════════════════ */
const quizQuestions = [
    {
        q: '¿Cuál de estas actividades te apasiona más?',
        opts: [
            { icon: '✈️', text: 'Volar y aviación', tags: ['piloto'] },
            { icon: '🔧', text: 'Mecánica y tecnología', tags: ['mantenimiento'] },
            { icon: '🛡️', text: 'Seguridad y defensa', tags: ['seguridad'] },
            { icon: '📡', text: 'Telecomunicaciones', tags: ['telecom'] }
        ]
    },
    {
        q: '¿Cómo defines tu perfil de trabajo ideal?',
        opts: [
            { icon: '🎯', text: 'Alta exigencia, operaciones de élite', tags: ['piloto','seguridad'] },
            { icon: '🤝', text: 'Trabajo en equipo coordinado', tags: ['mantenimiento','telecom'] },
            { icon: '🌍', text: 'Misiones en el exterior', tags: ['piloto','seguridad'] },
            { icon: '🏗️', text: 'Ingeniería y sistemas complejos', tags: ['mantenimiento','telecom'] }
        ]
    },
    {
        q: '¿Cuál es tu nivel académico o al que aspiras?',
        opts: [
            { icon: '🎓', text: 'Grado universitario / Ingeniería', tags: ['piloto'] },
            { icon: '📚', text: 'FP o Bachillerato', tags: ['mantenimiento','telecom'] },
            { icon: '🏅', text: 'ESO y disposición absoluta', tags: ['seguridad'] },
            { icon: '⭐', text: 'Máster / postgrado', tags: ['piloto','telecom'] }
        ]
    },
    {
        q: '¿Qué tipo de aeronave te resulta más fascinante?',
        opts: [
            { icon: '🦅', text: 'Cazas supersónicos', tags: ['piloto'] },
            { icon: '🚁', text: 'Helicópteros de rescate', tags: ['seguridad','piloto'] },
            { icon: '🛸', text: 'Drones y sistemas no tripulados', tags: ['telecom','mantenimiento'] },
            { icon: '📦', text: 'Aviones de transporte y carga', tags: ['mantenimiento','piloto'] }
        ]
    },
    {
        q: '¿Qué valor militar consideras más importante?',
        opts: [
            { icon: '⚡', text: 'Reacción instantánea bajo presión', tags: ['piloto','seguridad'] },
            { icon: '🔍', text: 'Precisión técnica sin margen de error', tags: ['mantenimiento','telecom'] },
            { icon: '🌐', text: 'Visión estratégica global', tags: ['piloto','telecom'] },
            { icon: '💪', text: 'Resistencia física y mental', tags: ['seguridad','piloto'] }
        ]
    }
];

const quizResults = {
    piloto: {
        icon: '✈️',
        title: 'Piloto Militar',
        label: 'TU DESTINO',
        desc: 'Tu perfil encaja con la línea de vuelo. Con formación en la Academia General del Aire y años de práctica, podrías pilotar Eurofighters sobre el Báltico o A400M en misiones humanitarias. El cielo no es el límite: es tu área de operaciones.'
    },
    mantenimiento: {
        icon: '🔧',
        title: 'Especialista en Mantenimiento',
        label: 'TU DESTINO',
        desc: 'Eres la razón por la que los aviones despegan. Los especialistas en mantenimiento aeronáutico son el corazón técnico del Ejército del Aire, garantizando la operatividad de los sistemas más avanzados del mundo.'
    },
    seguridad: {
        icon: '🛡️',
        title: 'Policía Militar / EZAPAC',
        label: 'TU DESTINO',
        desc: 'Tu vocación es la protección. Desde la defensa de bases aéreas hasta operaciones de rescate en combate (CSAR) con el EZAPAC, tu papel garantiza que las misiones se ejecuten con seguridad absoluta.'
    },
    telecom: {
        icon: '📡',
        title: 'Especialista en Telecomunicaciones y CIS',
        label: 'TU DESTINO',
        desc: 'Sin comunicaciones no hay misión. Los especialistas CIS conectan a pilotos, controladores y mandos en tiempo real, gestionando sistemas SATCOM, redes cifradas y ciberdefensa que son la columna vertebral del combate moderno.'
    }
};

let quizScores = { piloto: 0, mantenimiento: 0, seguridad: 0, telecom: 0 };
let quizStep = 0;

function renderQuizStep() {
    const q = quizQuestions[quizStep];
    document.getElementById('quiz-q-num').textContent = `Pregunta ${quizStep + 1} de ${quizQuestions.length}`;
    document.getElementById('quiz-question').textContent = q.q;
    document.getElementById('quiz-progress').style.width = `${(quizStep / quizQuestions.length) * 100}%`;

    const opts = document.getElementById('quiz-options');
    opts.innerHTML = q.opts.map((o, i) => `
        <button class="quiz-opt" onclick="answerQuiz(${i})">
            <span class="opt-icon">${o.icon}</span>
            ${o.text}
        </button>`).join('');

    document.getElementById('quiz-step').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
}

function answerQuiz(optIdx) {
    const q = quizQuestions[quizStep];
    const chosen = q.opts[optIdx];
    chosen.tags.forEach(tag => { quizScores[tag]++; });

    quizStep++;
    if (quizStep < quizQuestions.length) {
        document.getElementById('quiz-progress').style.width = `${(quizStep / quizQuestions.length) * 100}%`;
        // animate out / in
        const stepEl = document.getElementById('quiz-step');
        stepEl.style.opacity = '0';
        stepEl.style.transform = 'translateX(20px)';
        setTimeout(() => {
            renderQuizStep();
            stepEl.style.transition = 'opacity .3s, transform .3s';
            stepEl.style.opacity = '1';
            stepEl.style.transform = 'translateX(0)';
        }, 250);
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('quiz-progress').style.width = '100%';
    const top = Object.entries(quizScores).sort((a,b) => b[1]-a[1])[0][0];
    const res = quizResults[top];

    document.getElementById('quiz-step').classList.add('hidden');
    const resEl = document.getElementById('quiz-result');
    resEl.classList.remove('hidden');
    resEl.innerHTML = `
        <div class="qr-icon">${res.icon}</div>
        <div class="qr-label">${res.label}</div>
        <h3 class="qr-title">${res.title}</h3>
        <p class="qr-desc">${res.desc}</p>
        <div class="qr-actions">
            <button class="btn btn-red" onclick="resetQuiz()">
                <i class="fas fa-redo"></i> Repetir test
            </button>
            <button class="btn btn-outline" onclick="smoothScrollTo('contacto', event)">
                Más información <i class="fas fa-arrow-right"></i>
            </button>
        </div>`;
}

function resetQuiz() {
    quizScores = { piloto: 0, mantenimiento: 0, seguridad: 0, telecom: 0 };
    quizStep = 0;
    renderQuizStep();
}

/* ══════════════════════════════════════════════════════
   INIT EXTENDIDO
   ══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    renderBases();
    renderQuizStep();

    // Update sections scroll spy
    const extSections = ['inicio','cifras','misiones','flota','unidades','actualidad','historia','bases','contacto'];
    // override existing scroll spy if needed — sections array already updated via IIFE

    // Select first base by default after a short delay
    setTimeout(() => selectBase(0), 800);
});
