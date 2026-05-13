// app.js - Aplicación biblioteca didáctica
let aircrafts = [];
let currentFilters = { type: "todos", status: "todos", search: "", era: null };

// DOM elements
let cardsContainer, statsCounter, searchInput, typeFilter, statusFilter, resetBtn;
let detailModal, addModal, currentIdForModal = null;

// Helper
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function loadFromLocalStorage() {
    const stored = localStorage.getItem("aircrafts_spain_library");
    if(stored && JSON.parse(stored).length) {
        aircrafts = JSON.parse(stored);
    } else {
        aircrafts = initialAircrafts.map(a => ({ ...a }));
        saveToLocalStorage();
    }
}
function saveToLocalStorage() {
    localStorage.setItem("aircrafts_spain_library", JSON.stringify(aircrafts));
}

function escapeHtml(str) {
    if(!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

function updateStats() {
    const total = aircrafts.length;
    const active = aircrafts.filter(a => a.status && a.status.toLowerCase().includes("activo")).length;
    statsCounter.innerHTML = `<i class="fas fa-plane"></i> ${total} aeronaves · ${active} en servicio activo`;
}

function renderCards() {
    let filtered = aircrafts.filter(ac => {
        if(currentFilters.type !== "todos" && ac.type !== currentFilters.type) return false;
        if(currentFilters.status !== "todos" && ac.status !== currentFilters.status) return false;
        if(currentFilters.search.trim() !== "") {
            const s = currentFilters.search.toLowerCase();
            return ac.name.toLowerCase().includes(s) || ac.role.toLowerCase().includes(s) || ac.country.toLowerCase().includes(s);
        }
        if(currentFilters.era) {
            if(currentFilters.era === "moderna" && ac.year < 2000) return false;
            if(currentFilters.era === "guerra fría" && (ac.year < 1945 || ac.year > 1991)) return false;
            if(currentFilters.era === "postguerra" && (ac.year < 1939 || ac.year > 1975)) return false;
        }
        return true;
    });
    if(filtered.length === 0) {
        cardsContainer.innerHTML = `<div class="empty-message"><i class="fas fa-book-open"></i> No hay aeronaves con esos criterios. ¡Añade una!</div>`;
        updateStats();
        return;
    }
    cardsContainer.innerHTML = filtered.map(ac => `
        <div class="card" data-id="${ac.id}">
            <div class="card-img" style="background-image: url('${ac.image || 'https://via.placeholder.com/300x200?text=Sin+imagen'}');"></div>
            <div class="card-content">
                <div class="card-title">${escapeHtml(ac.name)}</div>
                <span class="card-type">${escapeHtml(ac.type)}</span>
                <div class="card-info">
                    <span><i class="fas fa-calendar"></i> ${ac.year || '?'}</span>
                    <span><i class="fas fa-flag"></i> ${escapeHtml(ac.country.split('/')[0])}</span>
                </div>
                <div class="detail-link">Ver ficha completa →</div>
            </div>
        </div>
    `).join('');
    updateStats();
    document.querySelectorAll('.card').forEach(c => c.addEventListener('click', (e) => showDetailModal(c.dataset.id)));
}

function showDetailModal(id) {
    const ac = aircrafts.find(a => a.id === id);
    if(!ac) return;
    currentIdForModal = id;
    const content = `
        <div class="detail-header">
            <div class="detail-img" style="background-image: url('${ac.image || 'https://via.placeholder.com/300x200'}');"></div>
            <div class="detail-specs">
                <h2>${escapeHtml(ac.name)}</h2>
                <div class="spec-row"><strong>Tipo:</strong> ${escapeHtml(ac.type)}</div>
                <div class="spec-row"><strong>Origen:</strong> ${escapeHtml(ac.country)}</div>
                <div class="spec-row"><strong>Rol:</strong> ${escapeHtml(ac.role)}</div>
                <div class="spec-row"><strong>Año:</strong> ${ac.year}</div>
                <div class="spec-row"><strong>Estado:</strong> ${escapeHtml(ac.status)}</div>
            </div>
        </div>
        <div class="detail-description">
            <h3>📖 Datos históricos</h3>
            <p>${escapeHtml(ac.description || 'No hay descripción disponible. Puedes editarla.')}</p>
        </div>
    `;
    document.getElementById("modalDynamicContent").innerHTML = content;
    detailModal.classList.add("active");
}

function deleteAircraft(id) {
    if(confirm("¿Eliminar esta aeronave de la biblioteca?")) {
        aircrafts = aircrafts.filter(a => a.id !== id);
        saveToLocalStorage();
        renderCards();
        detailModal.classList.remove("active");
    }
}

function addAircraft(newData) {
    const newId = generateId();
    const aircraft = {
        id: newId,
        name: newData.name,
        type: newData.type,
        country: newData.country || "España",
        role: newData.role || "Desconocido",
        year: newData.year ? parseInt(newData.year) : new Date().getFullYear(),
        status: newData.status || "Activo",
        image: newData.image || "",
        description: newData.description || "Sin descripción aportada."
    };
    aircrafts.push(aircraft);
    saveToLocalStorage();
    renderCards();
}

function setupListeners() {
    searchInput.addEventListener("input", (e) => { currentFilters.search = e.target.value; renderCards(); });
    typeFilter.addEventListener("change", (e) => { currentFilters.type = e.target.value; renderCards(); });
    statusFilter.addEventListener("change", (e) => { currentFilters.status = e.target.value; renderCards(); });
    resetBtn.addEventListener("click", () => {
        currentFilters = { type: "todos", status: "todos", search: "", era: null };
        searchInput.value = "";
        typeFilter.value = "todos";
        statusFilter.value = "todos";
        renderCards();
    });
    // Épocas
    document.querySelectorAll(".epoch-list li").forEach(li => {
        li.addEventListener("click", (e) => {
            const era = li.dataset.era;
            currentFilters.era = era;
            renderCards();
        });
    });
    // Modal cierre
    document.querySelectorAll(".close-modal").forEach(el => el.addEventListener("click", () => {
        detailModal.classList.remove("active");
        addModal.classList.remove("active");
    }));
    window.addEventListener("click", (e) => { if(e.target === detailModal) detailModal.classList.remove("active"); if(e.target === addModal) addModal.classList.remove("active"); });
    document.getElementById("deleteFromModal")?.addEventListener("click", () => { if(currentIdForModal) deleteAircraft(currentIdForModal); });
    document.getElementById("openAddModalBtn")?.addEventListener("click", () => addModal.classList.add("active"));
    document.getElementById("openAddModalBtnNav")?.addEventListener("click", (e) => { e.preventDefault(); addModal.classList.add("active"); });
    document.getElementById("closeAddModalBtn")?.addEventListener("click", () => addModal.classList.remove("active"));
    document.getElementById("cancelAddBtn")?.addEventListener("click", () => addModal.classList.remove("active"));
    document.getElementById("addAircraftForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const newAircraft = {
            name: document.getElementById("newName").value.trim(),
            type: document.getElementById("newType").value,
            country: document.getElementById("newCountry").value.trim(),
            role: document.getElementById("newRole").value.trim(),
            year: document.getElementById("newYear").value,
            status: document.getElementById("newStatus").value.trim(),
            image: document.getElementById("newImage").value.trim(),
            description: document.getElementById("newDescription").value.trim()
        };
        if(!newAircraft.name) return alert("El nombre es obligatorio");
        addAircraft(newAircraft);
        addModal.classList.remove("active");
        e.target.reset();
    });
}

function init() {
    loadFromLocalStorage();
    cardsContainer = document.getElementById("cardsContainer");
    statsCounter = document.getElementById("statsCounter");
    searchInput = document.getElementById("searchInput");
    typeFilter = document.getElementById("typeFilter");
    statusFilter = document.getElementById("statusFilter");
    resetBtn = document.getElementById("resetFiltersBtn");
    detailModal = document.getElementById("detailModal");
    addModal = document.getElementById("addModal");
    setupListeners();
    renderCards();
}
init();
