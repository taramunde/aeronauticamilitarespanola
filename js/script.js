const aircraftData = [
    {
        id: 0,
        name: "Eurofighter Typhoon",
        designation: "C.16",
        type: "caza",
        role: "Superioridad Aérea / Polivalente",
        image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=450&fit=crop",
        general: "El Eurofighter Typhoon es el principal caza de cuarta generación avanzada del Ejército del Aire y del Espacio. Diseñado para alcanzar y mantener la superioridad aérea en los entornos más exigentes, combina una aerodinámica inestable controlada por ordenador con motores EJ200 de alta potencia, lo que le otorga una maniobrabilidad excepcional. Su sistema de gestión de armas integrado le permite ejecutar misiones de combate aire-aire y aire-tierra en cualquier condición meteorológica.",
        specs: [
            ["Velocidad Máx.", "Mach 2.0+ (2.495 km/h)"],
            ["Techo de servicio", "19.812 m"],
            ["Alcance de combate", "1.389 km"],
            ["Envergadura", "10,95 m"],
            ["Longitud", "15,96 m"],
            ["Peso máx. despegue", "23.500 kg"],
            ["Motores", "2× EuroJet EJ200"],
            ["Empuje total", "2× 90 kN con postcombustión"],
            ["Tripulación", "1 piloto (C.16C: 2)"]
        ],
        spain: "73 unidades — Ala 11 (Morón), Ala 14 (Albacete), Ala 46 (Gando)",
        unidades: "73",
        armament: "Cañón Mauser BK-27 · Misiles Meteor · IRIS-T · AIM-120C AMRAAM · AIM-9L Sidewinder · Bombas guiadas Paveway IV",
        gallery: [
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 1,
        name: "F/A-18 Hornet",
        designation: "C.15",
        type: "caza",
        role: "Cazabombardero Polivalente",
        image: "https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=450&fit=crop",
        general: "El McDonnell Douglas F/A-18 Hornet, designado C.15 en el Ejército del Aire, ha sido la espina dorsal de la aviación de combate española durante más de tres décadas. Este cazabombardero bimotor destaca por su versatilidad para ejecutar misiones de defensa aérea, superioridad aérea, ataque a tierra y supresión de defensas enemigas. España opera tanto la versión monoplaza como la biplaza (CE.15), esta última utilizada para entrenamiento avanzado.",
        specs: [
            ["Velocidad Máx.", "Mach 1.8 (1.915 km/h)"],
            ["Techo de servicio", "15.240 m"],
            ["Alcance de combate", "537 km (ataque)"],
            ["Envergadura", "11,43 m"],
            ["Longitud", "17,07 m"],
            ["Peso máx. despegue", "25.401 kg"],
            ["Motores", "2× GE F404-GE-402"],
            ["Empuje total", "2× 78,7 kN con postcombustión"],
            ["Tripulación", "1 (C.15) / 2 (CE.15)"]
        ],
        spain: "78 unidades — Ala 12 (Torrejón), Ala 15 (Zaragoza), Ala 21 (Morón)",
        unidades: "78",
        armament: "Cañón M61A1 Vulcan 20mm · AIM-9L/M Sidewinder · AIM-120 AMRAAM · AGM-88 HARM · Bombas Mk.82/83/84 · GBU-10/12 Paveway",
        gallery: [
            "https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 2,
        name: "Airbus A400M Atlas",
        designation: "T.23",
        type: "transporte",
        role: "Transporte Estratégico / Táctico",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop",
        general: "El Airbus A400M Atlas es el avión de transporte militar más avanzado del mundo occidental y el buque insignia de las capacidades logísticas del Ejército del Aire. Dotado de cuatro turbopropulsores TP400-D6, puede transportar cargas sobredimensionadas, vehículos militares y hasta 116 soldados a distancias intercontinentales. Su capacidad de operar en pistas no preparadas le confiere una versatilidad táctica única, combinando el alcance de un avión estratégico con las capacidades de aterrizaje de un avión táctico.",
        specs: [
            ["Carga útil máx.", "37 toneladas"],
            ["Velocidad de crucero", "Mach 0.72 (780 km/h)"],
            ["Alcance con carga máx.", "3.300 km"],
            ["Alcance en ferry", "8.710 km"],
            ["Techo de servicio", "11.300 m"],
            ["Envergadura", "42,40 m"],
            ["Longitud", "45,10 m"],
            ["Motores", "4× Europrop TP400-D6"],
            ["Tripulación", "3 + operadores de carga"]
        ],
        spain: "14 unidades — Ala 31 (Zaragoza)",
        unidades: "14",
        armament: "Sin armamento ofensivo · Sistemas de contramedidas DIRCM · Dispensadores de señuelos AN/ALE-47",
        gallery: [
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 3,
        name: "Boeing C-295",
        designation: "T.21",
        type: "transporte",
        role: "Transporte Táctico Ligero / Patrulla",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=450&fit=crop",
        general: "El CASA/IPTN CN-235 y su evolución el C-295 son aviones de fabricación española, desarrollados originalmente por CASA en Sevilla. El C-295 (T.21) es el buque insignia de la industria aeronáutica española y se emplea en misiones de transporte táctico ligero, patrulla marítima, vigilancia y búsqueda y rescate. Es uno de los aviones militares de transporte de tamaño medio más vendidos del mundo, operado por más de 30 países.",
        specs: [
            ["Carga útil máx.", "9,25 toneladas"],
            ["Velocidad de crucero", "480 km/h"],
            ["Alcance", "5.630 km"],
            ["Techo de servicio", "7.620 m"],
            ["Envergadura", "25,81 m"],
            ["Longitud", "24,50 m"],
            ["Capacidad", "71 soldados / 48 paracaidistas"],
            ["Motores", "2× Pratt & Whitney PW127G"],
            ["Tripulación", "2 + operadores de misión"]
        ],
        spain: "21 unidades — Ala 35 (Getafe), Escuadrón 803 (vigilancia marítima)",
        unidades: "21",
        armament: "Sin armamento ofensivo (variante militar) · Radar de búsqueda marítima · Sistemas FLIR",
        gallery: [
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 4,
        name: "NHIndustries NH90",
        designation: "HT.29",
        type: "helicóptero",
        role: "Transporte Táctico / Rescate",
        image: "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=450&fit=crop",
        general: "El NHIndustries NH90 es un helicóptero táctico de última generación desarrollado en consorcio europeo. El Ejército del Aire emplea la variante TTH (Tactical Transport Helicopter) para misiones de transporte de tropas, evacuación médica, operaciones de asalto y búsqueda y rescate. Con una cabina completamente digital 'full-glass cockpit' y sistemas de vuelo fly-by-wire, representa lo más avanzado en tecnología rotary-wing disponible en España.",
        specs: [
            ["Velocidad Máx.", "300 km/h"],
            ["Alcance", "800 km"],
            ["Capacidad de carga interna", "2.500 kg"],
            ["Capacidad de carga en eslinga", "4.000 kg"],
            ["Techo de servicio", "6.000 m"],
            ["Capacidad de pasajeros", "20 soldados equipados"],
            ["Motores", "2× GE CT7-8F / RTM322"],
            ["Longitud total", "19,56 m"],
            ["Tripulación", "2 pilotos + 2 operadores"]
        ],
        spain: "12 unidades — Ala 78 (Getafe), Ala 48 (Son San Juan, Mallorca)",
        unidades: "12",
        armament: "Ametralladora de puerta M240 · Pods de cohetes no guiados (opcionales) · FLIR / Sensor de misión",
        gallery: [
            "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 5,
        name: "Boeing CH-47 Chinook",
        designation: "HT.17",
        type: "helicóptero",
        role: "Transporte Pesado",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=450&fit=crop",
        general: "El Boeing CH-47 Chinook es el helicóptero de transporte pesado del Ejército del Aire, identificable por su inconfundible configuración de doble rotor en tándem. Capaz de transportar grandes cargas, vehículos militares y hasta 55 soldados, el Chinook es fundamental para operaciones logísticas en zonas inaccesibles por tierra y en apoyo de las operaciones de las Fuerzas Especiales. España opera la versión modernizada CH-47F con aviónica digital avanzada.",
        specs: [
            ["Velocidad Máx.", "315 km/h"],
            ["Alcance en ferry", "2.252 km"],
            ["Carga útil interna", "10.886 kg"],
            ["Carga en eslinga", "12.700 kg"],
            ["Techo de servicio", "5.640 m"],
            ["Capacidad de pasajeros", "55 soldados"],
            ["Motores", "2× Honeywell T55-GA-714A"],
            ["Longitud total", "30,18 m"],
            ["Tripulación", "3 + operadores de carga"]
        ],
        spain: "17 unidades — Batallón de Helicópteros de Maniobra (BHELMA IV), Colmenar Viejo",
        unidades: "17",
        armament: "3× Ametralladoras M134 Minigun o M240 (puertas y rampas) · Sistemas de contramedidas AN/AAQ-24",
        gallery: [
            "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 6,
        name: "Boeing 707 MRTT",
        designation: "T.17",
        type: "transporte",
        role: "Reabastecimiento en Vuelo / Transporte VIP",
        image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=450&fit=crop",
        general: "El Boeing 707 en su variante MRTT (Multi-Role Tanker Transport) es el avión cisterna del Ejército del Aire, capaz de reabastecer de combustible a otros aviones en vuelo mediante sistemas de manguera y drogue. Además de su misión principal como avión cisterna, el T.17 también se emplea como transporte de pasajeros VIP y en misiones de evacuación de personal. Su capacidad de reabastecimiento amplía drásticamente el alcance operativo de los cazas españoles.",
        specs: [
            ["Capacidad de combustible transferible", "90.000 litros"],
            ["Velocidad de crucero", "900 km/h"],
            ["Alcance en ferry", "10.000+ km"],
            ["Sistema de reabastecimiento", "HDR (Hose & Drogue) × 3"],
            ["Techo de servicio", "12.800 m"],
            ["Capacidad de pasajeros", "Hasta 160 (transporte)"],
            ["Motores", "4× P&W JT3D-7"],
            ["Longitud", "46,61 m"],
            ["Tripulación", "4 + operadores de cisterna"]
        ],
        spain: "2 unidades activas — Ala 45 (Base Aérea de Torrejón de Ardoz)",
        unidades: "2",
        armament: "Ninguno · Sistemas de comunicaciones satélite · Sistemas de reabastecimiento HDR Sargent Fletcher",
        gallery: [
            "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 7,
        name: "Cessna T-37 Tweet",
        designation: "E.25",
        type: "entrenamiento",
        role: "Entrenamiento Básico",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=450&fit=crop",
        general: "El Cessna T-37 Tweet es un avión bimotor a reacción utilizado para la fase de entrenamiento básico avanzado en el Ejército del Aire. Los futuros pilotos de caza completan en este avión las primeras horas de vuelo en reactor, dominando las técnicas fundamentales de pilotaje instrumental y de formación antes de pasar a aeronaves de mayor rendimiento como el CASA C-101 y posteriormente los cazas de primera línea.",
        specs: [
            ["Velocidad Máx.", "608 km/h"],
            ["Alcance", "1.306 km"],
            ["Techo de servicio", "10.668 m"],
            ["Envergadura", "10,30 m"],
            ["Longitud", "9,02 m"],
            ["Motores", "2× Continental J69-T-25"],
            ["Empuje total", "2× 4,56 kN"],
            ["Tripulación", "2 (instructor + alumno)"],
            ["Horas de vuelo", "+35.000 acumuladas"]
        ],
        spain: "36 unidades — Academia General del Aire, San Javier (Murcia)",
        unidades: "36",
        armament: "Sin armamento · Posibilidad de llevar pods de observación en misiones de instrucción táctica",
        gallery: [
            "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 8,
        name: "CASA C-101 Aviojet",
        designation: "E.25B",
        type: "entrenamiento",
        role: "Entrenamiento Avanzado / Ataque Ligero",
        image: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=800&h=450&fit=crop",
        general: "El CASA C-101 Aviojet es un avión de entrenamiento avanzado diseñado y fabricado íntegramente en España, que también puede configurarse para misiones de ataque ligero. Es el avión que utilizan los pilotos del Ejército del Aire antes de pasar a los cazas de primera línea y es el utilizado por la Patrulla Águila, el equipo de acrobacia aérea del Ejército del Aire, que actúa en los principales festivales aéreos nacionales e internacionales.",
        specs: [
            ["Velocidad Máx.", "769 km/h"],
            ["Alcance", "3.706 km"],
            ["Techo de servicio", "12.800 m"],
            ["Envergadura", "10,60 m"],
            ["Longitud", "12,50 m"],
            ["Motor", "1× Garrett TFE731-5-1J"],
            ["Empuje", "19,13 kN"],
            ["Carga de armas", "1.000 kg (en configuración de ataque)"],
            ["Tripulación", "2 (instructor + alumno)"]
        ],
        spain: "Patrulla Águila (7 aviones) + 43 unidades de entrenamiento — San Javier, Morón",
        unidades: "50",
        armament: "Cañón DEFA 30mm (opcional) · Cohetes no guiados · Bombas de práctica · Pods de misiles aire-tierra (misión de ataque ligero)",
        gallery: [
            "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 9,
        name: "P-3 Orion",
        designation: "P.3",
        type: "patrulla",
        role: "Patrulla Marítima / ASW",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=450&fit=crop",
        general: "El Lockheed P-3 Orion es el avión de patrulla marítima y guerra antisubmarina del Ejército del Aire. Equipado con sofisticados sensores incluyendo radar de vigilancia marítima, detector de anomalías magnéticas (MAD), sistema de sonoboyas y cámaras FLIR, el P-3 garantiza el control del espacio marítimo español en el Atlántico y el Mediterráneo. Es fundamental para la detección de submarinos y en misiones de vigilancia de tráfico marítimo y narcotráfico.",
        specs: [
            ["Velocidad de patrulla", "380 km/h"],
            ["Autonomía de vuelo", "+17 horas"],
            ["Alcance en ferry", "8.945 km"],
            ["Techo de servicio", "8.625 m"],
            ["Envergadura", "30,37 m"],
            ["Longitud", "35,61 m"],
            ["Motores", "4× Allison T56-A-14"],
            ["Carga de armas/sensores", "9.000 kg"],
            ["Tripulación", "11 (pilotos + operadores de misión)"]
        ],
        spain: "5 unidades — Escuadrón 221 (Morón) / Escuadrón 491 (Jerez)",
        unidades: "5",
        armament: "Torpedos MK-46 / MK-50 · Misiles AGM-84 Harpoon · Bombas de profundidad · Sonoboyas · Sistema MAD (detección magnética)",
        gallery: [
            "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 10,
        name: "Airbus CN-235 Persuader",
        designation: "D.4",
        type: "patrulla",
        role: "Vigilancia Marítima / SAR",
        image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=450&fit=crop",
        general: "El CASA/IPTN CN-235 en su variante de Patrulla Marítima y SAR (Búsqueda y Rescate) es el avión ligero de vigilancia costera del Ejército del Aire. Equipado con radar Persuader, sensores electro-ópticos y sistemas de comunicaciones avanzados, patrulla las costas españolas en el Mediterráneo, el Atlántico y el estrecho de Gibraltar, coordinando operaciones de rescate marítimo y vigilancia de fronteras en cooperación con el SIVE (Sistema Integral de Vigilancia Exterior).",
        specs: [
            ["Velocidad de patrulla", "240 km/h"],
            ["Autonomía", "10 horas"],
            ["Alcance", "4.000 km"],
            ["Techo de servicio", "7.620 m"],
            ["Envergadura", "25,81 m"],
            ["Longitud", "21,40 m"],
            ["Motores", "2× GE CT7-9C3"],
            ["Sensores", "Radar Persuader · FLIR · AIS"],
            ["Tripulación", "2 pilotos + 3 operadores de misión"]
        ],
        spain: "9 unidades — Escuadrón 803 (Gando, Gran Canaria) · Destacamento Jerez",
        unidades: "9",
        armament: "Sin armamento ofensivo · Radar de búsqueda Persuader · Cámara térmica FLIR · Sistema AIS de seguimiento de buques · Sonoboyas",
        gallery: [
            "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop"
        ]
    },
    {
        id: 11,
        name: "Sikorsky S-76",
        designation: "HU.18",
        type: "helicóptero",
        role: "SAR / Transporte Ligero",
        image: "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=450&fit=crop",
        general: "El Sikorsky S-76 en su variante militar (HU.18) es el helicóptero ligero de búsqueda y rescate del Ejército del Aire. Utilizado principalmente en misiones SAR (Search and Rescue) sobre el mar, coordina operaciones de salvamento con Salvamento Marítimo y la Guardia Civil. Su papel en el rescate de náufragos y en emergencias médicas lo convierte en un activo de servicio público indispensable, especialmente en las costas mediterráneas y atlánticas de España.",
        specs: [
            ["Velocidad Máx.", "287 km/h"],
            ["Alcance", "748 km"],
            ["Techo de servicio", "4.115 m"],
            ["Motores", "2× Turbomeca Arriel 2S1"],
            ["Capacidad", "12 pasajeros / 4 camillas"],
            ["Longitud total", "16,0 m"],
            ["Carga en eslinga", "1.360 kg"],
            ["Autonomía", "3,5 horas"],
            ["Tripulación", "2 pilotos + 2 rescatadores"]
        ],
        spain: "8 unidades — Escuadrón 803 · Base Aérea de Palma de Mallorca",
        unidades: "8",
        armament: "Sin armamento · Grúa de rescate · Luces de búsqueda · FLIR nocturno · Equipo médico de emergencia",
        gallery: [
            "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=500&fit=crop"
        ]
    }
];

let currentFilter = 'all';
let currentActivePlane = null;
let currentGalleryIndex = 0;

// ============================================================
// RENDERIZADO DE LA FLOTA
// ============================================================
function renderFleetGrid(filteredData) {
    const grid = document.getElementById('fleet-grid');
    grid.innerHTML = '';
    document.getElementById('results-count').innerText = `Mostrando ${filteredData.length} aeronave(s)`;

    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-20 text-center">
                <div class="text-5xl mb-4">🔍</div>
                <p class="text-zinc-500 font-mono text-sm">No se encontraron aeronaves con esos criterios.</p>
            </div>`;
        return;
    }

    const typeColors = {
        'caza': 'bg-red-900/60 text-red-300 border-red-800',
        'transporte': 'bg-blue-900/60 text-blue-300 border-blue-800',
        'helicóptero': 'bg-green-900/60 text-green-300 border-green-800',
        'patrulla': 'bg-purple-900/60 text-purple-300 border-purple-800',
        'entrenamiento': 'bg-amber-900/60 text-amber-300 border-amber-800'
    };

    filteredData.forEach((plane, index) => {
        const card = document.createElement('div');
        card.className = "aircraft-card bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-red-600 flex flex-col";
        card.style.animationDelay = `${index * 60}ms`;
        card.innerHTML = `
            <div class="relative h-44 bg-zinc-800 overflow-hidden">
                <img
                    src="${plane.image}"
                    alt="${plane.name}"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center text-4xl\'>✈️</div>'"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                <div class="absolute top-3 right-3">
                    <span class="font-mono text-xs px-2 py-1 rounded-lg bg-black/60 text-zinc-300 border border-zinc-700">${plane.designation}</span>
                </div>
                <div class="absolute bottom-3 left-3">
                    <span class="text-xs px-2 py-1 rounded-lg border font-bold tracking-widest ${typeColors[plane.type] || 'bg-zinc-800 text-zinc-400 border-zinc-700'}">
                        ${plane.type.toUpperCase()}
                    </span>
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-lg font-black leading-tight tracking-tight mb-1">${plane.name}</h3>
                    <p class="text-zinc-500 text-xs leading-relaxed line-clamp-2">${plane.role}</p>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                        <i class="fas fa-fighter-jet text-red-600 text-xs"></i>
                        ${plane.unidades} unidades
                    </div>
                    <div class="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                        <i class="fas fa-arrow-right text-xs text-zinc-400"></i>
                    </div>
                </div>
            </div>
        `;
        card.onclick = () => showDetailedModal(plane.id);
        grid.appendChild(card);
    });
}

// ============================================================
// FILTROS Y BÚSQUEDA
// ============================================================
function filterFleet() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    let filtered = aircraftData;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.type === currentFilter);
    }

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.designation.toLowerCase().includes(searchTerm) ||
            p.role.toLowerCase().includes(searchTerm)
        );
    }

    renderFleetGrid(filtered);
}

function filterByType(type, btnElement) {
    currentFilter = type;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    filterFleet();
}

// ============================================================
// MODAL
// ============================================================
function showDetailedModal(id) {
    currentActivePlane = aircraftData.find(p => p.id === id);
    if (!currentActivePlane) return;

    document.getElementById('modal-title').innerText = currentActivePlane.name;
    document.getElementById('modal-subtitle').innerText = `${currentActivePlane.designation}  ·  ${currentActivePlane.role}`;

    const modal = document.getElementById('aircraft-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    switchTab(0);
}function closeModal() {
    const modal = document.getElementById('aircraft-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    currentActivePlane = null;
    currentGalleryIndex = 0;
}

function closeModalOnOutsideClick(event) {
    if (event.target.id === 'aircraft-modal') closeModal();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.getElementById('aircraft-modal').classList.contains('hidden')) {
        closeModal();
    }
});

// ============================================================
// TABS DEL MODAL
// ============================================================
function switchTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach((tab, index) => {
        if (index === tabIndex) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const content = document.getElementById('modal-content');
    if (!currentActivePlane) return;

    switch (tabIndex) {
        case 0: // General
            content.innerHTML = `
                <div class="relative rounded-xl overflow-hidden mb-6 h-56">
                    <img src="${currentActivePlane.image}" alt="${currentActivePlane.name}"
                        class="w-full h-full object-cover"
                        onerror="this.onerror=null;this.src=''"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
                </div>
                <div class="flex items-center gap-2 mb-4">
                    <span class="font-mono text-xs bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-lg text-zinc-400">${currentActivePlane.designation}</span>
                    <span class="font-mono text-xs bg-red-900/40 border border-red-800 px-3 py-1 rounded-lg text-red-400">${currentActivePlane.type.toUpperCase()}</span>
                </div>
                <h3 class="text-xl font-black tracking-tight mb-1">${currentActivePlane.name}</h3>
                <p class="text-red-500 text-sm font-mono mb-4">${currentActivePlane.role}</p>
                <p class="text-zinc-300 leading-relaxed text-sm">${currentActivePlane.general}</p>
            `;
            break;

        case 1: // Especificaciones
            let specsHtml = `
                <h4 class="text-xs font-mono text-zinc-500 tracking-widest mb-4">DATOS TÉCNICOS</h4>
                <div class="divide-y divide-zinc-800 mb-8">
            `;
            currentActivePlane.specs.forEach(spec => {
                specsHtml += `
                    <div class="flex justify-between items-center py-3">
                        <span class="text-zinc-500 text-sm">${spec[0]}</span>
                        <span class="font-bold text-sm text-right ml-4">${spec[1]}</span>
                    </div>`;
            });
            specsHtml += `</div>`;
            specsHtml += `
                <h4 class="text-xs font-mono text-zinc-500 tracking-widest mb-3">ARMAMENTO Y SISTEMAS</h4>
                <div class="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                    <p class="font-mono text-sm text-zinc-300 leading-relaxed">${currentActivePlane.armament}</p>
                </div>`;
            content.innerHTML = specsHtml;
            break;

        case 2: // En España
            const numUnidades = currentActivePlane.unidades;
            const basesText = currentActivePlane.spain;
            content.innerHTML = `
                <div class="text-center py-6 mb-8">
                    <div class="text-8xl font-black text-white mb-2 leading-none">${numUnidades}</div>
                    <div class="text-red-500 font-mono text-xs tracking-widest uppercase">Unidades Operativas</div>
                </div>
                <div class="bg-zinc-950 rounded-xl p-5 border border-zinc-800 mb-5">
                    <div class="text-xs font-mono text-zinc-500 tracking-widest mb-3"><i class="fas fa-map-marker-alt text-red-500 mr-2"></i>BASES Y DESPLIEGUE</div>
                    <p class="text-sm text-zinc-300 leading-relaxed">${basesText}</p>
                </div>
                <div class="bg-red-950/20 rounded-xl p-5 border border-red-900/40">
                    <div class="text-xs font-mono text-red-500 tracking-widest mb-2"><i class="fas fa-info-circle mr-2"></i>ROL EN EL EAE</div>
                    <p class="text-sm text-zinc-400 leading-relaxed">${currentActivePlane.role} — ${currentActivePlane.general.substring(0, 150)}...</p>
                </div>
            `;
            break;

        case 3: // Galería
            currentGalleryIndex = 0;
            renderGallery();
            break;
    }
}

function renderGallery() {
    const gallery = currentActivePlane.gallery;
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="relative rounded-xl overflow-hidden mb-4" style="height: 300px;">
            <img
                id="gallery-main-img"
                src="${gallery[currentGalleryIndex]}"
                alt="Galería ${currentGalleryIndex + 1}"
                class="w-full h-full object-cover transition-opacity duration-300"
                onerror="this.onerror=null;this.src=''"
            >
            <div class="absolute inset-0 flex items-center justify-between px-4">
                <button onclick="changeGalleryImage(-1)"
                    class="w-10 h-10 rounded-xl bg-black/60 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                    <i class="fas fa-chevron-left text-sm"></i>
                </button>
                <button onclick="changeGalleryImage(1)"
                    class="w-10 h-10 rounded-xl bg-black/60 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                    <i class="fas fa-chevron-right text-sm"></i>
                </button>
            </div>
            <div class="absolute bottom-3 right-3 bg-black/60 text-xs font-mono px-2 py-1 rounded-lg">
                ${currentGalleryIndex + 1} / ${gallery.length}
            </div>
        </div>
        <div class="flex gap-3" id="gallery-thumbs">
            ${gallery.map((img, i) => `
                <div onclick="setGalleryImage(${i})"
                    class="flex-1 h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${i === currentGalleryIndex ? 'border-red-600' : 'border-zinc-800 opacity-60 hover:opacity-100'}">
                    <img src="${img}" alt="Miniatura ${i + 1}" class="w-full h-full object-cover">
                </div>
            `).join('')}
        </div>
    `;
}

function changeGalleryImage(direction) {
    const gallery = currentActivePlane.gallery;
    currentGalleryIndex = (currentGalleryIndex + direction + gallery.length) % gallery.length;
    renderGallery();
}

function setGalleryImage(index) {
    currentGalleryIndex = index;
    renderGallery();
}

// ============================================================
// NAVEGACIÓN Y MENÚ
// ============================================================
function smoothScrollTo(id, event) {
    if (event) event.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });

    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) toggleMobileMenu();
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Formulario de contacto
function handleFormSubmit() {
    const successEl = document.getElementById('form-success');
    successEl.classList.remove('hidden');
    setTimeout(() => successEl.classList.add('hidden'), 5000);
}

// Inicializar al cargar
window.onload = () => {
    renderFleetGrid(aircraftData);
};
