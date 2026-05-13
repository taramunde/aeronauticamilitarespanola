// ============================================================
// BIBLIOTECA AERONÁUTICA MILITAR ESPAÑOLA - APP
// Lógica principal de la aplicación
// ============================================================

// Variables globales
let currentFilter = 'all';
let searchTerm = '';

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    renderAircraft();
    updateStats();
    initScrollAnimations();
    initSmoothScroll();
    initModalEvents();
    initHeaderScroll();
});

// ============================================
// RENDERIZADO DE AERONAVES
// ============================================
function renderAircraft() {
    const grid = document.getElementById('aircraftGrid');
    if (!grid) return;

    grid.innerHTML = '';

    let filtered = aircraftDatabase.filter(aircraft => {
        const matchesCategory = currentFilter === 'all' || aircraft.category === currentFilter;
        const matchesSearch = searchTerm === '' || 
            aircraft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.year.toString().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-plane-slash" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <p style="color: var(--text-muted);">No se encontraron aeronaves con los filtros seleccionados.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(aircraft => {
        const card = createAircraftCard(aircraft);
        grid.appendChild(card);
    });
}

function createAircraftCard(aircraft) {
    const div = document.createElement('div');
    div.className = 'aircraft-card fade-in';

    div.innerHTML = `
        <div class="card-image">
            <i class="fas ${aircraft.icon}"></i>
            <span class="card-category cat-${aircraft.category}">${categoryLabels[aircraft.category]}</span>
        </div>
        <div class="card-content">
            <div class="card-header">
                <div>
                    <div class="card-title">${aircraft.name}</div>
                    <div class="card-designation">${aircraft.designation}</div>
                </div>
                <span class="card-year">${aircraft.year}</span>
            </div>
            <p class="card-description">${aircraft.description}</p>
            <div class="card-specs">
                <div class="spec-item">
                    <i class="fas fa-industry"></i>
                    <span>${aircraft.manufacturer.split(' ')[0]}...</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-gauge-high"></i>
                    <span>${aircraft.speed} km/h</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-ruler-horizontal"></i>
                    <span>${aircraft.wingspan} m</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-weight-hanging"></i>
                    <span>${(aircraft.weight/1000).toFixed(1)} t</span>
                </div>
            </div>
            <div class="card-footer">
                <span class="status-badge status-${aircraft.status}">${statusLabels[aircraft.status]}</span>
                <button class="btn-details" onclick="openModal(${aircraft.id})">
                    <i class="fas fa-info-circle"></i> Detalles
                </button>
            </div>
        </div>
    `;

    // Trigger animation
    requestAnimationFrame(() => {
        requestAnimationFrame(() => div.classList.add('visible'));
    });

    return div;
}

// ============================================
// FILTROS Y BÚSQUEDA
// ============================================
function filterByCategory(category) {
    currentFilter = category;

    // Update active button
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.classList.remove('active');
    });

    // Find the button that was clicked (handle both onclick and event)
    const clickedBtn = event ? event.target : document.querySelector(`[onclick="filterByCategory('${category}')"]`);
    if (clickedBtn) clickedBtn.classList.add('active');

    renderAircraft();
}

function filterAircraft() {
    const searchInput = document.getElementById('searchInput');
    searchTerm = searchInput ? searchInput.value : '';
    renderAircraft();
}

