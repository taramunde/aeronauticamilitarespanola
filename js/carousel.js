const carousels = {};

function moveCarousel(aircraftId, direction) {
    if (!carousels[aircraftId]) {
        carousels[aircraftId] = { index: 0 };
    }

    const carousel = document.querySelector(`.aircraft-card[data-aircraft="${aircraftId}"] .carousel-images`);
    const images = carousel.querySelectorAll('img');
    carousels[aircraftId].index = (carousels[aircraftId].index + direction + images.length) % images.length;
    carousel.style.transform = `translateX(-${carousels[aircraftId].index * 100}%)`;
}
