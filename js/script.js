const aircraftData = [
    {id:0, name:"Eurofighter Typhoon", designation:"C.16", type:"caza", image:"https://picsum.photos/id/201/1200/600",
     general:"Principal caza de superioridad aérea del Ejército del Aire, diseñado para combate ágil a gran altitud y misiones polivalentes.", specs:[["Velocidad Máx.","Mach 2.0+"],["Techo de servicio","19.812 m"]], spain:"73 unidades operativas", armament:"Misiles Meteor, IRIS-T, AIM-120 AMRAAM", gallery:["https://picsum.photos/id/201/800/500"]},
    {id:1, name:"F/A-18 Hornet", designation:"C.15", type:"caza", image:"https://picsum.photos/id/866/1200/600",
     general:"Cazabombardero polivalente bimotor, la espina dorsal histórica de las misiones de ataque a tierra y defensa aérea.", specs:[["Velocidad Máx.","Mach 1.8"], ["Alcance", "2.000 km"]], spain:"78 unidades operativas", armament:"AIM-9 Sidewinder, AIM-120 AMRAAM, Bombas guiadas", gallery:["https://picsum.photos/id/866/800/500"]},
    {id:2, name:"Airbus A400M Atlas", designation:"T.23", type:"transporte", image:"https://picsum.photos/id/1016/1200/600",
     general:"Avión de transporte militar estratégico y táctico con capacidad de operar en pistas no preparadas.", specs:[["Carga útil","37 toneladas"], ["Velocidad de crucero", "Mach 0.72"]], spain:"14 unidades operativas", armament:"Ninguno (Sistemas de contramedidas electrónicas)", gallery:["https://picsum.photos/id/1016/800/500"]},
    {id:3, name:"NHIndustries NH90", designation:"HT.29", type:"helicoptero", image:"https://picsum.photos/id/201/1200/600",
     general:"Helicóptero táctico de transporte medio de última generación, diseñado para misiones de asalto, rescate y transporte.", specs:[["Velocidad Máx.","300 km/h"], ["Capacidad", "20 soldados"]], spain:"12 unidades operativas", armament:"Ametralladoras de puerta, Pods de cohetes", gallery:["https://picsum.photos/id/201/800/500"]}
];

let currentFilter = 'all';
let currentActivePlane = null; // Para saber qué avión está en el modal

// --- RENDERIZADO DE LA FLOTA ---
function renderFleetGrid(filteredData) {
    const grid = document.getElementById('fleet-grid');
    grid.innerHTML = '';
    
    // Actualizar el nuevo contador
    document.getElementById('results-count').innerText = `Mostrando ${filteredData.length} aeronave(s)`;

    if (filteredData.length === 0) {
        grid.innerHTML = `<p class="text-zinc-500 col-span-full py-10">No se encontraron aeronaves con esos criterios.</p>`;
        return;
    }

    filteredData.forEach(plane => {
        const card = document.createElement('div');
        card.className = "aircraft-card bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-red-600 flex flex-col h-full";
        card.innerHTML = `
            <div class="h-48 bg-cover bg-center" style="background-image:url('${plane.image}')"></div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="font-mono text-red-500 text-sm mb-1">${plane.designation}</div>
                    <h3 class="text-xl font-bold leading-tight">${plane.name}</h3>
                </div>
                <div class="mt-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">${plane.type}</div>
            </div>
        `;
        card.onclick = () => showDetailedModal(plane.id);
        grid.appendChild(card);
    });
}

// --- FILTROS Y BÚSQUEDA ---
function filterFleet() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    let filtered = aircraftData;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.type === currentFilter);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.designation.toLowerCase().includes(searchTerm)
        );
    }

    renderFleetGrid(filtered);
}

function filterByType(type, btnElement) {
    currentFilter = type;
    
    // Quitar 'active' de todos y ponerlo en el clickeado
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active', 'bg-red-600', 'text-white'));
    if(btnElement) {
        btnElement.classList.add('active');
    }
    
    filterFleet();
}

// --- FUNCIONALIDAD DEL MODAL (Lo que faltaba) ---
function showDetailedModal(id) {
    currentActivePlane = aircraftData.find(p => p.id === id);
    if (!currentActivePlane) return;

    document.getElementById('modal-title').innerText = currentActivePlane.name;
    document.getElementById('modal-subtitle').innerText = currentActivePlane.designation;
    
    document.getElementById('aircraft-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Evita que el fondo haga scroll
    
    switchTab(0); // Inicia siempre en la pestaña "General"
}

function closeModal() {
    document.getElementById('aircraft-modal').classList.add('hidden');
    document.body.style.overflow = ''; // Restaura el scroll del fondo
    currentActivePlane = null;
}

// Cierre del modal al hacer clic en la zona oscura exterior
function closeModalOnOutsideClick(event) {
    if (event.target.id === 'aircraft-modal') {
        closeModal();
    }
}

// Cierre del modal con la tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.getElementById('aircraft-modal').classList.contains('hidden')) {
        closeModal();
    }
});

function switchTab(tabIndex) {
    // Estilizar los botones de las pestañas
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach((tab, index) => {
        if (index === tabIndex) {
            tab.classList.add('active', 'border-red-600', 'text-red-500');
            tab.classList.remove('border-transparent', 'text-zinc-400');
        } else {
            tab.classList.remove('active', 'border-red-600', 'text-red-500');
            tab.classList.add('border-transparent', 'text-zinc-400');
        }
    });

    // Cambiar el contenido según la pestaña
    const content = document.getElementById('modal-content');
    if (!currentActivePlane) return;

    switch(tabIndex) {
        case 0: // General
            content.innerHTML = `
                <img src="${currentActivePlane.image}" alt="${currentActivePlane.name}" class="w-full h-56 object-cover rounded-xl mb-6">
                <p class="text-lg leading-relaxed">${currentActivePlane.general}</p>
            `;
            break;
        case 1: // Especificaciones
            let specsHtml = '<ul class="space-y-4">';
            currentActivePlane.specs.forEach(spec => {
                specsHtml += `<li class="flex justify-between border-b border-zinc-800 pb-3"><span class="font-bold text-zinc-500">${spec[0]}</span> <span class="font-medium">${spec[1]}</span></li>`;
            });
            specsHtml += '</ul>';
            // Añadimos el armamento aquí también para agruparlo
            specsHtml += `<div class="mt-8"><h4 class="text-red-500 font-bold mb-2">Armamento Principal</h4><p class="bg-zinc-950 p-4 rounded-xl font-mono text-sm">${currentActivePlane.armament}</p></div>`;
            content.innerHTML = specsHtml;
            break;
        case 2: // En España
            content.innerHTML = `
                <div class="bg-red-950/30 border border-red-900 rounded-2xl p-8 text-center mt-4">
                    <div class="text-6xl font-bold text-white mb-2">${currentActivePlane.spain.split(' ')[0]}</div>
                    <div class="text-red-400 font-medium uppercase tracking-widest">Unidades Operativas</div>
                </div>
            `;
            break;
    }
}

// --- NAVEGACIÓN Y MENÚ ---
function smoothScrollTo(id, event) {
    if(event) event.preventDefault();
    const element = document.getElementById(id);
    if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // Cerrar menú móvil si está abierto
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Inicializar al cargar
window.onload = () => {
    renderFleetGrid(aircraftData);
};
