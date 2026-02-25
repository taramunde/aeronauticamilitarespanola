// Navbar scroll
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menu.classList.add('hidden');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

// Dropdowns
function toggleDropdown(el) {
    const dropdown = el.parentElement.querySelector('div');
    dropdown.classList.toggle('hidden');
    document.querySelectorAll('.dropdown-content').forEach(dd => {
        if (dd !== dropdown) dd.classList.add('hidden');
    });
}

function toggleMobileDropdown(el) {
    const dropdown = document.getElementById('mobile-dropdown-flota');
    dropdown.classList.toggle('hidden');
    const icon = el.querySelector('i');
    icon.style.transform = dropdown.classList.contains('hidden') ? '' : 'rotate(180deg)';
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(dd => dd.classList.add('hidden'));
}

// Smooth scroll
function smoothScrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = 64;
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) toggleMobileMenu();
}

// Aircraft data y modales (exactamente igual que antes)
const aircraftData = [ /* ... copia todo el array aircraftData ... */ ];

function showAircraftModal(index) { /* ... copia toda la función ... */ }
function closeModal() { /* ... copia ... */ }
function showImageModal(src) { /* ... copia ... */ }
function closeImageModal() { /* ... copia ... */ }
function handleEsc(e) { /* ... copia ... */ }

// Initialize
function initialize() {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.relative.group')) closeAllDropdowns();
    });
    console.log('%c✅ Página EAE cargada correctamente', 'color:#c8102e; font-family:monospace');
}

window.onload = initialize;
