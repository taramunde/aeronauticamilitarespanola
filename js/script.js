// Agregamos un evento para cambiar el color del menú al hacer scroll
window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 0) {
        menu.style.background = '#34495e';
    } else {
        menu.style.background = '#2c3e50';
    }
});
