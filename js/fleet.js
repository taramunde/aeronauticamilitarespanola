/**
 * Flota: menú de categorías (panel doble en escritorio, hoja inferior en móvil),
 * menú de estado, vista de tarjetas o lista y grupos plegables.
 * También la navegación superior (desplegable «Flota» y menú móvil).
 *
 * Depende de: aircraftData (js/data/aircraft*.js) y
 * fleetCategories / fleetStatuses (js/data/categories.js).
 */

const fleetState = { cat: 'all', type: null, status: 'actual', view: 'grid' };
let menuPane = fleetCategories[0].id;   // categoría cuyo submenú se ve en el panel derecho
let mobilePaneOpen = false;             // en móvil: lista de categorías o lista de tipos

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
const escHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ALL_ICON = 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z';
const icon = (d, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
const CHEV = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
const CHECK = '<svg class="check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function typeInfo(typeId) {
  for (const cat of fleetCategories) {
    const t = cat.types.find(t => t.id === typeId);
    if (t) return { cat, type: t };
  }
  return null;
}
const catById = id => fleetCategories.find(c => c.id === id);
const statusById = id => fleetStatuses.find(s => s.id === id) || fleetStatuses[0];

function fleetFilter({ cat = 'all', type = null, status = fleetState.status } = {}) {
  const badges = statusById(status).badges;
  return aircraftData.filter(a => {
    if (!badges.includes(a.badge)) return false;
    if (type) return a.type === type;
    if (cat !== 'all') return typeInfo(a.type)?.cat.id === cat;
    return true;
  });
}

