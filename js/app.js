/**
 * Lógica principal de la aplicación
 */

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function createAircraftCard(aircraft) {
  const badgeText = {
    active: "Operativo",
    order: "En expansión / Pedido",
    retire: "En retirada"
  }[aircraft.badge] || aircraft.status;

  return `
    <div class="card" data-type="\( {aircraft.type}" data-id=" \){aircraft.id}">
      <img class="card-img" 
           src="${aircraft.image}" 
           alt="${aircraft.name}"
           onerror="this.src='https://via.placeholder.com/400x200/1a2436/8b9bb4?text=${encodeURIComponent(aircraft.name)}'">
      <div class="card-body">
        <div class="role">${aircraft.role}</div>
        <h3>${aircraft.name}</h3>
        <div class="fleet">${aircraft.fleet}</div>
        <div class="status">${aircraft.status}</div>
        <span class="badge badge-\( {aircraft.badge}"> \){badgeText}</span>
      </div>
    </div>
  `;
}

function renderFleet(filter = 'all') {
  const grid = document.getElementById('fleet-grid');
  if (!grid) {
    console.error('No se encontró el elemento #fleet-grid');
    return;
  }

  if (typeof aircraftData === 'undefined') {
    console.error('aircraftData no está definido. Revisa que js/data/aircraft.js se carga correctamente.');
    grid.innerHTML = '<p style="color:#c8102e;padding:2rem;">Error: No se han podido cargar los datos de las aeronaves.</p>';
    return;
  }

  const filtered = filter === 'all'
    ? aircraftData
    : aircraftData.filter(a => a.type === filter);

  grid.innerHTML = filtered.map(createAircraftCard).join('');

  // Añadir eventos de clic
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.id);
    });
  });
}

function openModal(id) {
  const aircraft = aircraftData.find(a => a.id === id);
  if (!aircraft) return;

  document.getElementById('modal-name').textContent = aircraft.name;
  document.getElementById('modal-role').textContent = aircraft.role;
  document.getElementById('modal-fleet').textContent = aircraft.fleet;
  document.getElementById('modal-order').textContent = aircraft.onOrder || '—';
  document.getElementById('modal-unit').textContent = aircraft.unit;
  document.getElementById('modal-description').textContent = aircraft.description;

  const img = document.getElementById('modal-img');
  img.src = aircraft.image;
  img.alt = aircraft.name;
  img.onerror = function () {
    this.src = `https://via.placeholder.com/600x400/1a2436/8b9bb4?text=${encodeURIComponent(aircraft.name)}`;
  };

  const specsContainer = document.getElementById('modal-specs');
  specsContainer.innerHTML = Object.entries(aircraft.specs || {})
    .map(([key, value]) => `<div><strong>\( {key}</strong> \){value}</div>`)
    .join('');

  document.getElementById('aircraft-modal').classList.add('show');
}

function closeModal() {
  document.getElementById('aircraft-modal').classList.remove('show');
}

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  if (!obj) return;

  const range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    obj.textContent = Math.floor(progress * range + start);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Datos estáticos
const timelineData = [
  { year: "1792", text: "Primeras experiencias militares con globos aerostáticos en Segovia ante Carlos IV." },
  { year: "1911", text: "Llegada de los primeros aviones Henry Farman a <strong>Cuatro Vientos</strong>. Nacimiento de la aviación militar española." },
  { year: "1913", text: "Creación del <strong>Servicio de Aeronáutica Militar</strong>. Primer bombardeo aéreo organizado de la historia (Marruecos)." },
  { year: "1926", text: "<strong>Plus Ultra</strong>: Ramón Franco realiza el primer gran raid transatlántico a Buenos Aires." },
  { year: "1939", text: "7 de octubre: se crea oficialmente el <strong>Ejército del Aire</strong>." },
  { year: "1953-1992", text: "Acuerdos hispano-estadounidenses. Modernización con F-86, F-104, F-4 y F-18." },
  { year: "2003-2026", text: "Eurofighter, A400M, A330 MRTT, programas Halcón y Hürjet." },
  { year: "2022", text: "El Ejército del Aire pasa a denominarse <strong>Ejército del Aire y del Espacio</strong>." }
];

