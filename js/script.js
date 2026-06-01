// ================================================
// script.js — Application logic
// ================================================

// ---------- State ----------
let activeBranch = 'all';
let activeType = 'all';
let searchQuery = '';

// ---------- Helpers ----------
function getTypeIcon(type) {
  var icons = {
    fighter: 'fa-crosshairs',
    bomber: 'fa-bomb',
    recon: 'fa-binoculars',
    trainer: 'fa-graduation-cap',
    flyingboat: 'fa-water'
  };
  return icons[type] || 'fa-plane';
}

function getBranchLabel(branch) {
  return branch === 'ejercito' ? 'Ejercito' : 'Armada';
}

// ---------- Render aircraft cards ----------
function renderCards() {
  var grid = document.getElementById('ac-grid');

  var filtered = aircraftData.filter(function(a) {
    if (activeBranch !== 'all' && a.branch !== activeBranch) return false;
    if (activeType !== 'all' && a.type !== activeType) return false;
    if (searchQuery && !a.name.toLowerCase().includes(searchQuery) && !a.designation.toLowerCase().includes(searchQuery)) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results"><i class="fas fa-search"></i>No aircraft match your filters.</div>';
    return;
  }

  grid.innerHTML = filtered.map(function(a) {
    var yearRange = a.year !== a.yearEnd ? a.year + '–' + a.yearEnd : String(a.year);
    var engineShort = a.engine.split(',')[0];
    return '<article class="ac-card reveal" onclick="openModal(' + a.id + ')" tabindex="0" role="button" aria-label="View details for ' + a.name + '" onkeydown="if(event.key===\'Enter\')openModal(' + a.id + ')">' +
      '<div class="branch-marker ' + a.branch + '"></div>' +
      '<div class="ac-card-header">' +
        '<i class="fas ' + getTypeIcon(a.type) + ' ac-card-icon"></i>' +
        '<div class="ac-name">' + a.name + '</div>' +
        '<div class="ac-designation">' + a.designation + '</div>' +
      '</div>' +
      '<div class="ac-card-body">' +
        '<div class="ac-meta">' +
          '<span class="badge badge-' + a.branch + '">' + getBranchLabel(a.branch) + '</span>' +
          '<span class="badge badge-type">' + a.typeLabel + '</span>' +
        '</div>' +
        '<div class="ac-desc">' + a.description + '</div>' +
        '<div class="ac-specs-mini">' +
          '<div class="ac-spec-mini"><span class="label">Speed</span><span class="value">' + a.maxSpeed + '</span></div>' +
          '<div class="ac-spec-mini"><span class="label">Range</span><span class="value">' + a.range + '</span></div>' +
          '<div class="ac-spec-mini"><span class="label">Engine</span><span class="value">' + engineShort + '</span></div>' +
          '<div class="ac-spec-mini"><span class="label">Crew</span><span class="value">' + a.crew + '</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="ac-card-footer">' +
        '<span class="ac-year-badge">' + yearRange + '</span>' +
        '<span class="ac-more">View Details <i class="fas fa-arrow-right"></i></span>' +
      '</div>' +
    '</article>';
  }).join('');

  // Re-observe new cards for reveal animation
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.05 });

  grid.querySelectorAll('.ac-card').forEach(function(el) { observer.observe(el); });
}

