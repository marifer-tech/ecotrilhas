//menu hamburguer
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("menu-active");
    });
});



//leia mais/menos
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.parentElement;
            const shortDescription = card.querySelector(".short-description");
            const fullDescription = card.querySelector(".full-description");

            if (fullDescription.style.display === "none" || fullDescription.style.display === "") {
                fullDescription.style.display = "block";
                shortDescription.style.display = "none";
                button.textContent = "Leia Menos";
            } else {
                fullDescription.style.display = "none";
                shortDescription.style.display = "block";
                button.textContent = "Leia Mais";
            }
        });
    });
});


//lightbox para imagens
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = lightbox.querySelector(".close");
    const prevButton = lightbox.querySelector(".prev");
    const nextButton = lightbox.querySelector(".next");

    let currentIndex = 0;

    // Abre o Lightbox ao clicar em uma imagem
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            updateLightbox();
            lightbox.style.display = "flex";
        });
    });

    // Fecha o Lightbox
    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Navega para a imagem anterior
    prevButton.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });

    // Navega para a próxima imagem
    nextButton.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });

    // Fecha o Lightbox ao clicar fora da imagem
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Atualiza a imagem no Lightbox
    function updateLightbox() {
        lightboxImage.src = images[currentIndex].src;
    }
});

//ver mais fotos
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = lightbox.querySelector(".close");
    const prevButton = lightbox.querySelector(".prev");
    const nextButton = lightbox.querySelector(".next");
    const viewMoreButton = document.getElementById("view-more");

    const additionalImages = [
        "images/tour/tour9.jpg",
        "images/tour/tour10.jpg",
        "images/tour/tour11.jpg",
        "images/tour/tour12.jpg",
        "images/tour/tour13.jpg",
        "images/tour/tour14.jpg",
        "images/tour/tour15.jpg"
    ];

    let currentIndex = 0;
    let isAdditionalImages = false;

    // Abre o Lightbox ao clicar em uma imagem
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            isAdditionalImages = false;
            currentIndex = index;
            updateLightbox();
            lightbox.style.display = "flex";
        });
    });

    // Abre o Lightbox com imagens adicionais ao clicar no botão "Ver Mais Fotos"
    viewMoreButton.addEventListener("click", () => {
        isAdditionalImages = true;
        currentIndex = 0;
        updateLightbox();
        lightbox.style.display = "flex";
    });

    // Fecha o Lightbox
    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Navega para a imagem anterior
    prevButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const imagesArray = isAdditionalImages ? additionalImages : Array.from(images).map(img => img.src);
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        updateLightbox();
    });

    // Navega para a próxima imagem
    nextButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const imagesArray = isAdditionalImages ? additionalImages : Array.from(images).map(img => img.src);
        currentIndex = (currentIndex + 1) % imagesArray.length;
        updateLightbox();
    });

    // Fecha o Lightbox ao clicar fora da imagem
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Atualiza a imagem no Lightbox
    function updateLightbox() {
        const imagesArray = isAdditionalImages ? additionalImages : Array.from(images).map(img => img.src);
        lightboxImage.src = imagesArray[currentIndex];
    }
});