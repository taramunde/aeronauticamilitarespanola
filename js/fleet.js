/**
 * Flota: menú de categorías con submenús, filtro de estado,
 * vista de tarjetas o lista, y grupos plegables.
 * También el menú de navegación (desplegable «Flota» y menú móvil).
 *
 * Depende de: aircraftData (js/data/aircraft*.js) y
 * fleetCategories / fleetStatuses (js/data/categories.js).
 */

const fleetState = { cat: 'all', type: null, status: 'actual', view: 'grid' };

const escHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function typeInfo(typeId) {
  for (const cat of fleetCategories) {
    const t = cat.types.find(t => t.id === typeId);
    if (t) return { cat, type: t };
  }
  return null;
}

function statusBadges(statusId) {
  return (fleetStatuses.find(s => s.id === statusId) || fleetStatuses[0]).badges;
}

/** Aeronaves que pasan el filtro de estado (y opcionalmente categoría/tipo). */
function fleetFilter({ cat = 'all', type = null, status = fleetState.status } = {}) {
  const badges = statusBadges(status);
  return aircraftData.filter(a => {
    if (!badges.includes(a.badge)) return false;
    if (type) return a.type === type;
    if (cat !== 'all') return typeInfo(a.type)?.cat.id === cat;
    return true;
  });
}

/* ===================== TARJETAS ===================== */
function createAircraftCard(aircraft) {
  const badgeText = {
    active: 'Operativo',
    order: 'En expansión / Pedido',
    retire: 'En retirada',
    historic: 'Histórico'
  }[aircraft.badge] || aircraft.status;
  const historic = aircraft.badge === 'historic';
  const fleetText = historic
    ? `<span class="fleet-years">${escHtml(aircraft.service || '')}</span>`
    : `${aircraft.fleet}${aircraft.onOrder ? `<span class="fleet-order">+${aircraft.onOrder}</span>` : ''}`;

  return `
    <button type="button" class="card ac-card${historic ? ' is-historic' : ''}" data-id="${escHtml(aircraft.id)}">
      <img class="card-img" loading="lazy"
           src="${escHtml(aircraft.image)}"
           alt="${escHtml(aircraft.name)}"
           onerror="this.onerror=null; this.src=placeholderSrc(this.alt, 400, 200);">
      <span class="card-body">
        <span class="role">${escHtml(aircraft.role)}</span>
        <span class="card-title">${escHtml(aircraft.name)}</span>
        <span class="fleet">${fleetText}</span>
        <span class="status">${escHtml(aircraft.status)}</span>
        <span class="badge badge-${aircraft.badge}">${badgeText}</span>
      </span>
    </button>`;
}

function gridHtml(list) {
  return `<div class="grid fleet-cards">${list.map(createAircraftCard).join('')}</div>`;
}

/* ===================== RENDER ===================== */
function renderFleet() {
  const grid = document.getElementById('fleet-grid');
  if (!grid) return;
  if (typeof aircraftData === 'undefined') {
    grid.innerHTML = '<p class="fleet-empty">Error: no se han podido cargar los datos de las aeronaves.</p>';
    return;
  }

  const { cat, type, status } = fleetState;
  const list = fleetFilter({ cat, type, status });
  grid.className = 'fleet-view view-' + fleetState.view;

  renderSummary(list.length);
  renderCategoryMenu();

  if (!list.length) {
    const canWiden = status !== 'all';
    grid.innerHTML = `<div class="fleet-empty">
      <p>No hay aeronaves de este tipo en «${escHtml(fleetStatuses.find(s => s.id === status).label)}».</p>
      ${canWiden ? '<button type="button" class="btn-ghost" data-set-status="all">Ver todas las épocas</button>' : ''}
    </div>`;
    return;
  }

  if (type) {
    grid.innerHTML = gridHtml(list);
  } else if (cat !== 'all') {
    // Una categoría: subtítulo por tipo, todo visible
    const c = fleetCategories.find(c => c.id === cat);
    grid.innerHTML = c.types.map(t => {
      const items = list.filter(a => a.type === t.id);
      if (!items.length) return '';
      return `<div class="type-block"><h3 class="type-head">${escHtml(t.label)} <span class="count">${items.length}</span></h3>${gridHtml(items)}</div>`;
    }).join('');
  } else {
    // Todas: grupos plegables por categoría para que no se haga eterno
    grid.innerHTML = `<div class="group-tools">
        <button type="button" class="btn-ghost" data-groups="open">Desplegar todo</button>
        <button type="button" class="btn-ghost" data-groups="close">Plegar todo</button>
      </div>` +
      fleetCategories.map((c, i) => {
        const items = list.filter(a => typeInfo(a.type)?.cat.id === c.id);
        if (!items.length) return '';
        const preview = items.slice(0, 4).map(a => escHtml(a.name.replace(/\s*\(.*\)$/, ''))).join(' · ') + (items.length > 4 ? ' …' : '');
        return `<details class="fleet-group" ${i === 0 ? 'open' : ''}>
          <summary>
            <span class="g-icon" aria-hidden="true">${c.icon}</span>
            <span class="g-text"><span class="g-title">${escHtml(c.label)}</span><span class="g-preview">${preview}</span></span>
            <span class="count">${items.length}</span>
            <span class="g-chev" aria-hidden="true"></span>
          </summary>
          ${gridHtml(items)}
        </details>`;
      }).join('');
  }
}

