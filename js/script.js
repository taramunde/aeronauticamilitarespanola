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
        id: 7, name: 'CASA C-101 Aviojet', designation: 'E.25',
        type: 'entrenamiento', role: 'Entrenamiento Avanzado / Ataque Ligero',
        image: 'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=800&h=450&fit=crop&q=80',
        general: 'El C-101 Aviojet es un avión de entrenamiento avanzado de fabricación española utilizado antes de pasar a los cazas de primera línea. Es el avión de la Patrulla Águila, el equipo de acrobacia aérea del Ejército del Aire, que actúa en los principales festivales aéreos nacionales e internacionales.',
        specs: [
            ['Velocidad Máxima', '769 km/h'],
            ['Alcance', '3.706 km'],
            ['Techo de servicio', '12.800 m'],
            ['Envergadura', '10,60 m'],
            ['Longitud', '12,50 m'],
            ['Motor', '1× Garrett TFE731-5-1J'],
            ['Empuje', '19,13 kN'],
            ['Carga de armas', '1.000 kg (modo ataque)'],
            ['Tripulación', '2 (instructor + alumno)']
        ],
        unidades: '50',
        bases: 'Patrulla Águila (7 aviones) + Academia General del Aire (San Javier) · Morón',
        armament: 'Cañón DEFA 30 mm (opcional) · Cohetes no guiados · Bombas de práctica',
        gallery: [
            'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=540&fit=crop&q=80',
            'https://images.unsplash.com/photo-1559311648-d1bc1a05c386?w=900&h=540&fit=crop&q=80'
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
        const offset = document.getElementById('navbar').offsetHeight;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
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
   CONTACT FORM
   ══════════════════════════════════════════════════════ */
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

    // Re-observe any dynamically needed reveals
    document.querySelectorAll('.reveal, .reveal-fade').forEach(el => io.observe(el));
});

/* ══════════════════════════════════════════════════════
   ACTIVE NAV LINK — resalta el enlace de la sección visible
   ══════════════════════════════════════════════════════ */
(function () {
    const sections = ['inicio','cifras','misiones','flota','historia','contacto'];
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActive() {
        let current = 'inicio';
        const offset = document.getElementById('navbar').offsetHeight + 40;

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
