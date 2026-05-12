// app.js - Lógica principal
let aircrafts = [];

// Función para generar ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Obtener icono según tipo
function getIconByType(type) {
    if(type === "Caza") return "fa-fighter-jet";
    if(type === "Helicóptero") return "fa-helicopter";
    if(type === "Entrenamiento") return "fa-graduation-cap";
    if(type === "Reabastecimiento") return "fa-oil-can";
    if(type === "Patrulla marítima") return "fa-water";
    return "fa-plane";
}

// Guardar en localStorage
function saveToLocalStorage() {
    localStorage.setItem("aircrafts_spain", JSON.stringify(aircrafts));
}

// Cargar desde localStorage o datos iniciales
function loadFromLocalStorage() {
    const stored = localStorage.getItem("aircrafts_spain");
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length) {
                aircrafts = parsed;
                return;
            }
        } catch(e) {}
    }
    // Si no hay datos guardados, usar los iniciales (copiando para no mutar el original)
    aircrafts = initialAircrafts.map(a => ({ ...a }));
}

// Escapar HTML
function escapeHtml(str) {
    if(!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

// Actualizar contador de estadísticas
function updateStats() {
    const total = aircrafts.length;
    const activeCount = aircrafts.filter(a => a.status && a.status.toLowerCase().includes("activo")).length;
    document.getElementById("statsCounter").innerHTML = `<i class="fas fa-plane-departure"></i> ${total} aeronaves · ${activeCount} en servicio activo`;
}

// Renderizar tarjetas según filtros actuales (variables globales)
let currentFilterType = "todos";
let currentSearch = "";

function renderCards() {
    const container = document.getElementById("cardsContainer");
    let filtered = aircrafts.filter(ac => {
        if (currentFilterType !== "todos" && ac.type !== currentFilterType) return false;
        if (currentSearch.trim() !== "") {
            const searchLower = currentSearch.toLowerCase();
            return ac.name.toLowerCase().includes(searchLower) || 
                   ac.type.toLowerCase().includes(searchLower) ||
                   (ac.country && ac.country.toLowerCase().includes(searchLower));
        }
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-message"><i class="fas fa-info-circle"></i> No hay aeronaves con esos filtros.<br>¡Puedes añadir una nueva con el botón + !</div>`;
        updateStats();
        return;
    }

    container.innerHTML = filtered.map(ac => `
        <div class="card" data-id="${ac.id}">
            <div class="card-img">
                <i class="fas ${ac.icon || 'fa-plane'} fa-3x" style="opacity:0.7"></i>
            </div>
            <div class="card-content">
                <div class="card-title">${escapeHtml(ac.name)}</div>
                <span class="card-type">${escapeHtml(ac.type)}</span>
                <div class="card-info">
                    <span><i class="fas fa-calendar-alt"></i> ${ac.year || '?'}</span>
                    <span><i class="fas fa-globe"></i> ${escapeHtml(ac.country?.split('/')[0] || '?')}</span>
                </div>
                <div class="detail-link">
                    Ver detalles <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    `).join('');
    
    updateStats();
    
    // Añadir eventos a las tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = card.getAttribute('data-id');
            showDetailModal(id);
        });
    });
}

// Mostrar modal de detalles
let currentAircraftIdForModal = null;
const detailModal = document.getElementById("detailModal");
const addModal = document.getElementById("addModal");

function showDetailModal(id) {
    const aircraft = aircrafts.find(a => a.id === id);
    if (!aircraft) return;
    currentAircraftIdForModal = id;
    document.getElementById("modalTitle").innerText = aircraft.name;
    const content = `
        <div class="modal-detail-row"><strong>Tipo:</strong> ${escapeHtml(aircraft.type)}</div>
        <div class="modal-detail-row"><strong>País origen:</strong> ${escapeHtml(aircraft.country)}</div>
        <div class="modal-detail-row"><strong>Rol principal:</strong> ${escapeHtml(aircraft.role || 'No especificado')}</div>
        <div class="modal-detail-row"><strong>Año introducción:</strong> ${aircraft.year || 'N/D'}</div>
        <div class="modal-detail-row"><strong>Estado actual:</strong> ${escapeHtml(aircraft.status)}</div>
        <div class="modal-detail-row"><i class="fas fa-info-circle"></i> ID: ${aircraft.id}</div>
    `;
    document.getElementById("modalContent").innerHTML = content;
    detailModal.classList.add("active");
}

// Eliminar aeronave
function deleteAircraftById(id) {
    aircrafts = aircrafts.filter(a => a.id !== id);
    saveToLocalStorage();
    renderCards();
    if(detailModal.classList.contains('active')) detailModal.classList.remove('active');
}

// Añadir nueva aeronave
function addAircraft(newData) {
    const newId = generateId();
    const aircraft = {
        id: newId,
        name: newData.name,
        type: newData.type,
        country: newData.country || "España",
        role: newData.role || "Misión táctica",
        year: newData.year ? parseInt(newData.year) : new Date().getFullYear(),
        status: newData.status || "Activo",
        icon: getIconByType(newData.type)
    };
    aircrafts.push(aircraft);
    saveToLocalStorage();
    renderCards();
}

// Configurar eventos
function setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    const typeFilter = document.getElementById("typeFilter");
    const openAddBtn = document.getElementById("openAddModalBtn");
    const closeAddBtn = document.getElementById("closeAddModal");
    const addForm = document.getElementById("addAircraftForm");
    const closeDetail = document.getElementById("closeDetailModal");
    const deleteBtn = document.getElementById("deleteFromModal");

    searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value;
        renderCards();
    });
    typeFilter.addEventListener("change", (e) => {
        currentFilterType = e.target.value;
        renderCards();
    });
    openAddBtn.addEventListener("click", () => {
        addModal.classList.add("active");
    });
    closeAddBtn.addEventListener("click", () => {
        addModal.classList.remove("active");
    });
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("newName").value.trim();
        if(!name) return alert("El nombre es obligatorio");
        const newAircraft = {
            name: name,
            type: document.getElementById("newType").value,
            country: document.getElementById("newCountry").value.trim() || "España",
            role: document.getElementById("newRole").value.trim() || "Sin rol definido",
            year: document.getElementById("newYear").value,
            status: document.getElementById("newStatus").value.trim() || "Activo"
        };
        addAircraft(newAircraft);
        addModal.classList.remove("active");
        addForm.reset();
    });
    closeDetail.addEventListener("click", () => {
        detailModal.classList.remove("active");
    });
    deleteBtn.addEventListener("click", () => {
        if(currentAircraftIdForModal) {
            if(confirm("¿Eliminar esta aeronave permanentemente?")) {
                deleteAircraftById(currentAircraftIdForModal);
                detailModal.classList.remove("active");
            }
        }
    });
    window.addEventListener("click", (e) => {
        if(e.target === detailModal) detailModal.classList.remove("active");
        if(e.target === addModal) addModal.classList.remove("active");
    });
}

// Inicialización
function init() {
    loadFromLocalStorage();
    setupEventListeners();
    renderCards();
}

init();
