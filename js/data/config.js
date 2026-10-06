// Configuración: épocas, ramas y tipos de aeronave

const ERAS = {
  pioneros:{label:"Pioneros y Marruecos (1911–1935)"},
  guerra:{label:"Guerra Civil (1936–1939)"},
  posguerra:{label:"Posguerra (1939–1957)"},
  reactor:{label:"Era del reactor (1955–1985)"},
  actual:{label:"OTAN y siglo XXI (1986–hoy)"}
};
const BRANCHES = {
  ejercito:{label:"Aeronáutica Militar / Ejército del Aire",short:"Ejército del Aire",color:"#2F5D73"},
  armada:{label:"Armada",short:"Armada",color:"#1F3F8F"},
  republicana:{label:"Fuerzas Aéreas de la República",short:"República",color:"#7A3E8E"},
  nacional:{label:"Aviación Nacional",short:"Nacional",color:"#B8860B"},
  tierra:{label:"Ejército de Tierra (FAMET)",short:"FAMET",color:"#4D5A38"}
};
const TYPES = {caza:"Caza",bombardeo:"Bombardeo",reconocimiento:"Reconocimiento",entrenamiento:"Entrenamiento",hidroavion:"Hidroavión / anfibio",transporte:"Transporte",ataque:"Ataque",cisterna:"Cisterna",helicoptero:"Helicóptero"};
