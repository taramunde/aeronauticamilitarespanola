// app.js - Lógica de la aplicación

let aircrafts = [];

// Variables globales para filtros
let currentFilterType = "todos";
let currentSearch = "";

// Elementos del DOM
let cardsContainer, statsCounter, searchInput, typeFilter, openAddModalBtn, addModal, detailModal;
let currentAircraftIdForModal = null;

// Funciones auxiliares
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function getIconByType(type) {
    const typeMap = {
        "Caza": "fa-fighter-jet",
        "Helicóptero": "fa-helicopter",
        "Entrenamiento": "fa-graduation-cap",
        "Reabastecimiento": "fa-oil-can",
        "Patrulla marítima": "fa-water",
        "Vigilancia": "fa-eye"
    };
    return typeMap[type] || "fa-plane";
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Persistencia
function saveToLocalStorage() {
    localStorage.setItem("aircrafts_spain", JSON.stringify(aircrafts));
}

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
    // Si no hay datos guardados, cargar los iniciales (copia profunda)
    aircrafts = initialAircrafts.map(a => ({ ...a }));
    saveToLocalStorage();
}

// Actualizar contador de estadísticas
function updateStats() {
    const total = aircrafts.length;
    const activeCount = aircrafts.filter(a => a.status && a.status.toLowerCase().includes("activo")).length;
    statsCounter.innerHTML = `<i class="fas fa-plane-departure"></i> ${total} aeronaves · ${activeCount} activas`;
}

// Renderizar tarjetas según filtros
function renderCards() {
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
        cardsContainer.innerHTML = `<div class="empty-message"><i class="fas fa-info-circle"></i> No hay aeronaves con esos filtros.<br>¡Puedes añadir una nueva!</div>`;
        updateStats();
        return;
    }

    cardsContainer.innerHTML = filtered.map(ac => `
        <div class="card" data-id="${ac.id}">
            <div class="card-img">
                <i class="fas ${ac.icon || getIconByType(ac.type)} fa-3x" style="opacity:0.7"></i>
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

    // Asignar eventos a cada tarjeta
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = card.getAttribute('data-id');
            showDetailModal(id);
        });
    });
}

// Mostrar modal de detalles
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
    `;
    document.getElementById("modalContent").innerHTML = content;
    detailModal.classList.add("active");
}

// Eliminar aeronave
function deleteAircraftById(id) {
    if (confirm("¿Eliminar esta aeronave permanentemente?")) {
        aircrafts = aircrafts.filter(a => a.id !== id);
        saveToLocalStorage();
        renderCards();
        if (detailModal.classList.contains('active')) detailModal.classList.remove('active');
    }
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

// Configurar todos los eventos
function setupEventListeners() {
    // Búsqueda y filtro
    searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value;
        renderCards();
    });
    typeFilter.addEventListener("change", (e) => {
        currentFilterType = e.target.value;
        renderCards();
    });

    // Abrir modal de añadir
    openAddModalBtn.addEventListener("click", () => {
        addModal.classList.add("active");
    });

    // Cerrar modales (botones X y fondo)
    document.getElementById("closeAddModalBtn").addEventListener("click", () => addModal.classList.remove("active"));
    document.getElementById("closeDetailModalBtn").addEventListener("click", () => detailModal.classList.remove("active"));
    document.getElementById("cancelAddBtn").addEventListener("click", () => addModal.classList.remove("active"));
    window.addEventListener("click", (e) => {
        if (e.target === addModal) addModal.classList.remove("active");
        if (e.target === detailModal) detailModal.classList.remove("active");
    });

    // Formulario de añadir
    const addForm = document.getElementById("addAircraftForm");
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("newName").value.trim();
        if (!name) return alert("El nombre es obligatorio");
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

    // Botón eliminar dentro del modal de detalles
    document.getElementById("deleteFromModal").addEventListener("click", () => {
        if (currentAircraftIdForModal) {
            deleteAircraftById(currentAircraftIdForModal);
        }
    });
}

// Inicialización
function init() {
    loadFromLocalStorage();
    // Asignar referencias DOM
    cardsContainer = document.getElementById("cardsContainer");
    statsCounter = document.getElementById("statsCounter");
    searchInput = document.getElementById("searchInput");
    typeFilter = document.getElementById("typeFilter");
    openAddModalBtn = document.getElementById("openAddModalBtn");
    addModal = document.getElementById("addModal");
    detailModal = document.getElementById("detailModal");
    
    setupEventListeners();
    renderCards();
}

init();
