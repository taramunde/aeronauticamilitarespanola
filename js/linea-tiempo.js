function mostrarLineaTiempo() {
  const eventos = [
    { año: 1939, evento: "Creación del Ejército del Aire" },
    { año: 1955, evento: "Ingreso en la OTAN" },
    { año: 1988, evento: "Adquisición de los F/A-18 Hornet" },
    { año: 2003, evento: "Misiones en Afganistán" },
    { año: 2015, evento: "Incorporación del A400M Atlas" },
    { año: 2023, evento: "Modernización del Eurofighter" }
  ];
  const lista = document.getElementById("timeline");
  lista.innerHTML = "";
  eventos.forEach(e => {
    const item = document.createElement("li");
    item.textContent = ${e.año}: ${e.evento};
    lista.appendChild(item);
  });
}
