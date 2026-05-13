// data.js - Flota real del Ejército del Aire y del Espacio español
const initialAircrafts = [
    { id: "a1", name: "Eurofighter Typhoon", type: "Caza", country: "España/Alemania/UK/Italia", role: "Supremacía aérea y polivalente", year: 2003, status: "Activo", icon: "fa-fighter-jet" },
    { id: "a2", name: "McDonnell Douglas EF-18 Hornet", type: "Caza", country: "EE.UU", role: "Caza polivalente", year: 1986, status: "Activo (modernización)", icon: "fa-fighter-jet" },
    { id: "a3", name: "CASA C-295", type: "Transporte", country: "España", role: "Transporte táctico y patrulla", year: 2001, status: "Activo", icon: "fa-plane" },
    { id: "a4", name: "Airbus A400M Atlas", type: "Transporte", country: "España / Internacional", role: "Transporte estratégico", year: 2016, status: "Activo", icon: "fa-plane" },
    { id: "a5", name: "NHIndustries NH90", type: "Helicóptero", country: "Internacional", role: "Transporte y ataque", year: 2008, status: "Activo", icon: "fa-helicopter" },
    { id: "a6", name: "Eurocopter EC665 Tiger", type: "Helicóptero", country: "Francia/Alemania", role: "Ataque y apoyo", year: 2007, status: "Activo", icon: "fa-helicopter" },
    { id: "a7", name: "CASA C-101 Aviojet", type: "Entrenamiento", country: "España", role: "Entrenamiento avanzado", year: 1980, status: "Activo (Patrulla Águila)", icon: "fa-graduation-cap" },
    { id: "a8", name: "Northrop F-5M", type: "Entrenamiento", country: "EE.UU", role: "Adiestramiento táctico", year: 1970, status: "Semi-retirado", icon: "fa-graduation-cap" },
    { id: "a9", name: "Boeing 707 (Retirado)", type: "Reabastecimiento", country: "EE.UU", role: "Reabastecimiento en vuelo", year: 1987, status: "Retirado (2016)", icon: "fa-oil-can" },
    { id: "a10", name: "Airbus C295 MPA", type: "Patrulla marítima", country: "España", role: "Vigilancia marítima", year: 2010, status: "Activo", icon: "fa-water" },
    { id: "a11", name: "Sikorsky SH-60 Seahawk", type: "Helicóptero", country: "EE.UU", role: "Antisubmarino / SAR", year: 1990, status: "Activo (Armada)", icon: "fa-helicopter" },
    { id: "a12", name: "Gulfstream V (CASA)", type: "Transporte VIP", country: "EE.UU", role: "Transporte de autoridades", year: 2005, status: "Activo", icon: "fa-plane" },
    { id: "a13", name: "EADS CASA C-212 Aviocar", type: "Transporte", country: "España", role: "Transporte ligero", year: 1974, status: "Retirado parcialmente", icon: "fa-plane" },
    { id: "a14", name: "Boeing CH-47 Chinook", type: "Helicóptero", country: "EE.UU", role: "Transporte pesado", year: 1973, status: "Activo (modernizado)", icon: "fa-helicopter" },
    { id: "a15", name: "Airbus A330 MRTT", type: "Reabastecimiento", country: "Internacional", role: "Reabastecimiento y transporte", year: 2021, status: "Activo", icon: "fa-oil-can" },
    { id: "a16", name: "IAI Searcher", type: "Vigilancia", country: "Israel", role: "UAV de vigilancia", year: 2000, status: "Activo", icon: "fa-eye" },
    { id: "a17", name: "Dassault Falcon 900", type: "Transporte VIP", country: "Francia", role: "Transporte de autoridades", year: 1990, status: "Activo", icon: "fa-plane" },
    { id: "a18", name: "Pilatus PC-21", type: "Entrenamiento", country: "Suiza", role: "Entrenamiento básico", year: 2020, status: "Activo", icon: "fa-graduation-cap" }
];
