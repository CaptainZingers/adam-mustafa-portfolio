// Add JavaScript for animations, hover effects, etc.
function hoverEffect(element) {
    element.style.backgroundColor = "#1e3a8a";
    element.style.color = "#fff";
}

function removeEffect(element) {
    element.style.backgroundColor = "transparent";
    element.style.color = "#1e3a8a";
}

// Lightbox Functions for Gallery
function openImage(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}
