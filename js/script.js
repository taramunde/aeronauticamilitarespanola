// Navbar scroll effect
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
    
    // Close others
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
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) toggleMobileMenu();
}

// Aircraft modal data
const aircraftData = [
    {
        title: "Eurofighter Typhoon",
        subtitle: "C.16 • Caza Polivalente",
        image: "https://picsum.photos/id/201/800/600",
        desc: "El Eurofighter Typhoon es el caza más avanzado de la flota española. Equipado con tecnología de vanguardia, radar Captor-E AESA y capacidad supercrucero, es la columna vertebral de la defensa aérea nacional.",
        speed: "Mach 2+",
        range: "2.900 km",
        crew: "1 piloto"
    },
    {
        title: "F/A-18 Hornet",
        subtitle: "C.15 • Caza Naval",
        image: "https://picsum.photos/id/866/800/600",
        desc: "Adquirido en los años 80, el F/A-18 sigue siendo el caballo de batalla del Ejército del Aire. Capaz de realizar misiones aire-aire y aire-tierra con gran versatilidad.",
        speed: "Mach 1.8",
        range: "3.300 km",
        crew: "1 piloto"
    },
    {
        title: "Airbus A400M Atlas",
        subtitle: "T.23 • Transporte Estratégico",
        image: "https://picsum.photos/id/1016/800/600",
        desc: "El A400M es el transporte militar más moderno de Europa. Puede operar desde pistas cortas y sin pavimentar, y realizar reabastecimiento en vuelo.",
        speed: "Mach 0.72",
        range: "8.700 km",
        crew: "3-5"
    },
    {
        title: "CASA C-295",
        subtitle: "T.21 • Patrulla Marítima",
        image: "https://picsum.photos/id/133/800/600",
        desc: "Versátil avión de transporte ligero y patrulla marítima. Utilizado también para misiones de búsqueda y rescate (SAR).",
        speed: "450 km/h",
        range: "4.000 km",
        crew: "2+"
    }
];

let currentModalIndex = 0;

function showAircraftModal(index) {
    currentModalIndex = index;
    const data = aircraftData[index];
    const modal = document.getElementById('aircraft-modal');
    
    document.getElementById('modal-image').style.backgroundImage = `url('${data.image}')`;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-desc').textContent = data.desc;
    document.getElementById('modal-speed').textContent = data.speed;
    document.getElementById('modal-range').textContent = data.range;
    document.getElementById('modal-crew').textContent = data.crew;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('aircraft-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Image modal
function showImageModal(src) {
    const modal = document.getElementById('image-modal');
    document.getElementById('modal-full-image').src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Keyboard ESC support
function handleEsc(e) {
    if (e.key === "Escape") {
        const aircraftModal = document.getElementById('aircraft-modal');
        const imageModal = document.getElementById('image-modal');
        
        if (!aircraftModal.classList.contains('hidden')) closeModal();
        else if (!imageModal.classList.contains('hidden')) closeImageModal();
    }
}

// Initialize everything
function initialize() {
    // Scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Keyboard
    document.addEventListener('keydown', handleEsc);
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.relative.group')) {
            closeAllDropdowns();
        }
    });
    
    console.log('%c✅ Página de Aeronáutica Militar Española cargada correctamente', 'color:#c8102e; font-family:monospace');
}

// Boot the app
window.onload = initialize;
