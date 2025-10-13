function mostrarAviones() {
  const aviones = [
    "Eurofighter Typhoon",
    "F/A-18 Hornet",
    "C-295",
    "A400M Atlas",
    "P-3 Orion"
  ];
  const lista = document.getElementById("lista-aviones");
  lista.innerHTML = "";
  aviones.forEach(avion => {
    const item = document.createElement("li");
    item.textContent = avion;
    lista.appendChild(item);
  });
}
