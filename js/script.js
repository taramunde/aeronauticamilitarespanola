const aircraftData = [
    {id:0, name:"Eurofighter Typhoon", designation:"C.16", type:"caza", image:"https://picsum.photos/id/201/1200/600",
     general:"Principal caza de superioridad aérea...", specs:[["Velocidad","Mach 2.0+"],["Techo","19.812 m"]], spain:"73 unidades", armament:"Meteor, IRIS-T...", gallery:["https://picsum.photos/id/201/800/500"]},
    {id:1, name:"F/A-18 Hornet", designation:"C.15", type:"caza", image:"https://picsum.photos/id/866/1200/600",
     general:"Cazabombardero polivalente...", specs:[["Velocidad","Mach 1.8"]], spain:"78 unidades", armament:"AMRAAM...", gallery:["https://picsum.photos/id/866/800/500"]},
    {id:2, name:"Airbus A400M Atlas", designation:"T.23", type:"transporte", image:"https://picsum.photos/id/1016/1200/600",
     general:"Transporte estratégico...", specs:[["Carga","37 toneladas"]], spain:"14 unidades", armament:"Ninguno", gallery:["https://picsum.photos/id/1016/800/500"]},
    {id:3, name:"CASA C-295", designation:"T.21", type:"transporte", image:"https://picsum.photos/id/133/1200/600",
     general:"Transporte táctico...", specs:[["Alcance","4.000 km"]], spain:"16 unidades", armament:"Torpedos MK-46", gallery:["https://picsum.photos/id/133/800/500"]},
    {id:4, name:"Pilatus PC-21", designation:"E.27", type:"entrenador", image:"https://picsum.photos/id/870/1200/600",
     general:"Entrenador avanzado...", specs:[["Velocidad","685 km/h"]], spain:"24 unidades", armament:"Pods", gallery:["https://picsum.photos/id/870/800/500"]},
    {id:5, name:"Airbus A330 MRTT", designation:"T.24", type:"transporte", image:"https://picsum.photos/id/1015/1200/600",
     general:"Reabastecedor estratégico...", specs:[["Combustible","111.000 kg"]], spain:"4 unidades", armament:"AAR", gallery:["https://picsum.photos/id/1015/800/500"]},
    {id:6, name:"NHIndustries NH90", designation:"HT.29", type:"helicoptero", image:"https://picsum.photos/id/201/1200/600",
     general:"Helicóptero táctico...", specs:[["Velocidad","300 km/h"]], spain:"12 unidades", armament:"Misiles antinave", gallery:["https://picsum.photos/id/201/800/500"]}
];

let currentFilter = 'all';

function renderFleetGrid(filteredData) {
    const grid = document.getElementById('fleet-grid');
    grid.innerHTML = '';
    filteredData.forEach(plane => {
        const card = document.createElement('div');
        card.className = "aircraft-card bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-red-600";
        card.innerHTML = `
            <div class="h-56 bg-cover bg-center" style="background-image:url('${plane.image}')"></div>
            <div class="p-6">
                <div class="font-mono text-red-500">${plane.designation}</div>
                <h3 class="text-2xl font-bold">${plane.name}</h3>
            </div>
        `;
        card.onclick = () => showDetailedModal(plane.id);
        grid.appendChild(card);
    });
}

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

function filterByType(type) {
    currentFilter = type;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    filterFleet();
}

// Modal functions (showDetailedModal, switchTab, closeModal) — exactamente las mismas que te di antes
// (incluidas en el script completo que te envié anteriormente)

window.onload = () => {
    renderFleetGrid(aircraftData);
    // resto de listeners (scroll, mobile, etc.)
};
