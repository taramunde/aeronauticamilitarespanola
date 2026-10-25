// Smooth scroll
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  // Actualizar estado activo del menú
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  // Si se llama desde un evento de clic, event.target estará disponible
  if (typeof event !== 'undefined' && event.target) {
    event.target.classList.add('active');
  }
}

// Filter fleet
function filterFleet(type) {
  // Actualizar botones activos
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (typeof event !== 'undefined' && event.target) {
    event.target.classList.add('active');
  }

  // Filtrar tarjetas
  document.querySelectorAll('#fleet-grid .card').forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Animate counters on load
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  if (!obj) return;

  const range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    obj.textContent = Math.floor(progress * range + start);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// Inicialización
window.addEventListener('load', () => {
  animateValue('stat-combat', 0, 178, 1800);
  animateValue('stat-total', 0, 525, 2000);
});