// ---------- Modal ----------
function openModal(id) {
  var a = aircraftData.find(function(x) { return x.id === id; });
  if (!a) return;

  var yearRange = a.year !== a.yearEnd ? a.year + '–' + a.yearEnd : String(a.year);

  var variantsHTML = a.variants.map(function(v) {
    return '<div class="variant-item">' +
      '<div class="variant-name">' + v.name + '</div>' +
      '<div class="variant-desc">' + v.desc + '</div>' +
    '</div>';
  }).join('');

  document.getElementById('modal-content').innerHTML =
    '<button class="modal-close" onclick="closeModal()" aria-label="Close"><i class="fas fa-times"></i></button>' +
    '<div class="modal-hero">' +
      '<div class="ac-meta" style="margin-bottom:0.8rem;">' +
        '<span class="badge badge-' + a.branch + '">' + getBranchLabel(a.branch) + '</span>' +
        '<span class="badge badge-type">' + a.typeLabel + '</span>' +
        '<span class="badge badge-year">' + yearRange + '</span>' +
      '</div>' +
      '<h2 class="modal-name">' + a.name + '</h2>' +
      '<div class="modal-designation">' + a.designation + '</div>' +
    '</div>' +
    '<div class="modal-body">' +
      '<p class="modal-desc">' + a.description + '</p>' +

      '<h3 class="modal-spec-heading">Technical Specifications</h3>' +
      '<div class="spec-grid">' +
        '<div class="spec-item"><div class="label">Powerplant</div><div class="value">' + a.engine + '</div></div>' +
        '<div class="spec-item"><div class="label">Wingspan</div><div class="value">' + a.wingspan + '</div></div>' +
        '<div class="spec-item"><div class="label">Length</div><div class="value">' + a.length + '</div></div>' +
        '<div class="spec-item"><div class="label">Height</div><div class="value">' + a.height + '</div></div>' +
        '<div class="spec-item"><div class="label">Empty Weight</div><div class="value">' + a.emptyWeight + '</div></div>' +
        '<div class="spec-item"><div class="label">Max Takeoff Weight</div><div class="value">' + a.maxWeight + '</div></div>' +
        '<div class="spec-item"><div class="label">Max Speed</div><div class="value accent">' + a.maxSpeed + '</div></div>' +
        '<div class="spec-item"><div class="label">Range</div><div class="value">' + a.range + '</div></div>' +
        '<div class="spec-item"><div class="label">Service Ceiling</div><div class="value">' + a.ceiling + '</div></div>' +
        '<div class="spec-item"><div class="label">Crew</div><div class="value">' + a.crew + '</div></div>' +
        '<div class="spec-item span-full"><div class="label">Armament</div><div class="value">' + a.armament + '</div></div>' +
      '</div>' +

      '<div class="variant-section">' +
        '<h4><i class="fas fa-code-branch"></i> Variants &amp; Sub-Variants</h4>' +
        variantsHTML +
      '</div>' +

      '<div class="history-section">' +
        '<h4><i class="fas fa-scroll"></i> Operational History</h4>' +
        '<p>' + a.history + '</p>' +
      '</div>' +
    '</div>';

  var overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ---------- Filter buttons ----------
document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var filter = btn.dataset.filter;
    var value = btn.dataset.value;

    if (filter === 'branch') {
      activeBranch = value;
      document.querySelectorAll('.filter-btn[data-filter="branch"]').forEach(function(b) { b.classList.remove('active'); });
    } else if (filter === 'type') {
      activeType = value;
      document.querySelectorAll('.filter-btn[data-filter="type"]').forEach(function(b) { b.classList.remove('active'); });
    }

    btn.classList.add('active');
    renderCards();
  });
});

// ---------- Search ----------
document.getElementById('search-input').addEventListener('input', function(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  renderCards();
});

// ---------- Hero scroll button ----------
document.getElementById('hero-scroll').addEventListener('click', function() {
  document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
});

