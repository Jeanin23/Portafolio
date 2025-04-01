console.log("¡Bienvenido a mi portafolio!");

// Hacer aparecer las secciones con animación al hacer scroll
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Detectar si se hace scroll y cambiar la clase de la barra
window.addEventListener("scroll", function() {
    const navBar = document.querySelector(".nav-bar");
    if (window.scrollY > 50) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
});