// ============================================
// MODAL DE DETALLES
// ============================================
function openModal(id) {
    const aircraft = aircraftDatabase.find(a => a.id === id);
    if (!aircraft) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalDesignation = document.getElementById('modalDesignation');
    const modalSpecs = document.getElementById('modalSpecs');
    const modalHistory = document.getElementById('modalHistory');
    const modal = document.getElementById('modal');

    if (modalTitle) modalTitle.textContent = aircraft.name;
    if (modalDesignation) modalDesignation.textContent = aircraft.designation;

    const specsHtml = `
        <div class="modal-spec-item">
            <label>Fabricante</label>
            <span>${aircraft.manufacturer}</span>
        </div>
        <div class="modal-spec-item">
            <label>Año de Entrada</label>
            <span>${aircraft.year}</span>
        </div>
        <div class="modal-spec-item">
            <label>Velocidad Máxima</label>
            <span>${aircraft.speed} km/h</span>
        </div>
        <div class="modal-spec-item">
            <label>Envergadura</label>
            <span>${aircraft.wingspan} m</span>
        </div>
        <div class="modal-spec-item">
            <label>Peso Máximo</label>
            <span>${aircraft.weight.toLocaleString()} kg</span>
        </div>
        <div class="modal-spec-item">
            <label>Tripulación</label>
            <span>${aircraft.crew}</span>
        </div>
    `;

    if (modalSpecs) modalSpecs.innerHTML = specsHtml;
    if (modalHistory) modalHistory.textContent = aircraft.history;

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function initModalEvents() {
    const modal = document.getElementById('modal');
    if (!modal) return;

    // Cerrar al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
}

// ============================================
// AÑADIR NUEVA AERONAVE
// ============================================
function addAircraft(event) {
    event.preventDefault();

    const newName = document.getElementById('newName');
    const newDesignation = document.getElementById('newDesignation');
    const newManufacturer = document.getElementById('newManufacturer');
    const newYear = document.getElementById('newYear');
    const newCategory = document.getElementById('newCategory');
    const newStatus = document.getElementById('newStatus');

    if (!newName || !newDesignation || !newManufacturer || !newYear || !newCategory || !newStatus) {
        showToast('Error: Formulario incompleto', 'error');
        return;
    }

    const newAircraft = {
        id: Date.now(),
        name: newName.value,
        designation: newDesignation.value,
        manufacturer: newManufacturer.value,
        year: parseInt(newYear.value),
        category: newCategory.value,
        status: newStatus.value,
        speed: parseInt(document.getElementById('newSpeed').value) || 0,
        wingspan: parseFloat(document.getElementById('newWingspan').value) || 0,
        weight: parseInt(document.getElementById('newWeight').value) || 0,
        crew: document.getElementById('newCrew').value || 'Por determinar',
        description: document.getElementById('newDescription').value || 'Sin descripción.',
        history: document.getElementById('newHistory').value || 'Historia por documentar.',
        icon: categoryIcons[newCategory.value] || 'fa-plane'
    };

    aircraftDatabase.push(newAircraft);

    // Reset form
    const form = document.getElementById('addAircraftForm');
    if (form) form.reset();

    // Update UI
    renderAircraft();
    updateStats();

    // Show toast
    showToast('Aeronave añadida correctamente a la biblioteca', 'success');

    // Scroll to flota
    const flotaSection = document.getElementById('flota');
    if (flotaSection) {
        flotaSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// ESTADÍSTICAS
// ============================================
function updateStats() {
    const total = aircraftDatabase.length;
    const fighters = aircraftDatabase.filter(a => a.category === 'fighter').length;
    const helicopters = aircraftDatabase.filter(a => a.category === 'helicopter').length;
    const active = aircraftDatabase.filter(a => a.status === 'active').length;
    const retired = aircraftDatabase.filter(a => a.status === 'retired').length;

    // Contar fabricantes únicos
    const manufacturers = new Set(aircraftDatabase.map(a => a.manufacturer.split('/')[0].trim()));

    // Calcular rango de años
    const years = aircraftDatabase.map(a => a.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const yearSpan = maxYear - minYear;

    // Animar contadores
    animateCounter('stat-total', total);
    animateCounter('stat-fighters', fighters);
    animateCounter('stat-helicopters', helicopters);
    animateCounter('dash-active', active);
    animateCounter('dash-retired', retired);
    animateCounter('dash-manufacturers', manufacturers.size);
    animateCounter('dash-avg-age', yearSpan);
}

function animateCounter(id, target) {
    const element = document.getElementById(id);
    if (!element) return;

    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// ============================================
// EXPORTAR DATOS
// ============================================
function exportToJSON() {
    const dataStr = JSON.stringify(aircraftDatabase, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'biblioteca_aeronautica_espanola.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Datos exportados a JSON correctamente', 'success');
}

function exportToCSV() {
    const headers = ['ID', 'Nombre', 'Designación', 'Fabricante', 'Año', 'Categoría', 'Estado', 'Velocidad', 'Envergadura', 'Peso', 'Tripulación'];
    const rows = aircraftDatabase.map(a => [
        a.id, a.name, a.designation, a.manufacturer, a.year, a.category, a.status, a.speed, a.wingspan, a.weight, a.crew
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.map(field => `"${field}"`).join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'biblioteca_aeronautica_espanola.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Datos exportados a CSV correctamente', 'success');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        'success': 'fa-check-circle',
        'error': 'fa-exclamation-circle',
        'info': 'fa-info-circle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 3000);
}

// ============================================
// MENÚ RESPONSIVE
// ============================================
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.remove('active');
}

// ============================================
// ANIMACIONES DE SCROLL
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// PARTÍCULAS DE FONDO
// ============================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(233, 69, 96, ${particle.opacity})`;
            ctx.fill();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', resizeCanvas);
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 15, 30, 0.98)';
            header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(15, 15, 30, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}