// ---------- Hero canvas ----------
(function initHeroCanvas() {
  var canvas = document.getElementById('hero-canvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  for (var i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.15 - 0.1,
      alpha: Math.random() * 0.4 + 0.1,
      pulse: Math.random() * Math.PI * 2
    });
  }

  function drawBiplane(x, y, scale, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#c9a84c';
    ctx.strokeStyle = '#c9a84c';
    ctx.lineWidth = 1;

    // Fuselage
    ctx.beginPath();
    ctx.ellipse(0, 0, 30, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Wings
    ctx.fillRect(-20, -18, 40, 3);
    ctx.fillRect(-20, 10, 40, 3);

    // Struts
    ctx.beginPath();
    ctx.moveTo(-15, -15); ctx.lineTo(-15, 10);
    ctx.moveTo(15, -15); ctx.lineTo(15, 10);
    ctx.moveTo(0, -15); ctx.lineTo(0, 10);
    ctx.stroke();

    // Tail
    ctx.fillRect(25, -10, 2, 20);
    ctx.fillRect(28, -8, 4, 16);

    // Propeller
    ctx.beginPath();
    ctx.moveTo(-30, -6); ctx.lineTo(-30, 6);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  }

  var time = 0;

  function animate() {
    ctx.clearRect(0, 0, w, h);

    // Background gradient
    var grad = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.5, h * 0.5, w * 0.7);
    grad.addColorStop(0, '#2a2418');
    grad.addColorStop(0.5, '#1a1a14');
    grad.addColorStop(1, '#12120e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Searchlight beams
    ctx.save();
    ctx.globalAlpha = 0.03;
    ctx.fillStyle = '#c9a84c';
    var beamAngle = Math.sin(time * 0.0003) * 0.3;
    ctx.beginPath();
    ctx.moveTo(w * 0.2, 0);
    ctx.lineTo(w * 0.2 + Math.sin(beamAngle) * 400, h);
    ctx.lineTo(w * 0.2 + Math.sin(beamAngle) * 400 + 60, h);
    ctx.lineTo(w * 0.2 + 30, 0);
    ctx.fill();

    var beamAngle2 = Math.cos(time * 0.0004) * 0.25;
    ctx.beginPath();
    ctx.moveTo(w * 0.75, 0);
    ctx.lineTo(w * 0.75 + Math.sin(beamAngle2) * 350, h);
    ctx.lineTo(w * 0.75 + Math.sin(beamAngle2) * 350 + 50, h);
    ctx.lineTo(w * 0.75 + 25, 0);
    ctx.fill();
    ctx.restore();

    // Particles
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.02;

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      var a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.1, p.r), 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(201, 168, 76, ' + a + ')';
      ctx.fill();
    }

    // Biplane silhouettes
    drawBiplane(w * 0.15 + Math.sin(time * 0.0005) * 50, h * 0.25 + Math.cos(time * 0.0003) * 20, 0.8, 0.06 + 0.02 * Math.sin(time * 0.001));
    drawBiplane(w * 0.7 + Math.cos(time * 0.0004) * 60, h * 0.35 + Math.sin(time * 0.0006) * 15, 0.6, 0.04 + 0.015 * Math.cos(time * 0.0008));
    drawBiplane(w * 0.45 + Math.sin(time * 0.00035) * 40, h * 0.15 + Math.cos(time * 0.00045) * 25, 0.5, 0.03 + 0.01 * Math.sin(time * 0.0012));

    time++;
    requestAnimationFrame(animate);
  }

  animate();
})();

// ---------- Navigation show/hide ----------
(function initNav() {
  var nav = document.getElementById('main-nav');
  var hero = document.getElementById('hero');

  var observer = new IntersectionObserver(function(entries) {
    nav.classList.toggle('visible', !entries[0].isIntersecting);
  }, { threshold: 0.05 });

  observer.observe(hero);
})();

// ---------- Stats counter ----------
(function initStats() {
  var statsBar = document.getElementById('stats');
  var counted = false;

  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.stat-num').forEach(function(el) {
        var target = parseInt(el.dataset.target);
        var duration = 2000;
        var start = performance.now();

        function tick(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      });
    }
  }, { threshold: 0.3 });

  observer.observe(statsBar);
})();

// ---------- Scroll reveal ----------
(function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .tl-item').forEach(function(el) { observer.observe(el); });
})();

// ---------- Initial render ----------
renderCards();
