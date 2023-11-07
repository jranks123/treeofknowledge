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
    var email = document.getElementById('email').value;
    fetch('https://script.google.com/macros/s/AKfycbwloTkeo9i3W_CO4KIH1rfOztPrZZpxld5Bae21rjTQS73ZyHCXSYlw-HwGVzuMsDhZGA/exec', {
        method: 'POST',
        mode: 'cors', // CORS mode
        body: JSON.stringify({ email: email }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // assuming the response is plain text
    })
    .then(data => {
        // Assuming the data is plain text, not JSON
        // Hide the form and show the thank you message
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'block';
    });
});