function renderSummary(n) {
  const el = document.getElementById('filter-summary');
  if (!el) return;
  const parts = [];
  if (fleetState.type) {
    const info = typeInfo(fleetState.type);
    parts.push(`${info.cat.label} › ${info.type.label}`);
  } else if (fleetState.cat !== 'all') {
    parts.push(fleetCategories.find(c => c.id === fleetState.cat).label);
  }
  if (fleetState.status !== 'actual') parts.push(fleetStatuses.find(s => s.id === fleetState.status).label);

  el.innerHTML = `<span class="sum-count">${n} ${n === 1 ? 'aeronave' : 'aeronaves'}</span>` +
    parts.map(p => `<span class="sum-chip">${escHtml(p)}</span>`).join('') +
    (parts.length ? '<button type="button" class="sum-clear" data-clear>Quitar filtros ✕</button>' : '');

  const label = document.getElementById('cat-current');
  if (label) {
    label.textContent = fleetState.type ? typeInfo(fleetState.type).type.label
      : fleetState.cat !== 'all' ? fleetCategories.find(c => c.id === fleetState.cat).label
      : 'Todas';
  }
}

/* ===================== MENÚ DE CATEGORÍAS ===================== */
let openSubmenu = null;

function renderCategoryMenu() {
  const menu = document.getElementById('cat-menu');
  if (!menu) return;
  const count = (opts) => fleetFilter(opts).length;
  const sel = (cat, type) => fleetState.cat === cat && fleetState.type === type ? ' aria-current="true"' : '';

  menu.innerHTML = `<button type="button" class="menu-item" data-cat="all"${sel('all', null)}>
      <span>Todas las categorías</span><span class="count">${count({})}</span></button>` +
    fleetCategories.map(c => {
      const open = openSubmenu === c.id;
      return `<div class="submenu${open ? ' open' : ''}">
        <button type="button" class="menu-item submenu-head" data-toggle-sub="${c.id}" aria-expanded="${open}">
          <span><span aria-hidden="true">${c.icon}</span> ${escHtml(c.label)}</span>
          <span class="count">${count({ cat: c.id })}</span><span class="chev" aria-hidden="true"></span>
        </button>
        <div class="submenu-items">
          <button type="button" class="menu-item sub" data-cat="${c.id}"${sel(c.id, null)}><span>Todo: ${escHtml(c.label)}</span><span class="count">${count({ cat: c.id })}</span></button>
          ${c.types.map(t => {
            const n = count({ type: t.id });
            const hist = n ? 0 : count({ type: t.id, status: 'all' });
            const badge = n || !hist ? `<span class="count">${n}</span>` : `<span class="count count-hist" title="Solo históricas">${hist} hist.</span>`;
            return `<button type="button" class="menu-item sub${n ? '' : ' is-empty'}" data-cat="${c.id}" data-type="${t.id}"${sel(c.id, t.id)}>
              <span>${escHtml(t.label)}</span>${badge}</button>`;
          }).join('')}
        </div>
      </div>`;
    }).join('');
}

function setDropdown(dd, open) {
  dd.classList.toggle('open', open);
  dd.querySelector('[aria-expanded]').setAttribute('aria-expanded', String(open));
}

function closeAllDropdowns(except) {
  document.querySelectorAll('.dropdown.open').forEach(d => { if (d !== except) setDropdown(d, false); });
}

function applyFilter(cat, type, { scroll = false } = {}) {
  fleetState.cat = cat;
  fleetState.type = type || null;
  // Si el tipo elegido no tiene aeronaves en el estado actual (p. ej. bombarderos), abrir a todas las épocas
  if (fleetFilter({ cat, type: fleetState.type }).length === 0 && fleetFilter({ cat, type: fleetState.type, status: 'all' }).length) {
    fleetState.status = 'all';
    const s = document.getElementById('status-select');
    if (s) s.value = 'all';
  }
  renderFleet();
  if (scroll) scrollToSection('flota');
}

