// data.js - Base de datos didáctica con fotografías reales (Wikimedia)
const initialAircrafts = [
    {
        id: "euro",
        name: "Eurofighter Typhoon",
        type: "Caza",
        country: "España / Alemania / UK / Italia",
        role: "Supremacía aérea, ataque a tierra",
        year: 2003,
        status: "Activo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Eurofighter_Typhoon_Seville_2018_%28cropped%29.jpg/800px-Eurofighter_Typhoon_Seville_2018_%28cropped%29.jpg",
        description: "El Eurofighter Typhoon es el caza de última generación del Ejército del Aire español. Diseñado por un consorcio europeo, destaca por su maniobrabilidad extrema, radar AESA y capacidad polivalente. España opera 73 ejemplares en las alas 11 y 14."
    },
    {
        id: "c295",
        name: "CASA C-295",
        type: "Transporte",
        country: "España",
        role: "Transporte táctico, patrulla marítima",
        year: 2001,
        status: "Activo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/CASA_C-295_%2849896949822%29.jpg/800px-CASA_C-295_%2849896949822%29.jpg",
        description: "Avión de transporte táctico fabricado por Airbus Defence (antigua CASA). Utilizado en misiones logísticas, lanzamiento de paracaidistas y versiones de vigilancia marítima (C295 MPA)."
    },
    {
        id: "nh90",
        name: "NHIndustries NH90",
        type: "Helicóptero",
        country: "Internacional",
        role: "Transporte, ataque, SAR",
        year: 2008,
        status: "Activo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NH90_%28cropped%29.jpg/800px-NH90_%28cropped%29.jpg",
        description: "Helicóptero medio bimotor utilizado por el Ejército del Aire español para misiones de búsqueda y rescate (SAR) y transporte táctico."
    },
    {
        id: "c101",
        name: "CASA C-101 Aviojet",
        type: "Entrenamiento",
        country: "España",
        role: "Entrenamiento avanzado",
        year: 1980,
        status: "Activo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/CASA_C-101_Aviojet_%2821623691604%29.jpg/800px-CASA_C-101_Aviojet_%2821623691604%29.jpg",
        description: "Avión de entrenamiento que también es la montura de la patrulla acrobática 'Patrulla Águila'. Ha formado a decenas de pilotos españoles."
    },
    {
        id: "f18",
        name: "EF-18 Hornet",
        type: "Caza",
        country: "EE.UU",
        role: "Caza polivalente",
        year: 1986,
        status: "En modernización",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/EF-18_Hornet_-_Ej%C3%A9rcito_del_Aire.jpg/800px-EF-18_Hornet_-_Ej%C3%A9rcito_del_Aire.jpg",
        description: "El caza Hornet ha sido la espina dorsal de la defensa aérea española durante décadas. Actualmente se modernizan 20 ejemplares al estándar MLU."
    },
    {
        id: "a400m",
        name: "Airbus A400M Atlas",
        type: "Transporte",
        country: "Internacional",
        role: "Transporte estratégico",
        year: 2016,
        status: "Activo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Spanish_Air_Force_A400M_%28cropped%29.jpg/800px-Spanish_Air_Force_A400M_%28cropped%29.jpg",
        description: "Transporte pesado turbohélice capaz de despegar desde pistas cortas. España tiene 14 unidades y las utiliza en misiones internacionales."
    },
    {
        id: "tiger",
        name: "Eurocopter EC665 Tiger",
        type: "Helicóptero",
        country: "Francia/Alemania",
        role: "Ataque y apoyo",
        year: 2007,
        status: "Activo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tiger_helicopter.jpg/800px-Tiger_helicopter.jpg",
        description: "Helicóptero de ataque del Ejército de Tierra español, pero opera en estrecha colaboración con el Ejército del Aire en misiones de apoyo."
    },
    {
        id: "sh60",
        name: "Sikorsky SH-60 Seahawk",
        type: "Helicóptero",
        country: "EE.UU",
        role: "Antisubmarino, SAR",
        year: 1990,
        status: "Activo (Armada)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/SH-60B_Seahawk_%28cropped%29.jpg/800px-SH-60B_Seahawk_%28cropped%29.jpg",
        description: "Utilizado por la Armada Española para misiones antisubmarinas y de búsqueda, aunque lo integramos por su importancia en la defensa nacional."
    },
    {
        id: "c212",
        name: "CASA C-212 Aviocar",
        type: "Transporte",
        country: "España",
        role: "Transporte ligero",
        year: 1974,
        status: "Retirado parcialmente",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/CASA_C-212-200_Aviocar.jpg/800px-CASA_C-212-200_Aviocar.jpg",
        description: "Histórico avión STOL diseñado en España. Aún vuela en algunas unidades de transporte y versiones de vigilancia."
    }
];
