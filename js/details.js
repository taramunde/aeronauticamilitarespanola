function showDetails(aircraftId) {
    const detailsSection = document.getElementById('details');
    const detailsTitle = document.getElementById('details-title');
    const detailsDescription = document.getElementById('details-description');

    detailsTitle.textContent = aircraftData[aircraftId].title;
    detailsDescription.textContent = aircraftData[aircraftId].description;
    detailsSection.classList.remove('hidden');
}

function closeDetails() {
    const detailsSection = document.getElementById('details');
    detailsSection.classList.add('hidden');
}
