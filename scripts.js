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
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('emailForm').style.display = 'none';
    document.getElementById('loadingMessage').style.display = 'block';
    var email = document.getElementById('email').value;

    // JSONP requires you to add a script element to the page.
    var script = document.createElement('script');

    // Replace YOUR_SCRIPT_ID with the actual ID of your Google Apps Script
    script.src = 'https://script.google.com/macros/s/AKfycbx6Cb2umLU2ARkJvfCU73-hXrrhpajqfXDF5epvNeCBp81W9PGFrIVhgzIBW4K1KeXVTg/exec?callback=handleResponse&email=' + encodeURIComponent(email);

    // This function will handle the JSONP response
    window.handleResponse = function(data) {

        // Check the response status
        if (data.status === 'success') {
          document.getElementById('loadingMessage').style.display = 'none';
            // Hide the form and show the thank you message
            document.getElementById('thankYouMessage').style.display = 'block';
        } else {
            // Show the error message
            document.getElementById('errorMessage').style.display = 'block';
        }

        // Clean up by removing the script element
        script.parentNode.removeChild(script);
    };

    // Append the script to the DOM to start the request
    document.body.appendChild(script);

    // If the script fails to load, handle the error case
    script.onerror = function() {
        document.getElementById('loadingMessage').style.display = 'none';
        // Show error message
        document.getElementById('errorMessage').style.display = 'block';
        // Clean up by removing the script element
        script.parentNode.removeChild(script);
    };
});