function initFleet() {
  const statusSel = document.getElementById('status-select');
  statusSel.innerHTML = fleetStatuses.map(s => `<option value="${s.id}">${escHtml(s.label)}</option>`).join('');
  statusSel.value = fleetState.status;
  statusSel.addEventListener('change', () => { fleetState.status = statusSel.value; renderFleet(); });

  const dd = document.getElementById('cat-dropdown');
  dd.querySelector('.dropdown-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !dd.classList.contains('open');
    closeAllDropdowns(dd);
    if (willOpen && fleetState.cat !== 'all') openSubmenu = fleetState.cat;
    renderCategoryMenu();
    setDropdown(dd, willOpen);
  });

  document.getElementById('cat-menu').addEventListener('click', (e) => {
    e.stopPropagation();
    const tog = e.target.closest('[data-toggle-sub]');
    if (tog) {
      openSubmenu = openSubmenu === tog.dataset.toggleSub ? null : tog.dataset.toggleSub;
      renderCategoryMenu();
      return;
    }
    const item = e.target.closest('[data-cat]');
    if (item) {
      applyFilter(item.dataset.cat, item.dataset.type);
      setDropdown(dd, false);
      dd.querySelector('.dropdown-btn').focus();
    }
  });

  document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => {
    fleetState.view = b.dataset.view;
    document.querySelectorAll('[data-view]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    renderFleet();
  }));

  const grid = document.getElementById('fleet-grid');
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.ac-card');
    if (card) { openModal(card.dataset.id); return; }
    const g = e.target.closest('[data-groups]');
    if (g) { grid.querySelectorAll('details.fleet-group').forEach(d => d.open = g.dataset.groups === 'open'); return; }
    const st = e.target.closest('[data-set-status]');
    if (st) { fleetState.status = st.dataset.setStatus; statusSel.value = fleetState.status; renderFleet(); }
  });

  document.getElementById('filter-summary').addEventListener('click', (e) => {
    if (e.target.closest('[data-clear]')) {
      fleetState.cat = 'all'; fleetState.type = null; fleetState.status = 'actual';
      statusSel.value = 'actual';
      renderFleet();
    }
  });

  renderFleet();
}

/* ===================== NAVEGACIÓN ===================== */
function renderNavFleetMenu() {
  const panel = document.getElementById('nav-fleet-menu');
  if (!panel) return;
  panel.innerHTML = `<a class="mega-all" data-nav-cat="all">Ver toda la flota →</a>
    <div class="mega-cols">` +
    fleetCategories.map(c => `<div class="mega-col">
      <a class="mega-head" data-nav-cat="${c.id}"><span aria-hidden="true">${c.icon}</span> ${escHtml(c.label)}</a>
      ${c.types.map(t => `<a class="mega-link" data-nav-cat="${c.id}" data-nav-type="${t.id}">${escHtml(t.label)}</a>`).join('')}
    </div>`).join('') + '</div>';
}

function initNav() {
  renderNavFleetMenu();
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.nav-toggle');
  const setMobile = (open) => {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', (e) => { e.stopPropagation(); setMobile(!nav.classList.contains('menu-open')); });

  const markActive = (sectionId) => {
    document.querySelectorAll('.nav-links [data-section]').forEach(a => a.classList.toggle('active', a.dataset.section === sectionId));
  };

  document.querySelectorAll('.nav-links a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      markActive(link.dataset.section);
      closeAllDropdowns();
      setMobile(false);
      scrollToSection(link.dataset.section);
    });
  });

  const fleetDd = document.getElementById('nav-fleet');
  fleetDd.querySelector('.dropdown-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !fleetDd.classList.contains('open');
    closeAllDropdowns(fleetDd);
    setDropdown(fleetDd, willOpen);
  });
  document.getElementById('nav-fleet-menu').addEventListener('click', (e) => {
    const a = e.target.closest('[data-nav-cat]');
    if (!a) return;
    e.preventDefault();
    markActive('flota');
    setDropdown(fleetDd, false);
    setMobile(false);
    applyFilter(a.dataset.navCat, a.dataset.navType, { scroll: true });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) closeAllDropdowns();
    if (!e.target.closest('nav')) setMobile(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeAllDropdowns(); setMobile(false); }
  });
}
