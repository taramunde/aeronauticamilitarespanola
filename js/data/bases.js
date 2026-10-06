// Bases aéreas, aeronavales y de helicópteros

const BASES = [
{n:"Torrejón",lat:40.497,lon:-3.446,u:"Ala 12 (EF-18), Grupo 43 (anfibios), Grupo 45 (transporte de autoridades), Centro de Operaciones Aéreas Combinadas de la OTAN",d:"Construida con los Pactos de 1953 como base estadounidense. Fue sede de los F-104G y F-4C y hoy de los EF-18 y de los apagafuegos."},
{n:"Getafe",lat:40.294,lon:-3.724,u:"Ala 35 (C-295 y CN-235), plantas de Airbus",d:"Aeródromo histórico desde 1911, donde voló el autogiro en 1923 y donde CASA construyó el Breguet XIX. Hoy monta el Eurofighter."},
{n:"Cuatro Vientos",lat:40.37,lon:-3.785,u:"Escuadrón SAR 803, Museo de Aeronáutica y Astronáutica",d:"Cuna de la aviación militar española en 1911. Alberga el museo con más de 200 aeronaves históricas."},
{n:"Morón",lat:37.175,lon:-5.616,u:"Ala 11 (Eurofighter), Ala 21 (histórica, SF-5)",d:"Base de uso conjunto con EE. UU. Recibió los primeros Eurofighter españoles en 2003."},
{n:"Zaragoza",lat:41.666,lon:-1.042,u:"Ala 15 (EF-18), Ala 31 (A400M)",d:"Una de las grandes bases de los Pactos de 1953. Su larga pista fue alternativa de emergencia del transbordador espacial."},
{n:"Albacete (Los Llanos)",lat:38.948,lon:-1.864,u:"Ala 14 (Eurofighter), Tactical Leadership Programme de la OTAN",d:"Fue sede de los Mirage F1 entre 1975 y 2013. Hoy acoge el principal programa europeo de liderazgo táctico."},
{n:"Talavera la Real",lat:38.891,lon:-6.821,u:"Ala 23 (SF-5M), escuela de caza y ataque",d:"Durante décadas, la Escuela de Reactores con T-33. Aquí se forman los pilotos de caza."},
{n:"San Javier",lat:37.775,lon:-0.812,u:"Academia General del Aire (PC-21, C-101), Patrulla Águila",d:"Desde 1945 forma a los oficiales del Ejército del Aire y del Espacio."},
{n:"Matacán (Salamanca)",lat:40.952,lon:-5.502,u:"Grupo de Escuelas de Matacán",d:"Formación de pilotos de transporte y multimotor."},
{n:"Son San Juan (Palma)",lat:39.552,lon:2.739,u:"Ala 49, Escuadrón SAR 801",d:"Vigilancia y salvamento en el Mediterráneo occidental."},
{n:"Manises (Valencia)",lat:39.49,lon:-0.48,u:"Antigua sede del Ala 11 (F-86, Mirage III, Mirage F1)",d:"Base de caza histórica del Levante hasta que el Ala 11 se trasladó a Morón."},
{n:"Gando (Gran Canaria)",lat:27.932,lon:-15.387,u:"Ala 46 (EF-18, en transición a Eurofighter Halcón), Escuadrón SAR 802",d:"Defiende el espacio aéreo de Canarias. Su SAR es de los más activos de Europa.",can:1},
{n:"Rota",lat:36.645,lon:-6.349,u:"Flotilla de Aeronaves de la Armada: 9ª (Harrier), 10ª (SH-60) y otras escuadrillas",d:"Base naval compartida con EE. UU. y hogar de toda la aviación naval española."},
{n:"Colmenar Viejo",lat:40.69,lon:-3.76,u:"Mando de las FAMET, BHELTRA V (Chinook)",d:"Cuartel general de la aviación del Ejército de Tierra."},
{n:"Almagro",lat:38.95,lon:-3.72,u:"BHELA I (Tigre)",d:"Batallón de helicópteros de ataque."},
{n:"El Copero (Sevilla)",lat:37.32,lon:-5.98,u:"BHELMA II",d:"Helicópteros de maniobra en Andalucía."},
{n:"Bétera (Valencia)",lat:39.59,lon:-0.46,u:"BHELMA III",d:"Helicópteros de maniobra del Levante."},
{n:"Agoncillo (Logroño)",lat:42.45,lon:-2.32,u:"BHELMA IV",d:"Helicópteros de maniobra del norte peninsular."},
{n:"Los Rodeos (Tenerife)",lat:28.48,lon:-16.34,u:"BHELMA VI",d:"Helicópteros del Ejército de Tierra en Canarias.",can:1},
{n:"Alcantarilla (Murcia)",lat:37.95,lon:-1.23,u:"Escuela Militar de Paracaidismo, EZAPAC",d:"Cuna del paracaidismo militar español."},
{n:"Villanubla (Valladolid)",lat:41.706,lon:-4.852,u:"Ala 37",d:"Base de transporte y apoyo del norte."},
{n:"Armilla (Granada)",lat:37.133,lon:-3.636,u:"Ala 78, escuela de helicópteros",d:"Forma a los pilotos de helicóptero del Ejército del Aire y del Espacio."}
];
