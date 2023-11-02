document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.carousel-image');
    let currentImage = 0;

    let currentImageIndex = 0;

    images[currentImage].classList.add('active');

    function changeImage(targetIndex = null) {
        images[currentImageIndex].style.opacity = 0;

        if (targetIndex !== null) {
            currentImageIndex = targetIndex;
        } else {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // Set the z-index
        images.forEach((img, index) => {
            img.style.zIndex = index === currentImageIndex ? 1 : 0;
        });

        images[currentImageIndex].style.opacity = 1;
        dots[currentImageIndex].classList.add('active');
    }

    setInterval(changeImage, 6500); // Change image every 6.5 seconds to account for the longer transition
});
