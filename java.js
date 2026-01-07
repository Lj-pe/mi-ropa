// Carrusel con navegación automática y manual
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const btnIzquierda = document.querySelector(".flecha.izquierda");
    const btnDerecha = document.querySelector(".flecha.derecha");
    let currentSlide = 0;

    // Función para mostrar un slide específico
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("activo");
            } else {
                slide.classList.remove("activo");
            }
        });
    }

    // Cambiar al siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambiar al slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Eventos de clic en flechas
    btnDerecha.addEventListener("click", nextSlide);
    btnIzquierda.addEventListener("click", prevSlide);

    // Cambio automático cada 4 segundos
    setInterval(nextSlide, 2000);
});