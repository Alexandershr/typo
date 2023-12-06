// JavaScript for image gallery
document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('#gallery img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    }

    // Show the first image initially
    showImage(currentImageIndex);

    // Add event listeners to the buttons
    document.getElementById('prevButton').addEventListener('click', prevImage);
    document.getElementById('nextButton').addEventListener('click', nextImage);
});