const basesData = [
  { name: "Torrejón de Ardoz", location: "Madrid · LECM", desc: "Ala 12 (EF-18) · Ala 45 (A330 MRTT) · Cuartel General MACOM" },
  { name: "Zaragoza", location: "Zaragoza · LEZG", desc: "Ala 15 (EF-18) · Ala 31 (A400M)" },
  { name: "Los Llanos", location: "Albacete · LEAB", desc: "Ala 14 (Eurofighter) · TLP" },
  { name: "Morón de la Frontera", location: "Sevilla · LEMO", desc: "Ala 11 (Eurofighter) · Presencia USAF" },
  { name: "Gando", location: "Gran Canaria · GCLP", desc: "Ala 46 · Defensa del archipiélago" },
  { name: "San Javier", location: "Murcia · LELC", desc: "Academia General del Aire · PC-21" },
  { name: "Talavera la Real", location: "Badajoz · LETR", desc: "Ala 23 · Escuela de Caza y Ataque" },
  { name: "Armilla", location: "Granada · LEGA", desc: "Ala 78 · Helicópteros · Patrulla Aspa" }
];

const unitsData = [
  { unit: "Ala 11", base: "Morón", material: "Eurofighter Typhoon", mission: "Defensa aérea / Multirrol" },
  { unit: "Ala 12", base: "Torrejón", material: "EF-18 Hornet", mission: "Multirrol / Defensa aérea" },
  { unit: "Ala 14", base: "Los Llanos", material: "Eurofighter Typhoon", mission: "Caza / TLP" },
  { unit: "Ala 15", base: "Zaragoza", material: "EF-18 Hornet", mission: "Caza y ataque" },
  { unit: "Ala 46", base: "Gando", material: "EF-18 → Eurofighter", mission: "Defensa Canarias" },
  { unit: "Ala 31", base: "Zaragoza", material: "A400M", mission: "Transporte estratégico" },
  { unit: "Ala 45", base: "Torrejón", material: "A330 MRTT", mission: "Reabastecimiento / Transporte" },
  { unit: "Ala 23", base: "Talavera", material: "F-5M", mission: "Entrenamiento de combate" }
];

const newsData = [
  { title: "3er A330 MRTT entregado", date: "20 de octubre de 2026", text: "Airbus entrega en Getafe el tercer y último A330 MRTT. Flota de cisternas completada." },
  { title: "A400M: dos más en 2026", date: "Octubre-diciembre 2026", text: "Ala 31 recibirá dos nuevos A400M (14 → 16). Objetivo final: 20 unidades." },
  { title: "Programa Halcón", date: "45 Eurofighters Tranche 4", text: "20 + 25 aviones nuevos para reemplazar Hornets, especialmente en Canarias." },
  { title: "Hürjet", date: "30 (+15 posibles)", text: "Entrenador turco. Entregas desde 2028. Posible ampliación a 45 unidades." },
  { title: "Ejercicio SDT26", date: "19-30 octubre 2026", text: "Sirio-Dragón-Tormenta 26: el mayor ejercicio del año con todas las alas de caza." },
  { title: "MRTT+ y VIP", date: "2028+", text: "Negociación de 3 A330-800 MRTT+ (2 en configuración VIP) junto con Polonia." }
];

function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  container.innerHTML = timelineData.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <p>${item.text}</p>
    </div>
  `).join('');
}

function renderBases() {
  const container = document.getElementById('bases-grid');
  if (!container) return;
  container.innerHTML = basesData.map(b => `
    <div class="card base-card">
      <h3>${b.name}</h3>
      <div class="base-location">${b.location}</div>
      <p>${b.desc}</p>
    </div>
  `).join('');
}

function renderUnits() {
  const tbody = document.getElementById('units-table');
  if (!tbody) return;
  tbody.innerHTML = unitsData.map(u => `
    <tr>
      <td><strong>${u.unit}</strong></td>
      <td>${u.base}</td>
      <td>${u.material}</td>
      <td>${u.mission}</td>
    </tr>
  `).join('');
}

function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;
  container.innerHTML = newsData.map(n => `
    <div class="card">
      <h3>${n.title}</h3>
      <p class="date">${n.date}</p>
      <p>${n.text}</p>
    </div>
  `).join('');
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación iniciada');
  console.log('aircraftData disponible:', typeof aircraftData !== 'undefined');

  // Navegación
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      scrollToSection(link.dataset.section);
    });
  });

  // Filtros
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFleet(btn.dataset.filter);
    });
  });

  // Modal
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const modal = document.getElementById('aircraft-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'aircraft-modal') closeModal();
    });
  }

  // Renderizar todo
  renderFleet('all');
  renderTimeline();
  renderBases();
  renderUnits();
  renderNews();

  // Contadores
  if (typeof aircraftData !== 'undefined') {
    const combat = aircraftData
      .filter(a => a.type === 'caza')
      .reduce((sum, a) => sum + a.fleet, 0);

    const total = aircraftData.reduce((sum, a) => sum + a.fleet, 0);

    animateValue('stat-combat', 0, combat, 1600);
    animateValue('stat-total', 0, total, 1800);
  }
});
