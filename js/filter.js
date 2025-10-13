function renderAircraft(filterType, filterValue) {
    const aircraftList = document.getElementById('aircraft-list');
    const aircraftTitle = document.getElementById('aircraft-title');

    // Limpiar la lista actual
    aircraftList.innerHTML = '';

    // Actualizar el título según el filtro
    if (filterType === 'decade') {
        aircraftTitle.textContent = `Aviones de los ${filterValue}`;
    } else if (filterType === 'history') {
        const historyLabels = {
            'guerra-civil': 'Guerra Civil Española',
            'posguerra': 'Posguerra',
            'guerra-fria': 'Guerra Fría',
            'era-moderna': 'Era Moderna'
        };
        aircraftTitle.textContent = `Aviones de la ${historyLabels[filterValue]}`;
    } else {
        aircraftTitle.textContent = 'Nuestros Aviones';
    }

    // Filtrar y renderizar aviones
    Object.keys(aircraftData).forEach(id => {
        const aircraft = aircraftData[id];
        if (filterType === 'all' || aircraft[filterType] === filterValue) {
            const card = document.createElement('div');
            card.className = 'aircraft-card';
            card.dataset.aircraft = id;
            card.innerHTML = `
                <div class="carousel">
                    <div class="carousel-images">
                        ${aircraft.images.map(img => `<img src="${img}" alt="${aircraft.title}">`).join('')}
                    </div>
                    <button class="carousel-prev" onclick="moveCarousel('${id}', -1)">&#10094;</button>
                    <button class="carousel-next" onclick="moveCarousel('${id}', 1)">&#10095;</button>
                </div>
                <h3>${aircraft.title}</h3>
                <p>${aircraft.description.split('.')[0]}.</p>
                <button onclick="showDetails('${id}')">Ver Detalles</button>
            `;
            aircraftList.appendChild(card);
        }
    });

    // Mostrar mensaje si no hay aviones
    if (aircraftList.children.length === 0) {
        aircraftList.innerHTML = '<p>No se encontraron aviones para este filtro.</p>';
    }
}

// Renderizar todos los aviones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderAircraft('all', '');
});
