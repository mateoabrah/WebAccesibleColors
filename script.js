document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const totalImages = images.length;
    let currentIndex = 0;

    // Función para actualizar el carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100; 
        images.forEach(image => {
            image.style.transform = `translateX(${offset}%)`;
        });
    }

    // Función para pasar a la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages; 
        updateCarousel();
    }

    // Función para pasar a la imagen anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    // Asignar los eventos a los botones
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Inicializar el carrusel
    updateCarousel();

    // Rotación automática cada 3 segundos
    setInterval(nextImage, 4000);
});