/* ===================== TARJETAS ===================== */
function createAircraftCard(aircraft) {
  const badgeText = { active: 'Operativo', order: 'En expansión / Pedido', retire: 'En retirada', historic: 'Histórico' }[aircraft.badge] || aircraft.status;
  const historic = aircraft.badge === 'historic';
  const fleetText = historic
    ? `<span class="fleet-years">${escHtml(aircraft.service || '')}</span>`
    : `${aircraft.fleet}${aircraft.onOrder ? `<span class="fleet-order">+${aircraft.onOrder}</span>` : ''}`;

  return `
    <button type="button" class="card ac-card${historic ? ' is-historic' : ''}" data-id="${escHtml(aircraft.id)}">
      <img class="card-img" loading="lazy" src="${escHtml(aircraft.image)}" alt="${escHtml(aircraft.name)}"
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
const gridHtml = list => `<div class="grid fleet-cards">${list.map(createAircraftCard).join('')}</div>`;

/* ===================== RENDER DE LA FLOTA ===================== */
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

  renderToolbarLabels();
  renderSummary(list.length);

  if (!list.length) {
    grid.innerHTML = `<div class="fleet-empty">
      <p>No hay aeronaves de este tipo en «${escHtml(statusById(status).label)}».</p>
      ${status !== 'all' ? '<button type="button" class="btn-ghost" data-set-status="all">Ver todas las épocas</button>' : ''}
    </div>`;
    return;
  }

  if (type) {
    grid.innerHTML = gridHtml(list);
  } else if (cat !== 'all') {
    grid.innerHTML = catById(cat).types.map(t => {
      const items = list.filter(a => a.type === t.id);
      if (!items.length) return '';
      return `<div class="type-block"><h3 class="type-head">${escHtml(t.label)}<span class="num">${items.length}</span></h3>${gridHtml(items)}</div>`;
    }).join('');
  } else {
    grid.innerHTML = `<div class="group-tools">
        <button type="button" class="link-btn" data-groups="open">Desplegar todo</button>
        <span class="sep" aria-hidden="true"></span>
        <button type="button" class="link-btn" data-groups="close">Plegar todo</button>
      </div>` +
      fleetCategories.map((c, i) => {
        const items = list.filter(a => typeInfo(a.type)?.cat.id === c.id);
        if (!items.length) return '';
        const preview = items.slice(0, 3).map(a => escHtml(a.name.replace(/\s*\(.*\)$/, ''))).join(' · ') + (items.length > 3 ? ` y ${items.length - 3} más` : '');
        return `<details class="fleet-group" ${i === 0 ? 'open' : ''}>
          <summary>
            <span class="g-icon">${icon(c.icon)}</span>
            <span class="g-text"><span class="g-title">${escHtml(c.label)}</span><span class="g-preview">${preview}</span></span>
            <span class="num">${items.length}</span>
            <svg class="g-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
          </summary>
          ${gridHtml(items)}
        </details>`;
      }).join('');
  }
}

function renderToolbarLabels() {
  const lbl = document.getElementById('cat-current');
  const ico = document.getElementById('cat-icon');
  if (fleetState.type) {
    const info = typeInfo(fleetState.type);
    lbl.innerHTML = `<span class="crumb">${escHtml(info.cat.label)} ›</span> ${escHtml(info.type.label)}`;
    ico.innerHTML = icon(info.cat.icon);
  } else if (fleetState.cat !== 'all') {
    lbl.textContent = catById(fleetState.cat).label;
    ico.innerHTML = icon(catById(fleetState.cat).icon);
  } else {
    lbl.textContent = 'Todas las categorías';
    ico.innerHTML = icon(ALL_ICON);
  }
  const st = statusById(fleetState.status);
  document.getElementById('status-current').innerHTML = `${st.dot ? `<span class="dot dot-${st.dot}"></span>` : ''}${escHtml(st.label)}`;
}

function renderSummary(n) {
  const el = document.getElementById('filter-summary');
  const filtered = fleetState.cat !== 'all' || fleetState.status !== 'actual';
  el.innerHTML = `<span class="sum-count"><strong>${n}</strong> ${n === 1 ? 'aeronave' : 'aeronaves'}</span>` +
    (filtered ? '<button type="button" class="link-btn" data-clear>Restablecer filtros</button>' : '');
}

/* ===================== MENÚ DE CATEGORÍAS ===================== */
function renderCategoryMenu() {
  const menu = document.getElementById('cat-menu');
  const count = opts => fleetFilter(opts).length;
  const isSel = (cat, type) => fleetState.cat === cat && fleetState.type === type;
  const pane = catById(menuPane);

  const cats = `<div class="pane pane-cats" role="menu">
      <button type="button" class="m-row${isSel('all', null) ? ' is-sel' : ''}" data-cat="all" role="menuitem">
        <span class="m-ico">${icon(ALL_ICON)}</span><span class="m-text">Todas las categorías</span><span class="num">${count({})}</span>
      </button>
      <div class="m-sep"></div>
      ${fleetCategories.map(c => `
        <button type="button" class="m-row has-sub${c.id === menuPane ? ' is-hover' : ''}${fleetState.cat === c.id ? ' is-sel' : ''}" data-pane="${c.id}" role="menuitem" aria-haspopup="true">
          <span class="m-ico">${icon(c.icon)}</span><span class="m-text">${escHtml(c.label)}</span><span class="num">${count({ cat: c.id })}</span>${CHEV}
        </button>`).join('')}
    </div>`;

  const types = `<div class="pane pane-types" role="menu">
      <div class="pane-head">
        <button type="button" class="pane-back" data-back aria-label="Volver a categorías"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button>
        <span class="m-ico">${icon(pane.icon)}</span><span class="pane-title">${escHtml(pane.label)}</span>
      </div>
      <button type="button" class="m-row t-row${isSel(pane.id, null) ? ' is-sel' : ''}" data-cat="${pane.id}" role="menuitem">
        <span class="m-text">Todo en ${escHtml(pane.label.toLowerCase())}</span><span class="num">${count({ cat: pane.id })}</span>${isSel(pane.id, null) ? CHECK : ''}
      </button>
      ${pane.types.map(t => {
        const n = count({ type: t.id });
        const hist = n ? 0 : count({ type: t.id, status: 'all' });
        const meta = n ? `<span class="num">${n}</span>` : hist ? `<span class="tag-hist">${hist} histórico${hist > 1 ? 's' : ''}</span>` : '<span class="num">0</span>';
        return `<button type="button" class="m-row t-row${isSel(pane.id, t.id) ? ' is-sel' : ''}${n ? '' : ' is-muted'}" data-cat="${pane.id}" data-type="${t.id}" role="menuitem">
          <span class="m-text">${escHtml(t.label)}</span>${meta}${isSel(pane.id, t.id) ? CHECK : ''}
        </button>`;
      }).join('')}
    </div>`;

  menu.innerHTML = `<div class="sheet-head"><span>Categoría</span><button type="button" class="sheet-close" data-close aria-label="Cerrar">×</button></div>
    <div class="panes${mobilePaneOpen ? ' show-types' : ''}">${cats}${types}</div>`;
}

function renderStatusMenu() {
  document.getElementById('status-menu').innerHTML =
    `<div class="sheet-head"><span>Estado</span><button type="button" class="sheet-close" data-close aria-label="Cerrar">×</button></div>
     <div class="pane" role="menu">` +
    fleetStatuses.map(s => `<button type="button" class="m-row${s.id === fleetState.status ? ' is-sel' : ''}" data-status="${s.id}" role="menuitemradio" aria-checked="${s.id === fleetState.status}">
        <span class="m-ico">${s.dot ? `<span class="dot dot-${s.dot}"></span>` : ''}</span>
        <span class="m-text">${escHtml(s.label)}${s.hint ? `<small>${escHtml(s.hint)}</small>` : ''}</span>
        <span class="num">${fleetFilter({ cat: fleetState.cat, type: fleetState.type, status: s.id }).length}</span>${s.id === fleetState.status ? CHECK : ''}
      </button>`).join('') + '</div>';
}

/* ----- abrir / cerrar ----- */
function setDropdown(dd, open) {
  dd.classList.toggle('open', open);
  dd.querySelector(':scope > [aria-expanded]').setAttribute('aria-expanded', String(open));
  const anySheet = !!document.querySelector('.fleet-toolbar .dropdown.open') && isMobile();
  document.body.classList.toggle('sheet-open', anySheet);
}
function closeAllDropdowns(except) {
  document.querySelectorAll('.dropdown.open').forEach(d => { if (d !== except) setDropdown(d, false); });
}

function applyFilter(cat, type, { scroll = false } = {}) {
  fleetState.cat = cat;
  fleetState.type = type || null;
  // Tipo sin aeronaves en el estado elegido (p. ej. bombarderos): abrir a todas las épocas
  if (!fleetFilter({ cat, type: fleetState.type }).length && fleetFilter({ cat, type: fleetState.type, status: 'all' }).length) {
    fleetState.status = 'all';
  }
  renderFleet();
  if (scroll) scrollToSection('flota');
}

function initFleet() {
  const catDd = document.getElementById('cat-dropdown');
  const stDd = document.getElementById('status-dropdown');

  catDd.querySelector('.tb-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !catDd.classList.contains('open');
    closeAllDropdowns(catDd);
    if (willOpen) {
      menuPane = fleetState.cat !== 'all' ? fleetState.cat : fleetCategories[0].id;
      mobilePaneOpen = isMobile() && fleetState.cat !== 'all';
      renderCategoryMenu();
    }
    setDropdown(catDd, willOpen);
  });

  const menu = document.getElementById('cat-menu');
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.closest('[data-close]')) { setDropdown(catDd, false); return; }
    if (e.target.closest('[data-back]')) { mobilePaneOpen = false; renderCategoryMenu(); return; }
    const p = e.target.closest('[data-pane]');
    if (p) { menuPane = p.dataset.pane; mobilePaneOpen = true; renderCategoryMenu(); return; }
    const item = e.target.closest('[data-cat]');
    if (item) {
      applyFilter(item.dataset.cat, item.dataset.type);
      setDropdown(catDd, false);
      catDd.querySelector('.tb-btn').focus({ preventScroll: true });
    }
  });
  // Escritorio: el submenú sigue al ratón
  menu.addEventListener('mouseover', (e) => {
    if (isMobile()) return;
    const p = e.target.closest('[data-pane]');
    if (p && p.dataset.pane !== menuPane) { menuPane = p.dataset.pane; renderCategoryMenu(); }
  });

  stDd.querySelector('.tb-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !stDd.classList.contains('open');
    closeAllDropdowns(stDd);
    if (willOpen) renderStatusMenu();
    setDropdown(stDd, willOpen);
  });
  document.getElementById('status-menu').addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.closest('[data-close]')) { setDropdown(stDd, false); return; }
    const s = e.target.closest('[data-status]');
    if (s) { fleetState.status = s.dataset.status; setDropdown(stDd, false); renderFleet(); }
  });

  document.getElementById('sheet-backdrop').addEventListener('click', () => closeAllDropdowns());

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
    if (st) { fleetState.status = st.dataset.setStatus; renderFleet(); }
  });

  document.getElementById('filter-summary').addEventListener('click', (e) => {
    if (e.target.closest('[data-clear]')) {
      Object.assign(fleetState, { cat: 'all', type: null, status: 'actual' });
      renderFleet();
    }
  });

  renderFleet();
}

/* ===================== NAVEGACIÓN ===================== */
function renderNavFleetMenu() {
  document.getElementById('nav-fleet-menu').innerHTML =
    `<div class="mega-grid">` +
    fleetCategories.map(c => `<div class="mega-col">
      <a href="#flota" class="mega-head" data-nav-cat="${c.id}"><span class="m-ico">${icon(c.icon)}</span>${escHtml(c.label)}</a>
      <div class="mega-links">${c.types.map(t => `<a href="#flota" class="mega-link" data-nav-cat="${c.id}" data-nav-type="${t.id}">${escHtml(t.label)}</a>`).join('')}</div>
    </div>`).join('') +
    `</div><a href="#flota" class="mega-foot" data-nav-cat="all">Ver toda la flota ${CHEV}</a>`;
}

function initNav() {
  renderNavFleetMenu();
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.nav-toggle');
  const setMobile = (open) => {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('nav-locked', open);
  };
  toggle.addEventListener('click', (e) => { e.stopPropagation(); setMobile(!nav.classList.contains('menu-open')); });

  const markActive = id => {
    document.querySelectorAll('.nav-links [data-section]').forEach(a => a.classList.toggle('active', a.dataset.section === id));
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
  fleetDd.querySelector('.nav-dd-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !fleetDd.classList.contains('open');
    closeAllDropdowns(fleetDd);
    setDropdown(fleetDd, willOpen);
  });
  // Escritorio: abrir al pasar el ratón
  let hoverTimer;
  fleetDd.addEventListener('mouseenter', () => { if (!isMobile()) { clearTimeout(hoverTimer); closeAllDropdowns(fleetDd); setDropdown(fleetDd, true); } });
  fleetDd.addEventListener('mouseleave', () => { if (!isMobile()) hoverTimer = setTimeout(() => setDropdown(fleetDd, false), 180); });

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
  window.addEventListener('resize', () => { if (!isMobile()) { setMobile(false); document.body.classList.remove('sheet-open'); } });
}
