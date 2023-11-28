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
    }
      //comments
    setInterval(changeImage, 6500); // Change image every 6.5 seconds to account for the longer transition




    // Find the button with the class 'payment-button'
    //var button = document.querySelector('.payment-button');

    // Check if the button exists
    // if (button) {
    //     // Add a click event listener to the button
    //     button.addEventListener('click', function() {
    //         // Specify the URL you want to redirect to
    //         var url = 'https://buy.stripe.com/eVacPUcOa4q5ck8dQQ';
    //
    //         // Redirect to the specified URL
    //         window.location.href = url;
    //     });
    // }
});
