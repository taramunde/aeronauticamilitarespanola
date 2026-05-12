// Navegación por pestañas
const views = document.querySelectorAll('.view');
const navBtns = document.querySelectorAll('[data-target]');

function showView(target) {
    views.forEach(v => v.classList.toggle('hidden', v.id !== 'view-' + target));
    navBtns.forEach(b => {
        if(b.dataset.target) b.classList.toggle('active', b.dataset.target === target);
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.target));
});

// También los botones del hero y cards inicio
document.querySelectorAll('.nav-hero, #view-inicio [data-target]').forEach(el=>{
    el.addEventListener('click', ()=> showView(el.dataset.target));
});

// Timeline
const tlData = {
    '1913a': {y:'1913', t:'Creación del Servicio de Aeronáutica Militar', d:'El 28 de febrero, por impulso del coronel Pedro Vives Vich, se crea oficialmente la Aeronáutica Militar española mediante Real Decreto. Se establece en Cuatro Vientos.'},
    '1913b': {y:'1913', t:'Primer bombardeo aéreo sistemático del mundo', d:'El 17 de diciembre, aviones Lohner Pfeilflieger de la escuadrilla de Tetuán bombardean Ben Karrix (Marruecos). España se convierte en pionera del poder aéreo ofensivo.'},
    '1926': {y:'1926', t:'El vuelo del Plus Ultra', d:'Ramón Franco y su tripulación cruzan el Atlántico Sur en un Dornier Do J Wal desde Palos de la Frontera hasta Buenos Aires, en 59 horas de vuelo.'},
    '1931': {y:'1931', t:'Segunda República', d:'Reorganización de las fuerzas aéreas. Se crean las Fuerzas Aéreas de la República Española (FARE).'},
    '1936': {y:'1936', t:'Guerra Civil', d:'La aviación se divide. FARE contra Aviación Nacional, con apoyo de la Legión Cóndor alemana y la Aviazione Legionaria italiana.'},
    '1939': {y:'1939', t:'Nace el Ejército del Aire', d:'El 7 de octubre, Ley de creación del Ejército del Aire como ejército independiente, tercero de las Fuerzas Armadas.'},
    '1953': {y:'1953', t:'Pactos de Madrid con EEUU', d:'Llegan los F-86 Sabre, T-33 y más tarde F-104. España entra en la era del reactor y la OTAN (1982).'},
    '1986': {y:'1986', t:'Llegada del F-18 Hornet', d:'Programa FACA. Los primeros EF-18 llegan a Torrejón y Zaragoza, sustituyendo a los Mirage III y F-4 Phantom.'},
    '2003': {y:'2003', t:'Eurofighter Typhoon', d:'Entra en servicio el C.16 en Morón. Caza europeo de 4ª+ generación fabricado con participación española.'},
    '2022': {y:'2022', t:'Ejército del Aire y del Espacio', d:'Cambio de denominación oficial para reflejar las nuevas competencias en el dominio espacial.'},
    '2026': {y:'2026', t:'Halcón II y futuro FCAS', d:'Recepción de los primeros Eurofighter Tranche 4. España participa en el desarrollo del caza europeo de 6ª generación FCAS.'},
};

const tlBtns = document.querySelectorAll('.timeline-btn');
const tlYear = document.getElementById('tl-year');
const tlTitle = document.getElementById('tl-title');
const tlDesc = document.getElementById('tl-desc');

tlBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        tlBtns.forEach(b=>b.classList.remove('active', '[&_.timeline-dot]:!bg-[#ffc400]', '[&_.timeline-dot]:scale-125'));
        btn.classList.add('active');
        btn.querySelector('.timeline-dot').classList.add('!bg-[#ffc400]');
        const data = tlData[btn.dataset.y];
        tlYear.textContent = data.y;
        tlTitle.textContent = data.t;
        tlDesc.textContent = data.d;
        document.getElementById('timeline-panel').animate([{opacity:0.5, transform:'translateY(5px)'},{opacity:1, transform:'translateY(0)'}], {duration:300});
    });
});
tlBtns[0].click();

// Buscador flota
const buscar = document.getElementById('buscarFlota');
buscar?.addEventListener('input', e=>{
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.flota-card').forEach(card=>{
        const name = card.dataset.name || '';
        card.style.display = name.includes(q) ? '' : 'none';
    });
});

// Filtro históricas
document.querySelectorAll('.era-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        document.querySelectorAll('.era-btn').forEach(b=>b.classList.remove('active','bg-[#ffc400]','text-black'));
        btn.classList.add('active','bg-[#ffc400]','text-black');
        const era = btn.dataset.era;
        document.querySelectorAll('.hist-card').forEach(card=>{
            card.style.display = (era==='todos' || card.dataset.era===era) ? '' : 'none';
        });
    });
});

// Modal fichas
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

function openModal(title, html){
    modalTitle.textContent = title;
    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}
function closeModal(){
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

document.querySelectorAll('.flota-card').forEach(card=>{
    card.addEventListener('click', ()=>{
        const title = card.querySelector('h3').textContent;
        let html = '';
        if(title.includes('Eurofighter')){
            html = `<p><strong>67 unidades en servicio:</strong> 15 Tranche 1, 32 Tranche 2, 20 Tranche 3A.</p><p class="mt-3"><strong>Bases:</strong> Ala 11 (Morón), Ala 14 (Albacete). Destacamentos en Los Llanos y Gando.</p><p class="mt-3"><strong>Sistemas:</strong> Radar CAPTOR-M, misiles Meteor BVR, IRIS-T, cañón Mauser BK-27 de 27mm. Velocidad máxima Mach 2 a 55.000 pies.</p><p class="mt-3 text-[#ffc400]">Próxima entrega: 25 unidades Tranche 4 (Halcón II) entre 2026-2030.</p>`;
        } else if(title.includes('Hornet')){
            html = `<p><strong>81 unidades:</strong> 69 EF-18A+ monoplaza y 12 EF-18B+ biplaza modernizados a estándar M.</p><p class="mt-3"><strong>Bases:</strong> Ala 12 (Torrejón), Ala 15 (Zaragoza), Ala 46 (Gando).</p><p class="mt-3"><strong>Historial:</strong> Combate real en Libia (2011), Balcanes, misiones OTAN Báltico. Más de 35 años de servicio.</p>`;
        } else if(title.includes('A400M')){
            html = `<p><strong>14 en servicio de 27 previstos</strong> (+6 en 2026). Fabricado en Sevilla.</p><p class="mt-3"><strong>Capacidades:</strong> 37 toneladas de carga, 116 paracaidistas, reabastecimiento en vuelo.</p><p class="mt-3">Ha realizado misiones en Afganistán, Mali, Turquía, evacuaciones humanitarias.</p>`;
        } else {
            html = `<p>Información técnica detallada disponible en fuentes oficiales del Ejército del Aire y del Espacio.</p>`;
        }
        openModal(title, html);
    });
});

// Inicial
showView('inicio');